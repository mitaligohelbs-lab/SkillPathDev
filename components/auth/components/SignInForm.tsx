"use client";

import Input from "@/components/common/Input";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({ isLogin = false }) => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { signIn, setActive: signInSetActive } = useSignIn();
  const router = useRouter();

  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState("");

  const signUpSchema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
  });

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: values.email,
        password: values.password,
        firstName: values.name,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setCodeSent(true);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: otp,
      });

      if (completeSignUp.status === "complete") {
        router.push("/");
        await setActive({ session: completeSignUp.createdSessionId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (values: any) => {
    if (!signIn) return;
    try {
      const result = await signIn?.create({
        identifier: values.email,
        password: values.password,
      });

      if (result?.status === "complete") {
        await signInSetActive({ session: result.createdSessionId });
        router.push("/");
      }
    } catch (error) {
      console.log(error);
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
        <form onSubmit={handleSubmit} className="space-y-3">
          {!isLogin && !codeSent && (
            <Input
              icon={<User />}
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
              icon={<Mail />}
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
            <Input
              icon={<Lock />}
              placeholder="Password"
              isRequired
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password ? errors.password : undefined}
            />
          )}

          {codeSent && (
            <Input
              icon={<Mail />}
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
              className="px-6 py-3 w-full bg-[#31c47f] rounded-xl text-black font-bold flex justify-center items-center gap-2"
            >
              <span>Send Code</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={isLogin ? () => handleLogin(values) : verifyOtp}
              className="px-6 py-3 w-full bg-[#31c47f] rounded-xl text-black font-bold flex justify-center items-center gap-2"
            >
              <span>{isLogin ? "Sign In" : "Verify & Sign Up"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </form>
      )}
    </Formik>
  );
};

export default AuthForm;
