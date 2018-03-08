import styled from 'styled-components';
import PropTypes from 'prop-types';
import add from '../assets/add.svg';

const SIZES = {
  large: 36,
  default: 24,
  small: 18,
};

const Icon = styled.img.attrs({
  src: add,
})`
  width: ${props => `${SIZES[props.size]}px`};
  height: ${props => `${SIZES[props.size]}px`};

  ${props => props.type === 'close' && `
    transform: rotate(-45deg);
  `}
`;

Icon.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  type: PropTypes.oneOf(['add', 'close']),
};

Icon.defaultProps = {
  size: 'default',
  type: 'add',
};

export default Icon;
