import {$apiUrl} from "@shared/const/constants";
import {TextGearsGrammarCheckerObject} from "@features/grammar-check/text-gears/model/TextGears";

/**
 * Проверяет текст с помощью сервиса TextGears
 *
 * @param text Исходный текст
 * @returns Объект {@link TextGearsGrammarCheckerObject} с найденными ошибками
 */
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