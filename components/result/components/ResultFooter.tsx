import { RESULT_FOOTER_CONTENT } from "@/constant";

const ResultFooter = () => (
  <div className="space-y-3 pb-10">
    {RESULT_FOOTER_CONTENT?.map(({ title, description }) => (
      <section className="flex flex-col gap-2 space-y-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-[#707D8F] text-sm">{description}</p>
      </section>
    ))}
  </div>
);

export default ResultFooter;
