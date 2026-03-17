"use client";

import clsx from "clsx";
import ChellengeFriend from "@/components/modal/ChellengeFriend";
import ShareOnSocialMedia from "@/components/modal/ShareOnSocialMedia";
import { shareButtonTypes } from "@/components/modal/types/ModalTypes";
import { Share2, Swords } from "lucide-react";

const Share = ({
  setIsOpenShareModal,
  isOpenShareModal,
  setIsOpenChallengeModal,
  isOpenChallengeModal,
  score,
}: shareButtonTypes) => {
  const isDisabled = score === 0;

  const baseBtn =
    "flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors";

  return (
    <>
      <div className="flex gap-2">
        <button
          className={clsx(
            baseBtn,
            isDisabled
              ? "opacity-50 cursor-not-allowed border border-gray-300 text-gray-400"
              : "border border-[#31c47f]/30 bg-[#31c47f]/5 text-[#31c47f] hover:bg-[#31c47f]/10",
          )}
          onClick={() => setIsOpenShareModal(true)}
          disabled={isDisabled}
          title={isDisabled ? "Play the quiz to generate a score to share" : ""}
        >
          <Share2 className="w-4 h-4" />
          Share Score
        </button>

        <button
          className={clsx(
            baseBtn,
            isDisabled
              ? "opacity-50 cursor-not-allowed border border-gray-300 text-gray-400"
              : "border border-[#31c47f]/30 text-[#31c47f] hover:bg-[#31c47f]/10",
          )}
          onClick={() => setIsOpenChallengeModal(true)}
          disabled={isDisabled}
          title={isDisabled ? "Play the quiz to challenge friends" : ""}
        >
          <Swords className="w-4 h-4" />
          Challenge Friends
        </button>
      </div>

      {isDisabled && (
        <p className="text-xs text-gray-400 mt-1 text-center">
          Play the quiz to share your score
        </p>
      )}

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
