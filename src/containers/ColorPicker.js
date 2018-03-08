import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ColorActions from '../redux/modules/colors';
import ColorPickerContainer from '../components/ColorPickerContainer';

class ColorPicker extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    defaultColor: PropTypes.string,
  };

  static defaultProps = {
    defaultColor: '#eab800',
  };

  render() {
    const { color, defaultColor } = this.props;

    return (
      <ColorPickerContainer color={color || defaultColor}>
        <SketchPicker
          disableAlpha
          color={color || defaultColor}
          presetColors={[]}
          width={320}
          onChangeComplete={this.handleChangeComplete}
        />
      </ColorPickerContainer>
    );
  }

  handleChangeComplete = (color) => {
    this.props.addColor(color.hex);
  };
}

export default connect(
  state => ({
    color: state.get('colors').last(),
  }),
  dispatch => bindActionCreators({
    addColor: ColorActions.add,
  }, dispatch)
)(ColorPicker);