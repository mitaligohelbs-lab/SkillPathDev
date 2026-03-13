import Link from "next/link";
import { LogIn } from "lucide-react";

const SignInButton = () => {
  return (
    <div className="px-3">
      <div className="hidden md:block">
        <Link
          href="/signIn"
          className="px-4 py-2 rounded-xl border bg-[#15181e] border-[#272c34]"
        >
          Sign In
        </Link>
      </div>
      <div className="block md:hidden w-5 h-5 text-[#707d8f]">
        <LogIn />
      </div>
    </div>
  );
};

export default SignInButton;
