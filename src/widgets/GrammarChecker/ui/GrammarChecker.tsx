import React, {FC, useState} from 'react';
import {Box, ButtonGroup, Grid, Stack, TextField, Typography} from "@mui/material";
import TextGearsButton from "@features/grammar-check/text-gears";
import TrinkaButton from "@features/grammar-check/trinka";
import ComparisonAnalysisButton, {ComparisonResult} from "@features/grammar-check/comparison-analysis";
import {JsonEditor} from "json-edit-react";

import * as style from './GrammarChecker.module.css'

/**
 * Основной виджет проверки грамматики
 *
 * Позволяет:
 * - проверить текст через TextGears
 * - проверить текст через Trinka
 * - выполнить сравнение результатов
 *
 * @constructor
 */
const GrammarChecker: FC = (props) => {
  const [text, setText] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [comparisonData, setComparisonData] = useState<ComparisonResult | null>(null);

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
                                  onResult={(data) => {
                                    setComparisonData(data as ComparisonResult);
                                    setData(null);
                                  }}/>
      </ButtonGroup>

      <Box sx={{width: '100%'}}>
        {
          data &&
            <JsonEditor data={data} className={style.jsonEditor}/>
        }
        {
          comparisonData &&
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Typography variant={"h6"}>Common</Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant={"h6"}>TextGears</Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant={"h6"}>Trinka Grammar Checker</Typography>
                </Grid>

                <Grid size={4}>
                    <JsonEditor data={comparisonData.common} className={style.jsonEditor}/>
                </Grid>
                <Grid size={4}>
                    <JsonEditor data={comparisonData.only_text_gears} className={style.jsonEditor}/>
                </Grid>
                <Grid size={4}>
                    <JsonEditor data={comparisonData.only_trinka} className={style.jsonEditor}/>
                </Grid>
            </Grid>
        }
      </Box>
    </Stack>
  );
}

export default GrammarChecker;