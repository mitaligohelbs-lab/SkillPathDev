import DisplayOption from "@/components/common/DisplayOption";
import { Box } from "@mui/material";
import { CheckCircle2, XCircle } from "lucide-react";

const ReviewBox = ({ question, questionNumber }: any) => {
  const isCorrect = question.correct_answer === question.userAnswer;
  return (
    <div
      className={`p-5 space-y-5 text-start w-full border rounded-xl ${isCorrect ? "bg-[#31C47F]/10 border-[#31c47f]" : "bg-[#d345450d] border-[#d34545]"}`}
    >
      <div className="text-sm flex gap-1 items-center mb-2">
        <span className="text-[#707d8f]">{`Q${questionNumber}`}</span>
        {isCorrect ? (
          <CheckCircle2 className="w-4 h-4 text-[#31c47f]" />
        ) : (
          <XCircle className="w-4 h-4 text-[#d34545]" />
        )}
      </div>
      <pre className="rounded-xl text-sm overflow-x-auto text-white text-start">
        {` ${question.question}`}
      </pre>
      <Box className="space-y-2">
        {question &&
          question.options.map(({ text, option }: any) => (
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
      <div className="bg-[#18222980] text-[#707d8f] p-3 text-sm border border-[#272c34] rounded-lg">
        💡 {question?.explanation}
      </div>
    </div>
  );
};

export default ReviewBox;
