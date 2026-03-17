import React from "react";

export type CardTypes = {
  children?: React.ReactNode;
  disabled?: boolean;
  borderColor?: string;
  handleCardClick?: () => void;
  id: number | string;
  bgColor?: string;
};

export type HeaderTypes = {
  title: string;
  description: string;
};

export type LayoutType = {
  children: React.ReactNode;
  isCard?: boolean;
  className?: string;
};

export type MainHeaderTypes = {
  text: string;
  subText?: string;
  isDisplay?: boolean;
  className?: string;
};

export type featureCardTypes = {
  title: string;
  icon?: React.ReactNode;
  desc: string;
  bgColor?: string;
  textColor?: string;
  descriptionFont?: string;
};

export type actionButtonProps = {
  icon: React.ReactNode;
  text: string;
  textColor?: string;
  bgColor?: string;
  handleClick?: () => void;
};

export type InputTypes = {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  name: string;
  type: string;
  isRequired?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Modal =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export type ShareModalTypes = {
  open: boolean;
  handleClose: () => {};
  modalHeader: string;
  icon: React.ReactNode;
  subTitle: string;
  isDisplayChallengeModal?: boolean;
  copyMessage: string;
};

export type ModalHeaderTypes = {
  modalHeader: string;
  icon: React.ReactNode;
  subTitle: string;
  handleClose: () => {};
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
