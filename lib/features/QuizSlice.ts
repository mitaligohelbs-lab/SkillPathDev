import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    totalQuestion: 10,
    attemp: 1,
    correct: 0,
    wrong: 0,
    topic: "",
    level: "",
    technology: "",
  },
  reducers: {
    isSubmitted: (state, action) => {
      state.attemp += 1;
      state.topic = action.payload.topic;
      state.level = action.payload.level;
      state.technology = action.payload.technology;
      if (action.payload.isCorrect) {
        state.correct += 1;
      } else {
        state.wrong += 1;
      }
    },
  },
});

export const { isSubmitted } = quizSlice.actions;
export default quizSlice.reducer;
