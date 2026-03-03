import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizReducer from "./features/QuizSlice";
import techStackReducer from "./features/CurrentSelectedTachSlice";
import ananlysisReducer from "./features/CurrentUserLevelWiseAnanlysis";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  quiz: quizReducer,
  technology: techStackReducer,
  analysis: ananlysisReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["technology", "ananlysis"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
