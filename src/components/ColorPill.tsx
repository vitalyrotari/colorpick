import * as React from 'react';
import { Color } from '../store/colors/types';
import classNames from 'classnames';

type Size = 'small' | 'base' | 'large';

interface ClickFunc {
  (event: React.SyntheticEvent<HTMLDivElement>): void;
}

interface ColorPillProps {
  color: Color;
  circle?: boolean;
  disabled?: boolean;
  size?: Size;
  onClick?: ClickFunc;
};

const ColorPill: React.SFC<ColorPillProps> = ({ color, circle, disabled, size, ...props }) => {
  const classes = classNames(
    'color-pill',
    `color-pill--${size}`,
    {
      'color-pill--circle': circle,
      'color-pill--disabled': disabled
    }
  );

  return <div
    {...props}
    className={classes}
    style={{ backgroundColor: color }}
  />;
};

ColorPill.defaultProps = {
  circle: false,
  disabled: false,
  size: 'base',
};

export default ColorPill;
