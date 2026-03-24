import Link from "next/link";

const GetCertificateButton = ({ topic, technology }: any) => {
  return (
    <Link
      href={`/certificate?technology=${technology}&topic=${topic}`}
      className="flex w-full justify-center items-center gap-2 px-8 py-2 rounded-xl bg-[#31c47f] text-black  font-semibold text-lg disabled:opacity-50 transition-opacity"
    >
      Get Certificate
    </Link>
  );
};

export default GetCertificateButton;
