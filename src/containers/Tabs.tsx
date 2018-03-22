import * as React from 'react';
import classNames from 'classnames';

interface TabsProps {
  tabs: Array<string>;
  panels: Element[];
};

type TabsState = {
  current: number;
};

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
  state: TabsState = {
    current: 0,
  };

  handleClick = (current: number) => {
    this.setState({ current });
  };

  render() {
    const { tabs, panels } = this.props;
    const { current } = this.state;

    return <section className="tabs">
      <nav className="tabs__nav">
        {tabs.map((title, index) =>
          <a
            className={
              classNames('tabs__item', {
                'tabs__item--active': index === current,
              })
            }
            key={`tabs_item_${index}`}
            onClick={this.handleClick.bind(null, index)}
          >
            {title}
          </a>
        )}
      </nav>
      {panels.map((content, index) => 
        <div
          className={
            classNames('tabs__panel', {
              'tabs__panel--active': index === current,
            })
          }
          key={`tabs_panel_${index}`}
        >
          {content}
        </div>
      )}
    </section>;
  }
}
