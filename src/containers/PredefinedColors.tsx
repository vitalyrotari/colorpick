import * as React from 'react';
import { List as ImmutableList } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState } from '../store';
import { Color, ColorsState } from '../store/colors/types';
import { addColor } from '../store/colors/actions';
import ColorIcon from '../components/ColorIcon';
import ColorPill from '../components/ColorPill';
import ColorTile from '../components/ColorTile';

export const DEFAULT_COLORS: Array<Color> = [
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

interface PredefinedColorsProps {
  colors?: Array<Color>;
  selected: ColorsState;
  addColor(color: Color): any;
};

const PredefinedColors: React.SFC<PredefinedColorsProps> = ({ colors, selected, addColor }) => (
  <div className="list">
    {colors.map(color =>
      <ColorTile
        title={color}
        key={color}
      >
        <ColorPill
          color={color}
          disabled={selected.includes(color)}
          size="large"
          onClick={addColor.bind(null, color)}
        >
          <ColorIcon/>
        </ColorPill>
      </ColorTile>
    )}
  </div>
);

PredefinedColors.defaultProps = {
  colors: DEFAULT_COLORS,
};

const mapStateToProps = (state: ApplicationState) => ({
  selected: state.get('colors'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addColor,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PredefinedColors);
