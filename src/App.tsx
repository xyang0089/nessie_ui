import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Header } from './components/Header/Header.js';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header
        text={{
          docs: <div className={classes.docs}>Docs</div>,
          gettingStarted: <div className={classes.gettingStarted}>Getting Started</div>,
          home: <div className={classes.home}>Home</div>,
          examples: <div className={classes.examples}>Examples</div>,
        }}
      />
    </div>
  );
});
