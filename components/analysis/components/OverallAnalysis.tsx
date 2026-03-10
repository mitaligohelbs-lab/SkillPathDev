import FeatureCard from "@/components/common/FeatureCard";

const OverallAnalysis = ({ data }: any) => {
  return (
    <div className="flex gap-3 w-full pt-5">
      {data.map(({ text, value, icon }: any) => (
        <FeatureCard icon={icon} title={text} desc={value} key={value} />
      ))}
    </div>
  );
};

export default OverallAnalysis;
