import { Dispatch, ReactNode, SetStateAction } from "react";

export type ShareModalTypes = {
  open: boolean;
  handleClose: () => void;
  modalHeader: string;
  icon: ReactNode;
  subTitle: string;
  isDisplayChallengeModal?: boolean;
  copyMessage: string;
};

export type ModalHeaderTypes = {
  modalHeader: string;
  icon: ReactNode;
  subTitle: string;
  handleClose: () => void;
};

export type ModalIconTypes = {
  shareUrl: string;
  isDisplayChallengeModal?: boolean;
  title: string;
};

export type ModalBodyTypes = {
  topic: string;
  level: string | number;
  isDisplayChallengeModal?: boolean;
  challengeUrl: string;
  leaderboardUrl: string;
  score: string | number;
};

export type shareTypes = {
  open: boolean;
  handleClose: () => void;
};

export type shareButtonTypes = {
  setIsOpenShareModal: Dispatch<SetStateAction<boolean>>;
  isOpenShareModal: boolean;
  setIsOpenChallengeModal: Dispatch<SetStateAction<boolean>>;
  isOpenChallengeModal: boolean;
  score: number;
};
