import {useState} from "react";

/**
 * Хук для выполнения асинхронной проверки текста с API
 *
 * @template T Тип результата, возвращаемого API
 * @param fetcher Функция, выполняющая запрос к API
 * @returns Объект {@link GrammarCheckHooksResult} с состоянием загрузки, результатом, ошибкой и функцией запуска проверки
 */
export function useGrammarCheckApi<T>(fetcher: (text: string) => Promise<T>): GrammarCheckHooksResult<T | null> {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async (text: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetcher(text);
      setResult(result);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, result, error, handleCheck};
}
