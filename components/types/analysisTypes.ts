export type TopicStats = {
  attempts: number;
  bestScore: number;
  avgScore: number;
  totalScore: number;
};

export type UserAttempt = {
  id: string;
  user_id: string;
  technology: string;
  topic: string;
  level: string;
  score: number;
  created_at: string;
};
