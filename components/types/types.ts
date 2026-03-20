import React, { Dispatch, SetStateAction } from "react";

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

export type LeaderBoardDescriptionTypes = {
  technology: string;
  topic: string;
  level: number;
};

export type searchBarTypes = {
  setLeaderBoardData: Dispatch<SetStateAction<any>>;
  select: {
    technology: string;
    topic: string;
  };
  setSelect: Dispatch<SetStateAction<any>>;
  setSelectedLevel: Dispatch<SetStateAction<number>>;
  selectedLevel: number;
  isBookMarkQuestion?: boolean;
};

export type BookmarkCardTypes = {
  questionId: number;
  handleBookmarkClick: (id: number) => {};
  level: string;
  technology: string;
  topic: string;
};
