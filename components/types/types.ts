import React from "react";

export type CardTypes = {
  children?: React.ReactNode;
  disabled?: boolean;
  borderColor?: string;
  handleCardClick?: () => void;
  id: number | string;
};

export type HeaderTypes = {
  title: string;
  description: string;
};

export type LayoutType = {
  children: React.ReactNode;
  isCard?: boolean;
};

export type MainHeaderTypes = {
  text: string;
  subText?: string;
  isDisplay?: boolean;
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
