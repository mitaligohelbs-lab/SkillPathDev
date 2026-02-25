import React from "react";

export type CardTypes = {
  children?: React.ReactNode;
  disabled?: boolean;
  borderColor?: string;
  handleCardClick: () => void;
  id: number | string;
};

export type HeaderTypes = {
  title: string;
  description: string;
};

export type LayoutType = {
  children: React.ReactNode;
  isCard?:boolean
};
