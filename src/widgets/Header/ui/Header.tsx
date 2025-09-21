import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "@app/store/store";
import {AppBar, Typography} from "@mui/material";

const Header: FC = (props) => {
  const global = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static" sx={{p: 2}}>
      <Typography variant="h5" sx={{my: 1}}>
        AI Services Prototype
      </Typography>
    </AppBar>
  );
}

export default Header;