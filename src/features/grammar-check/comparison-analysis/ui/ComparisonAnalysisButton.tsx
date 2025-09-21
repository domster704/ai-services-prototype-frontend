import React, {FC, useEffect} from 'react';
import {Button} from "@mui/material";
import {fetchComparisonAnalysis} from "@features/grammar-check/comparison-analysis/api/comparisonAnalysisApi";
import {useGrammarCheckApi} from "@features/grammar-check/hooks";

export function useComparisonAnalysisCheck() {
  return useGrammarCheckApi<ComparisonResult>(fetchComparisonAnalysis);
}

const GrammarChecker: FC<ButtonGrammarProps> = ({text, onResult}) => {
  const {loading, result, error, handleCheck} = useComparisonAnalysisCheck()

  useEffect(() => {
    if (result) {
      onResult(result);
    }
  }, [result, onResult]);

  return (
    <Button onClick={() => handleCheck(text)}
            loading={loading}
            loadingPosition="start">
      Проверить оба и сравнить
    </Button>
  );
}

export default GrammarChecker;