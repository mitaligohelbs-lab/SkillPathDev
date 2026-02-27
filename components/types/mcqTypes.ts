import { Dispatch, SetStateAction } from "react";

export type MCQList = {
  id: number;
  technology: string;
  topic: string;
  level: string;
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  correct_answer: string;
  explanation: string;
  created_at: string;
};

export type MCQQuestion = {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
};

export type MCQDisplayProps = {
  question: MCQList;
  setCurrentQuestionNumber: Dispatch<SetStateAction<number>>;
};

export type DisplayOptionProps = {
  text: string;
  option?: string;
  isSelected?: boolean;
  setSelectOption?: (value: string) => void;
  isCheckAnswerBox?: boolean;
  color?: string;
  disabled?: boolean;
};

export type chckAnswerProps = {
  disabled: boolean;
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  setCurrentQuestionNumber: Dispatch<SetStateAction<number>>;
  resetOption: () => void;
};
