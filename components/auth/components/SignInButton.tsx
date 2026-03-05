import Link from "next/link";

const SignInButton = () => {
  return (
    <Link
      href="/signIn"
      className="px-4 py-2 rounded-xl border bg-[#15181e] border-[#272c34]"
    >
      Sign In
    </Link>
  );
};

export default SignInButton;
