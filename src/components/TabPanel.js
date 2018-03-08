import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabPanel = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

TabPanel.propTypes = {
  active: PropTypes.bool,
};

TabPanel.defaultProps = {
  active: false,
};

export default TabPanel;
