"use client";

import { useRouter } from "next/navigation";

const GetCertificateButton = ({ topic, technology }: any) => {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        router.push(`/certificate?technology=${technology}&topic=${topic}`)
      }
      className="flex w-full justify-center items-center gap-2 px-8 py-2 rounded-xl bg-[#31c47f] text-black  font-semibold text-lg disabled:opacity-50 transition-opacity"
    >
      Get Certificate
    </button>
  );
};

export default GetCertificateButton;
