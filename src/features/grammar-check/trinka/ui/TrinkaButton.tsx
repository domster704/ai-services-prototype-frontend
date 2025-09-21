import React, {FC, useEffect} from 'react';
import {Button} from "@mui/material";
import {fetchTrinkaGrammarCheck} from "@features/grammar-check/trinka/api/trinkaApi";
import {useGrammarCheckApi} from "@features/grammar-check/hooks";


export function useTrinkaCheck() {
  return useGrammarCheckApi<TrinkaCheckResult>(fetchTrinkaGrammarCheck);
}

const GrammarChecker: FC<ButtonGrammarProps> = ({text, onResult}) => {
  const {loading, result, error, handleCheck} = useTrinkaCheck()

  useEffect(() => {
    if (result) {
      onResult(result);
    }
  }, [result, onResult]);

  return (
    <Button onClick={() => handleCheck(text)}
            loading={loading}
            loadingPosition="start">
      Проверить Trinka
    </Button>
  );
}

export default GrammarChecker;