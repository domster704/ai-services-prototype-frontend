import React, {FC} from "react";
import {useBootstrap} from "@app/hooks";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AppProviders: FC<{ children: React.ReactNode }> = ({children}) => {
  useBootstrap();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
