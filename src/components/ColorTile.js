import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import Pill from './Pill';
import Icon from './Icon';

export default class ColorTile extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  render() {
    const { color, disabled, ...props } = this.props;

    if (disabled) {
      props.onClick = null;
    }

    return (
      <Tile {...props}>
        <Pill color={color} size="large" disabled={disabled}>
          {disabled ? null : <Icon size="small"/>}
        </Pill>
        <span>{color}</span>
      </Tile>
    );
  }

  handleClick = (event) => {
    this.props.onClick(event, this.props.color);
  };
}
