import { createSlice } from "@reduxjs/toolkit";

export const currentTechStack = createSlice({
  name: "technology",
  initialState: {
    technology: "",
    topic: "",
    level: 1,
  },
  reducers: {
    addCurrentTechStack: (state, action) => {
      state.technology = action.payload.technology;
      state.topic = action.payload.topic;
      state.level = action.payload.level;
    },
  },
});

export const { addCurrentTechStack } = currentTechStack.actions;
export default currentTechStack.reducer;
