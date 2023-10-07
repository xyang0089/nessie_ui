import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../_resets.module.css';
import { ButtonsCompact16pxPaddingProgr } from './ButtonsCompact16pxPaddingProgr/ButtonsCompact16pxPaddingProgr.js';
import classes from './Header.module.css';
import { LogosCapitalOne } from './LogosCapitalOne/LogosCapitalOne.js';

interface Props {
  className?: string;
  text?: {
    docs?: ReactNode;
    gettingStarted?: ReactNode;
    home?: ReactNode;
    examples?: ReactNode;
  };
}
/* @figmaId 0:150 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <LogosCapitalOne className={classes.logosCapitalOne} classes={{ capitalOneLogo: classes.capitalOneLogo }} />
      {props.text?.docs != null ? props.text?.docs : <div className={classes.docs}>Docs</div>}
      {props.text?.gettingStarted != null ? (
        props.text?.gettingStarted
      ) : (
        <div className={classes.gettingStarted}>Getting Started</div>
      )}
      {props.text?.home != null ? props.text?.home : <div className={classes.home}>Home</div>}
      {props.text?.examples != null ? props.text?.examples : <div className={classes.examples}>Examples</div>}
      <ButtonsCompact16pxPaddingProgr
        className={classes.buttonsCompact16pxPaddingActiv}
        text={{
          button: <div className={classes.button}>Login</div>,
        }}
      />
    </div>
  );
});
