import {$apiUrl} from "@shared/const/constants";

export async function fetchTextGearsGrammarCheck(text: string): Promise<TextGearsGrammarCheckerObject> {
  const response: Response = await fetch(`${$apiUrl}/v1/text_gears/grammar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      language: "en-US"
    })
  });

  return await response.json() as TextGearsGrammarCheckerObject;
}