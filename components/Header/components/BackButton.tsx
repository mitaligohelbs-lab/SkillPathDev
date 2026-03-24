"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="p-1 md:p-2 rounded-lg transition-colors cursor-pointer"
    >
      <ArrowLeft className="w-5 h-5 text-foreground" />
    </button>
  );
};

export default BackButton;
