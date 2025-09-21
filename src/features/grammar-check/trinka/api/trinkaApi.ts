import {$apiUrl} from "@shared/const/constants";
import {TrinkaCheckResult} from "@features/grammar-check/trinka/model/Trinka";

/**
 * Проверяет текст с помощью сервиса Trinka Grammar Checker
 *
 * @param text Исходный текст
 * @returns Объект {@link TrinkaCheckResult} с найденными ошибками
 */
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