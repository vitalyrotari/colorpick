import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tab = styled.a`
  display: block;
  cursor: ${props => props.active ? 'default' : 'pointer'}
  color: ${props => props.active ? '#146dff' : '#b8bac2'}
  border-bottom: 3px solid ${props => props.active ? '#146dff' : '#f5f5f6'}
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
`;

Tab.propTypes = {
  active: PropTypes.bool,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;