import Link from "next/link";

import { Code2 } from "lucide-react";
import { Stack } from "@mui/material";

import Layout from "../common/Layout";
import AuthForm from "./components/SignInForm";

const Auth = ({ isLogin = false }) => {
  return (
    <Layout>
      <Stack className="w-full items-center text-center space-y-3">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex justify-center items-center bg-[#31c47f]">
          <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
        </div>
        <div className="text-2xl md:text-3xl font-bold">
          {isLogin ? "Welcome Back" : "Create account"}
        </div>
        <div className="text-[#707d8f] text-sm sm:text-base pb-1 sm:pb-2">
          {isLogin
            ? "Sign in to continue your journey"
            : "Start your coding interview prep?"}
        </div>
        <AuthForm isLogin={isLogin} />
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 text-sm">
          <span className="text-[#707d8f]">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>

          {isLogin ? (
            <Link href="/signUp" className="text-[#31c47f] font-medium">
              Sign up
            </Link>
          ) : (
            <Link href="/signIn" className="text-[#31c47f] font-medium">
              Sign In
            </Link>
          )}
        </div>
      </Stack>
    </Layout>
  );
};

export default Auth;
