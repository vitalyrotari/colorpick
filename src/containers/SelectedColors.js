import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ColorActions from '../redux/modules/colors';
import Card from '../components/Card';
import List from '../components/List';
import Pill from '../components/Pill';
import Icon from '../components/Icon';

class SelectedColors extends PureComponent {
  render() {
    const { colors } = this.props;

    return (
      <Card>
        <h3>Select up to 10 colors</h3>
        <List bordered>
          {colors.map((color, index) =>
            <Pill
              color={color}
              key={`pill_${color}_${index}`} shape="circle"
              onClick={this.handleRemoveColor.bind(null, color)}
            >
              <Icon size="small" type="close"/>
            </Pill>
          ).toArray()}
        </List>
      </Card>
    );
  }

  handleRemoveColor = (color) => {
    this.props.removeColor(color);
  };
}

export default connect(
  state => ({
    colors: state.get('colors'),
  }),
  dispatch => bindActionCreators({
    removeColor: ColorActions.remove,
  }, dispatch)
)(SelectedColors);
