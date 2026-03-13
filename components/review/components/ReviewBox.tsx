import { CheckCircle2, XCircle } from "lucide-react";
import { Box } from "@mui/material";
import DisplayOption from "@/components/common/DisplayOption";

const ReviewBox = ({ question, questionNumber }: any) => {
  const isCorrect = question.correct_answer === question.userAnswer;

  return (
    <div
      className={`w-full border rounded-xl 
      p-3 sm:p-4 md:p-5 
      space-y-4 sm:space-y-5 
      text-start
      ${isCorrect ? "bg-[#31C47F]/10 border-[#31c47f]" : "bg-[#d345450d] border-[#d34545]"}`}
    >
      <div className="flex items-center gap-1 text-xs sm:text-sm mb-1 sm:mb-2">
        <span className="text-[#707d8f]">{`Q${questionNumber}`}</span>

        {isCorrect ? (
          <CheckCircle2 className="w-4 h-4 text-[#31c47f]" />
        ) : (
          <XCircle className="w-4 h-4 text-[#d34545]" />
        )}
      </div>
      <pre
        className="rounded-xl text-xs sm:text-sm md:text-base 
      whitespace-pre-wrap wrap-break-word
      overflow-x-auto text-white text-start"
      >
        {question.question}
      </pre>

      <Box className="space-y-2">
        {question?.options?.map(({ text, option }: any) => (
          <DisplayOption
            key={option}
            text={text}
            option={option}
            mode="review"
            correctAnswer={question.correct_answer}
            userAnswer={question.userAnswer}
          />
        ))}
      </Box>
      <div
        className="bg-[#18222980] text-[#707d8f] 
        p-2 sm:p-3 
        text-xs sm:text-sm 
        border border-[#272c34] 
        rounded-lg wrap-break-word"
      >
        💡 {question?.explanation}
      </div>
    </div>
  );
};

export default ReviewBox;
