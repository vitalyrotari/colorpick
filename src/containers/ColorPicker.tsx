import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { ColorResult, SketchPicker } from 'react-color';
import { ApplicationState } from '../store/index';
import { Color } from '../store/colors/types';
import { addColor } from '../store/colors/actions';

interface ColorPickProps {
  color: Color;
  addColor(color: Color): any;
};

const ColorPick: React.SFC<ColorPickProps> = ({ color, addColor }) => (
  <div 
    className="color-picker"
    style={{ backgroundColor: color }}
  > 
    <SketchPicker
      color={color}
      onChangeComplete={(color: ColorResult) => {
        addColor(color.hex);
      }}
    />
  </div>
);

const mapStateToProps = (state: ApplicationState) => ({
  color: state.get('colors').last(),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addColor,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPick);
