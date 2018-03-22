import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState } from '../store';
import { Color, ColorsState } from '../store/colors/types';
import { removeColor } from '../store/colors/actions';
import ColorIcon from '../components/ColorIcon';
import ColorPill from '../components/ColorPill';

interface SelectedColorsProps {
  colors: ColorsState;
  removeColor(color: Color): any;
};

const SelectedColors: React.SFC<SelectedColorsProps> = ({ colors, removeColor }) => (
  <div className="card">
    <h3>Select up to 10 colors</h3>
    <div className="colors">
      {colors.map((color, index) =>
        <ColorPill
          circle
          color={color}
          key={`pill_${color}_${index}`}
          onClick={removeColor.bind(null, color)}
        >
          <ColorIcon close/>
        </ColorPill>
      ).toArray()}
    </div>
  </div>
);

const mapStateToProps = (state: ApplicationState) => ({
  colors: state.get('colors'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  removeColor,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedColors);
