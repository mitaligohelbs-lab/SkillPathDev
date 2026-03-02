"use client";

import DisplayOption from "@/components/common/DisplayOption";
import CheckAnswerButton from "@/components/result/components/CheckAnswerButton";
import { MCQDisplayProps } from "@/components/types/mcqTypes";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const MCQDisplay = ({
  question,
  setCurrentQuestionNumber,
  currQuestionNumber,
}: MCQDisplayProps) => {
  const [selectOption, setSelectOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const isCorrect = question?.correct_answer === selectOption;

  const options = [
    { text: question.A, option: "A" },
    { text: question.B, option: "B" },
    { text: question.C, option: "C" },
    { text: question.D, option: "D" },
  ];

  return (
    <Stack>
      <Typography variant="h5">
        <pre className="p-6 rounded-xl bg-card border bg-[#15181e] border-[#272c34] font-mono text-sm  overflow-x-auto">
          {`${currQuestionNumber}  ${question.question}`}
        </pre>
      </Typography>
      <Box pt={3} className="space-y-2">
        {question &&
          options.map(({ text, option }) => (
            <DisplayOption
              key={option}
              text={text}
              option={option}
              isSelected={selectOption === option}
              setSelectOption={setSelectOption}
              disabled={submitted}
            />
          ))}
      </Box>
      <CheckAnswerButton
        disabled={!selectOption}
        submitted={submitted}
        setSubmitted={setSubmitted}
        setCurrentQuestionNumber={setCurrentQuestionNumber}
        resetOption={() => setSelectOption(null)}
        isCorrect={isCorrect}
        currQuestionNumber={currQuestionNumber}
      />
      {submitted && (
        <div className="pt-3">
          <DisplayOption
            text={
              isCorrect
                ? "✓ Correct!"
                : `✗ Wrong! Correct answer: ${question?.correct_answer}`
            }
            isCheckAnswerBox
            color={
              isCorrect
                ? "bg-[#31C47F]/10 border-[#31c47f] text-[#31c47f]"
                : "bg-[#d345451a] border-[#d34545] text-[#d34545]"
            }
          />
        </div>
      )}
    </Stack>
  );
};

export default MCQDisplay;
