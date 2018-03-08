import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List as ImmutableList } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ColorActions from '../redux/modules/colors';
import List from '../components/List';
import ColorTile from '../components/ColorTile';

export const DEFAULT_COLORS = [
  '#30ad86',
  '#49af57',
  '#249070',
  '#2ea147',
  '#3484cb',
  '#256cac',
  '#7e4496',
  '#72368c',
  '#28394b',
  '#212f3e',
  '#eab800',
  '#ea8905',
];

class PredefinedColors extends PureComponent {
  static propTypes = {
    selected: PropTypes.instanceOf(ImmutableList),
    colors: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    colors: DEFAULT_COLORS,
  };

  render() {
    const { colors, selected } = this.props;

    return (
      <List>
        {colors.map(color =>
          <ColorTile
            color={color}
            disabled={selected.includes(color)}
            key={color}
            onClick={this.handleAddColor.bind(null, color)}
          />
        )}
      </List>
    );
  }

  handleAddColor = (color) => {
    this.props.addColor(color);
  };
}

export default connect(
  state => ({
    selected: state.get('colors'),
  }),
  dispatch => bindActionCreators({
    addColor: ColorActions.add,
  }, dispatch)
)(PredefinedColors);
