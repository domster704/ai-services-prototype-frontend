import React, {FC, useState} from 'react';
import {ButtonGroup, Stack, TextField} from "@mui/material";
import TextGearsButton from "@features/grammar-check/text-gears/ui/TextGearsButton";
import TrinkaButton from "@features/grammar-check/trinka/ui/TrinkaButton";
import ComparisonAnalysisButton from "@features/grammar-check/comparison-analysis/ui/ComparisonAnalysisButton";
import {JsonEditor} from "json-edit-react";

import * as style from './GrammarChecker.module.css'

const GrammarChecker: FC = (props) => {
  const [text, setText] = useState<string>("");
  const [data, setData] = useState<any>(null);

  return (
    <Stack spacing={2} className={style.grammarChecker}>
      <TextField
        placeholder="Text.."
        multiline
        fullWidth
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
      />
      <ButtonGroup variant="outlined"
                   aria-label="Loading button group">
        <TextGearsButton text={text}
                         onResult={setData}/>
        <TrinkaButton text={text}
                      onResult={setData}/>
        <ComparisonAnalysisButton text={text}
                                  onResult={setData}/>
      </ButtonGroup>
      {
        data &&
          <JsonEditor data={data} className={style.jsonEditor}/>
      }
    </Stack>
  );
}

export default GrammarChecker;