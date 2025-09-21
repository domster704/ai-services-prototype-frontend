import React, {FC, useEffect} from 'react';
import {Button} from "@mui/material";
import {fetchTextGearsGrammarCheck} from "@features/grammar-check/text-gears/api/textGearsApi";
import {useGrammarCheckApi} from "@features/grammar-check/hooks";

export function useTextGearsCheck() {
  return useGrammarCheckApi<TextGearsGrammarCheckerObject>(fetchTextGearsGrammarCheck);
}

const TextGearsButton: FC<ButtonGrammarProps> = ({text, onResult}) => {
  const {loading, result, error, handleCheck} = useTextGearsCheck()

  useEffect(() => {
    if (result) {
      onResult(result);
    }
  }, [result, onResult]);

  return (
    <Button onClick={() => handleCheck(text)}
            loading={loading}
            loadingPosition="start">
      Проверить TextGears
    </Button>
  );
}

export default TextGearsButton;