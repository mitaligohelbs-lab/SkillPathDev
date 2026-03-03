import { createSlice } from "@reduxjs/toolkit";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer: string | null;
}

export const currentUserLevelWiseAnalysisSlice = createSlice({
  name: "ananlysis",
  initialState: {
    question: [] as Question[],
    answer: [],
  },
  reducers: {
    addQuestions: (state, action) => {
      state.question = action.payload;
    },
    addUserAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const index = state.question.findIndex(({ id }) => id === questionId);
      if (index !== -1) {
        state.question[index].userAnswer = answer;
      }
    },
  },
});

export const { addQuestions ,addUserAnswer} = currentUserLevelWiseAnalysisSlice.actions;
export default currentUserLevelWiseAnalysisSlice.reducer;
