import React, {FC} from 'react';
import * as style from './Home.module.css'
import {Button} from "@mui/material";

const Home: FC = (props) => {

  return (
    <main className={style.main}>
      <Button variant="contained">Hello world</Button>
    </main>
  );
}

export default Home;