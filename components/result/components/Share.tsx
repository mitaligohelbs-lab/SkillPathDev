"use client";

import ChellengeFriend from "@/components/modal/ChellengeFriend";
import ShareOnSocialMedia from "@/components/modal/ShareOnSocialMedia";
import { Share2, Swords } from "lucide-react";

const Share = ({
  setIsOpenShareModal,
  isOpenShareModal,
  setIsOpenChallengeModal,
  isOpenChallengeModal,
}: any) => {
  return (
    <>
      <div className="flex gap-2">
        <button
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#31c47f]/30 bg-[#31c47f]/5 text-[#31c47f] text-sm font-semibold hover:bg-[#31c47f]/10 transition-colors"
          onClick={() => setIsOpenShareModal(true)}
        >
          <Share2 className="w-4 h-4" />
          Share Score
        </button>
        <button
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl  border  text-sm font-semibold transition-colors"
          onClick={() => setIsOpenChallengeModal(true)}
        >
          <Swords className="w-4 h-4" />
          Challenge Friends
        </button>
      </div>
      {isOpenShareModal && (
        <ShareOnSocialMedia
          open={isOpenShareModal}
          handleClose={() => setIsOpenShareModal(false)}
        />
      )}
      {isOpenChallengeModal && (
        <ChellengeFriend
          open={isOpenChallengeModal}
          handleClose={() => setIsOpenChallengeModal(false)}
        />
      )}
    </>
  );
};

export default Share;
