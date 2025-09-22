import React, {FC, useEffect} from 'react';
import {Button} from "@mui/material";
import {fetchTextGearsGrammarCheck} from "@features/grammar-check/text-gears/api/textGearsApi";
import {useGrammarCheckApi} from "@features/grammar-check/hooks";
import {TextGearsGrammarCheckerObject} from "@features/grammar-check/text-gears/model/TextGears";

export function useTextGearsCheck() {
  return useGrammarCheckApi<TextGearsGrammarCheckerObject>(fetchTextGearsGrammarCheck);
}

/**
 * Кнопка для запуска проверки текста через TextGears
 *
 * @param text Текст для проверки
 * @param onResult Callback для обработки результата {@link TextGearsGrammarCheckerObject}
 * @constructor
 */
const TextGearsButton: FC<ButtonGrammarProps> = ({text, onResult}) => {
  const {loading, result, error, handleCheck} = useTextGearsCheck()

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
      Проверить TextGears
    </Button>
  );
}

export default TextGearsButton;