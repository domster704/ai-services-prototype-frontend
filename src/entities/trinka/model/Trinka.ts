interface TrinkaResult {
  covered_text: string;
  output: string[];
  comment: string[];
  error_category: string[];
}

interface TrinkaItem {
  sentence: string;
  result: TrinkaResult[];
}

interface TrinkaCheckResult {
  sentences: TrinkaItem[];
}