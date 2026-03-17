import ShareScoreModal from "./ShareScoreModal";
import { Share2 } from "lucide-react";

const ShareOnSocialMedia = ({ open, handleClose }: any) => {
  return (
    <ShareScoreModal
      modalHeader="Share Your Score"
      icon={<Share2 className="w-5 h-5 text-[#31c47f]" />}
      subTitle="Show off your achievement via SkillPathDev!"
      copyMessage="Copy Text"
      open={open}
      handleClose={handleClose}
    />
  );
};

export default ShareOnSocialMedia;
