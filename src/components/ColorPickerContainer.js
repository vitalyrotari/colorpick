import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorPickerContainer = styled.div`
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  padding: 40px;
`;

ColorPickerContainer.propTypes = {
  color: PropTypes.string,
};

export default ColorPickerContainer;
