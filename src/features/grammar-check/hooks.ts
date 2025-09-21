import {useState} from "react";

export function useGrammarCheckApi<T>(fetcher: (text: string) => Promise<T>) {
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
