import * as React from 'react';
import classNames from 'classnames';

interface ColorIconProps {
  close?: boolean;
  fill?: string;
};

const ColorIcon: React.SFC<ColorIconProps> = ({ close, fill }) => (
  <svg 
    className={
      classNames('color-icon', {
        'color-icon--close': close,
      })
    }
    fill={fill}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);


ColorIcon.defaultProps = {
  close: false,
  fill: '#fff',
};

export default ColorIcon;
