import ShareScoreModal from "./ShareScoreModal";
import { Swords } from "lucide-react";

const ChellengeFriend = ({ open, handleClose }: any) => {
  return (
    <ShareScoreModal
      modalHeader="Challenge Friends"
      icon={<Swords className="w-5 h-5 text-[#31c47f]" />}
      subTitle="Send friends the quiz link from SkillPathDev and see who scores higher!"
      copyMessage="Copy Challenge Message"
      isDisplayChallengeModal={true}
      open={open}
      handleClose={handleClose}
    />
  );
};

export default ChellengeFriend;
