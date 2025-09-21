import {$apiUrl} from "@shared/const/constants";

export async function fetchTrinkaGrammarCheck(text: string): Promise<TrinkaCheckResult> {
  const response: Response = await fetch(`${$apiUrl}/v1/trinka_grammar_checker/grammar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      paragraph: text,
      language: "en"
    })
  });

  return await response.json() as TrinkaCheckResult;
}