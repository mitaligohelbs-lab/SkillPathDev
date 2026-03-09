import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LevelProgress = {
  score: number;
  total: number;
  passed: number;
};

type TopicProgress = {
  [level: string]: LevelProgress;
};

type TechnologyProgress = {
  [topic: string]: TopicProgress;
};

type ProgressState = {
  guestProgress: {
    [technology: string]: TechnologyProgress;
  };
};

const initialState: ProgressState = {
  guestProgress: {},
};

export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    saveProgress: (
      state,
      action: PayloadAction<{
        technology: string;
        topic: string;
        level: number;
        score: number;
        total: number;
      }>,
    ) => {
      const { technology, topic, level, score, total } = action.payload;

      if (!state.guestProgress[technology]) {
        state.guestProgress[technology] = {};
      }

      if (!state.guestProgress[technology][topic]) {
        state.guestProgress[technology][topic] = {};
      }

      state.guestProgress[technology][topic][level] = {
        score,
        total,
        passed: score,
      };
    },
  },
});

export const { saveProgress } = progressSlice.actions;
export default progressSlice.reducer;
