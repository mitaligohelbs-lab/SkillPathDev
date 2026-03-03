import { featureCardTypes } from "../types/types";

const FeatureCard = ({
  title,
  icon,
  desc,
  bgColor,
  textColor,
  descriptionFont,
}: featureCardTypes) => {
  return (
    <div
      className={`flex flex-col justify-center gap-2  w-full border items-center border-[#272b35] rounded-xl p-5 ${bgColor}`}
      key={title}
    >
      <div className="text-[#31C47F]">{icon}</div>
      <div className={`font-bold ${textColor}`}>{title}</div>
      <div className={`text-[#707D8F] ${descriptionFont}`}>{desc}</div>
    </div>
  );
};

export default FeatureCard;
