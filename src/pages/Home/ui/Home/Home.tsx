import React, {FC} from 'react';
import * as style from './Home.module.css'
import GrammarChecker from "@widgets/GrammarChecker";


const Home: FC = (props) => {
  return (
    <main className={style.main}>
      <GrammarChecker/>
    </main>
  );
}

export default Home;