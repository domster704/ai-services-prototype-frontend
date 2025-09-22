import React, {FC, useEffect} from 'react';
import {Button} from "@mui/material";
import {fetchTrinkaGrammarCheck} from "@features/grammar-check/trinka/api/trinkaApi";
import {useGrammarCheckApi} from "@features/grammar-check/hooks";
import {TrinkaCheckResult} from "@features/grammar-check/trinka/model/Trinka";


export function useTrinkaCheck() {
  return useGrammarCheckApi<TrinkaCheckResult>(fetchTrinkaGrammarCheck);
}

/**
 * Кнопка для запуска проверки текста через Trinka Grammar Checker
 *
 * @param text Текст для проверки
 * @param onResult Callback для обработки результата {@link TrinkaCheckResult}
 * @constructor
 */
const TrinkaButton: FC<ButtonGrammarProps> = ({text, onResult}) => {
  const {loading, result, error, handleCheck} = useTrinkaCheck()

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
      Проверить Trinka
    </Button>
  );
}

export default TrinkaButton;