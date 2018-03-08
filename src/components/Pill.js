import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const SIZES = {
  large: 118,
  default: 42,
  small: 22,
};

const Pill = styled.div`
  background-color: ${props => props.color};
  border-radius: ${props => props.shape === 'circle' ? '50%'  : 0};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => `${SIZES[props.size]}px`};
  height: ${props => `${SIZES[props.size]}px`};
  position: relative;
  overflow: hidden;

  ${Icon} {
    position: relative;
  }

  &::before {
    background-color: rgba(0, 0, 0, .15);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &::before,
  ${Icon} {
    opacity: 0;
    transition: opacity .3s;
  }

  &:hover {
    ${Icon},
    &::before {
      opacity: 1;
    }
  }

  ${props => props.disabled && `
    opacity: .6;

    &::before {
      display: none;  
    }
  `}
`; 

Pill.propTypes = {
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  shape: PropTypes.oneOf(['circle']),
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Pill.defaultProps = {
  size: 'default',
};

export default Pill;
