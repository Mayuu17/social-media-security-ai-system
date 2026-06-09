export interface ProfileMetrics {
  followers_count: number;
  following_count: number;
  posts_count: number;
  bio_length: number;
  verified_status: boolean;
  engagement_estimate: string;
  username_randomness_score: number;
  identity_consistency_score: number;
  activity_pattern_score: number;
}

export interface AnalysisResult {
  metrics: ProfileMetrics;
  classification: "REAL" | "FAKE" | "BOT-LIKE";
  impersonationRisk: "LOW" | "MEDIUM" | "HIGH";
  riskScore: number;
  confidenceScore: number;
  technicalExplanation: string;
}

export interface HistoryItem {
  id: string;
  input: string;
  date: string;
  result: AnalysisResult;
}
