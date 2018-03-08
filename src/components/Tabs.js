import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import TabPanel from './TabPanel';
import TabList from './TabList';

export default class Tabs extends PureComponent {
  static propTypes = {
    active: PropTypes.number,
    tabs: PropTypes.arrayOf(PropTypes.string),
    panels: PropTypes.arrayOf(PropTypes.element),
  };

  static defaultProps = {
    active: 0,
    tabs: [],
    panels: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      current: props.active,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      current: newProps.active,
    });
  }

  render() {
    const { tabs, panels } = this.props;
    const { current } = this.state;

    return (
      <section>
        <TabList>
          {tabs.map((title, index) =>
            <Tab active={index === current} key={`tab_${index}`} onClick={this.handleClick.bind(null, index)}>
              {title}
            </Tab>
          )}
        </TabList>
        {panels.map((content, index) => 
          <TabPanel key={`panel_${index}`} active={index === current}>
            {content}
          </TabPanel>
        )}
      </section>
    );
  };

  handleClick = (current) => {
    this.setState({ current });
  };
}