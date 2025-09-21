import React, {FC, useState} from 'react';
import {Button, ButtonGroup, Stack, TextField} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import {fetchTextGearsGrammarCheck} from "@entities/textGears/api/textGearsApi";
import {fetchTrinkaGrammarCheck} from "@entities/trinka/api/trinkaApi";

const GrammarChecker: FC = (props) => {
  const [text, setText] = useState<string>("");
  const [textGearsLoading, setTextGearsLoading] = useState<boolean>(false);
  const [trinkaLoading, setTrinkaLoading] = useState<boolean>(false);

  const handleTextGearsClick = async () => {
    setTextGearsLoading(true);
    const res = await fetchTextGearsGrammarCheck(text)
    setTextGearsLoading(false);
    console.log(res)
  }

  const handleTrinkaClick = async () => {
    setTrinkaLoading(true);
    const res = await fetchTrinkaGrammarCheck(text)
    setTrinkaLoading(false);
    console.log(res)
  }

  return (
    <Stack spacing={2}>
      <TextField
        placeholder="Text.."
        multiline
        sx={{
          width: '50%'
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
      />
      <ButtonGroup variant="outlined" aria-label="Loading button group">
        <Button onClick={handleTextGearsClick}
                loading={textGearsLoading}
                loadingPosition="start">
          Проверить TextGears
        </Button>
        <Button onClick={handleTrinkaClick}
                loading={trinkaLoading}
                loadingPosition="start">
          Проверить Trinka
        </Button>
        <Button loading loadingPosition="start" startIcon={<SaveIcon/>}>
          Проверить оба и сравнить
        </Button>
      </ButtonGroup>
    </Stack>
  );
}

export default GrammarChecker;