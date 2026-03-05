import { Code2 } from "lucide-react";

import { Stack } from "@mui/material";
import Link from "next/link";

import Layout from "../common/Layout";
import AuthForm from "./components/SignInForm";

const Auth = ({ isLogin = false }) => {
  return (
    <Layout>
      <Stack className="justify-between items-center space-y-3 w-full">
        <div className="w-14 h-14 rounded-2xl flex justify-center items-center bg-[#31c47f]">
          <Code2 className="w-8 h-8 text-black" />
        </div>
        <div className="text-3xl font-bold">
          {isLogin ? "Welcome Back" : "Create account"}
        </div>
        <div className="text-[#707d8f] text-sm pb-2">
          {isLogin
            ? "Sign in to continue your journey"
            : "Start your coding interview prep?"}
        </div>
        <AuthForm isLogin={isLogin} />
        <div className="flex gap-2">
          <span className="text-[#707d8f] text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account"}
          </span>

          {isLogin ? (
            <Link href="/signUp" className="text-[#31c47f] text-md">
              Sign up
            </Link>
          ) : (
            <Link href="/signIn" className="text-[#31c47f] text-md">
              Sign In
            </Link>
          )}
        </div>
      </Stack>
    </Layout>
  );
};

export default Auth;
