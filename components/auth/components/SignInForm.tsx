"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSignIn, useSignUp } from "@clerk/nextjs";

import Input from "@/components/common/Input";

import { ArrowRight, Lock, Mail, User, Loader } from "lucide-react";

const AuthForm = ({ isLogin = false }) => {
  const { isLoaded: isLoadingSignUp, signUp, setActive } = useSignUp();
  const { signIn, setActive: signInSetActive } = useSignIn();
  const router = useRouter();

  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const signUpSchema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters")
      .required("Password is required"),
  });

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    if (!isLoadingSignUp) return;
    setLoading(true);
    setPasswordError("");

    try {
      await signUp.create({
        emailAddress: values.email,
        password: values.password,
        firstName: values.name,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      toast.success(
        "Verification code sent successfully! Please check your email.",
      );
      setCodeSent(true);
    } catch (err: any) {
      const code = err?.errors?.[0]?.code;
      const message = err?.errors?.[0]?.message;

      if (code === "form_password_pwned") {
        setPasswordError(
          "This password is unsafe or found in a data breach. Please follow the rules below.",
        );
      } else {
        setPasswordError(message || "Something went wrong");
      }

      toast.error(message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!isLoadingSignUp) return;
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: otp,
      });

      if (completeSignUp.status === "complete") {
        toast.success("Verification successful!");
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      } else {
        toast.error("Verification failed.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (values: any) => {
    if (!signIn) return;
    setLoading(true);

    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      });

      if (result.status === "complete") {
        toast.success("Login successful!");
        await signInSetActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        toast.error("Login failed.");
      }
    } catch (err: any) {
      const message = err?.errors?.[0]?.message;
      toast.error(message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validationSchema={isLogin ? loginSchema : signUpSchema}
      onSubmit={isLogin ? handleLogin : handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-3 sm:space-y-4"
          >
            {!isLogin && !codeSent && (
              <Input
                icon={<User className="w-4 h-4 sm:w-5 sm:h-5" />}
                placeholder="Display name"
                isRequired
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name ? errors.name : undefined}
              />
            )}

            {!codeSent && (
              <Input
                icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
                placeholder="Email"
                isRequired
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email ? errors.email : undefined}
              />
            )}

            {!codeSent && (
              <>
                <Input
                  icon={<Lock className="w-4 h-4 sm:w-5 sm:h-5" />}
                  placeholder="Password"
                  isRequired
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={(e: any) => {
                    handleChange(e);
                    setPasswordError("");
                  }}
                  onBlur={handleBlur}
                  error={touched.password ? errors.password : undefined}
                />

                {passwordError && (
                  <div className="mt-2 p-3 rounded-lg border border-red-500 bg-red-500/10 text-red-400 text-sm">
                    <p className="font-semibold mb-2">⚠ Password issue:</p>
                    <p className="mb-2 ">{passwordError}</p>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-start">
                      <li>At least 8 characters</li>
                      <li>Include uppercase, lowercase</li>
                      <li>Include number & special character</li>
                      <li>Avoid common passwords</li>
                      <li>Must not be previously leaked</li>
                    </ul>
                  </div>
                )}
              </>
            )}

            {codeSent && (
              <Input
                icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
                placeholder="Enter verification code"
                type="text"
                name="otp"
                value={otp}
                onChange={(e: any) => setOtp(e.target.value)}
              />
            )}

            {!codeSent && !isLogin ? (
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2
                py-2.5 sm:py-3
                text-sm sm:text-base
                bg-[#31c47f] text-black
                font-bold rounded-xl
                transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
                    Loading...
                  </>
                ) : (
                  <>
                    Send Code
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={isLogin ? () => handleLogin(values) : verifyOtp}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2
                py-2.5 sm:py-3
                text-sm sm:text-base
                bg-[#31c47f] text-black
                font-bold rounded-xl
                transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
                    Loading...
                  </>
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Verify & Sign Up"}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </form>
      )}
    </Formik>
  );
};

export default AuthForm;
