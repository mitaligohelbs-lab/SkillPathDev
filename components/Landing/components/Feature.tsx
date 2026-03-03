import FeatureCard from "@/components/common/FeatureCard";
import { ALL_FEATURE } from "@/constant";

const Feature = () => (
  <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {ALL_FEATURE.map(({ icon, title, desc }) => (
      <FeatureCard icon={icon} title={title} desc={desc} />
    ))}
  </div>
);
export default Feature;
