import React, {FC, useEffect} from 'react';
import {Button} from "@mui/material";
import {fetchComparisonAnalysis} from "@features/grammar-check/comparison-analysis/api/comparisonAnalysisApi";
import {useGrammarCheckApi} from "@features/grammar-check/hooks";
import {ComparisonResult} from "@features/grammar-check/comparison-analysis";

export function useComparisonAnalysisCheck() {
  return useGrammarCheckApi<ComparisonResult>(fetchComparisonAnalysis);
}

/**
 * Кнопка для запуска сравнения ошибок через TextGears и Trinka
 *
 * @param text Текст для проверки
 * @param onResult Callback для обработки результата {@link ComparisonResult}
 * @constructor
 */
const ComparisonAnalysisButton: FC<ButtonGrammarProps> = ({text, onResult}) => {
  const {loading, result, error, handleCheck} = useComparisonAnalysisCheck()

  useEffect(() => {
    if (result) {
      onResult(result);
    }
  }, [result, onResult]);

  useEffect(() => {
    if (error) {
      onResult(null);
      alert(error)
    }
  }, [error, onResult]);

  return (
    <Button onClick={() => handleCheck(text)}
            loading={loading}
            loadingPosition="start">
      Проверить оба и сравнить
    </Button>
  );
}

export default ComparisonAnalysisButton;