import {$apiUrl} from "@shared/const/constants";

export async function fetchComparisonAnalysis(text: string): Promise<ComparisonResult> {
  const response: Response = await fetch(`${$apiUrl}/v1/grammar_checker_analysis/grammar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      language: "en"
    })
  });

  return await response.json() as ComparisonResult;
}