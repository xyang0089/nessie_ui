import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CapitalOneLogoIcon } from './CapitalOneLogoIcon.js';
import classes from './LogosCapitalOne.module.css';

interface Props {
  className?: string;
  classes?: {
    capitalOneLogo?: string;
    root?: string;
  };
}
/* @figmaId 0:278 */
export const LogosCapitalOne: FC<Props> = memo(function LogosCapitalOne(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.capitalOneLogo || ''} ${classes.capitalOneLogo}`}>
        <CapitalOneLogoIcon className={classes.icon} />
      </div>
    </div>
  );
});
