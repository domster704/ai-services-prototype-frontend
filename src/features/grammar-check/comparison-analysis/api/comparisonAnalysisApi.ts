import {$apiUrl} from "@shared/const/constants";
import {ComparisonResult} from "@features/grammar-check/comparison-analysis";

/**
 * Выполняет сравнение результатов проверки текста двумя сервисами (TextGears и Trinka)
 *
 * @param text Исходный текст для проверки
 * @returns Объект {@link ComparisonResult} с общими и уникальными ошибками
 */
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