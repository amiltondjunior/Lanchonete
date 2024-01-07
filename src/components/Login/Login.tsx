import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Login.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:4 */
export const Login: FC<Props> = memo(function Login(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.login}>Login</div>
      <div className={classes.usuario}>Usuário</div>
      <div className={classes.line1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.acessar}>Acessar</div>
      <div className={classes.logo21}></div>
    </div>
  );
});
