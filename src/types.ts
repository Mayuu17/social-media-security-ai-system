export interface ProfileMetrics {
  followers_count: number | string;
  following_count: number | string;
  posts_count: number | string;
  bio_length: number | string;
  verified_status: boolean | string;
  engagement_estimate: string;
  username_randomness_score: number;
  identity_consistency_score: number;
  activity_pattern_score: number;
}

export interface AnalysisResult {
  platformDetected: "Instagram" | "LinkedIn" | "Facebook" | "X (Twitter)" | "Unknown";
  metrics: ProfileMetrics;
  classification: "REAL" | "FAKE" | "Automated/Suspicious Account";
  impersonationRisk: "LOW" | "MEDIUM" | "HIGH";
  riskScore: number;
  confidenceScore: number;
  technicalExplanation: string;
}

export interface Suggestion {
  username: string;
  name: string;
}

export interface HistoryItem {
  id: string;
  input: string;
  platform: string;
  date: string;
  result: AnalysisResult;
}
