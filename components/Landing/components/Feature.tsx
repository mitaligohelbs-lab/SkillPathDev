import { ALL_FEATURE } from "@/constant";

const Feature = () => (
  <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {ALL_FEATURE.map(({ icon, title, desc }) => (
      <div
        className="flex flex-col gap-2 border border-[#272b35] rounded-xl p-5"
        key={title}
      >
        <div className="text-[#31C47F]">{icon}</div>
        <div className="font-bold">{title}</div>
        <div className="text-[#707D8F]">{desc}</div>
      </div>
    ))}
  </div>
);
export default Feature;
