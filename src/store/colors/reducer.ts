import { Reducer } from 'redux';
import { List } from 'immutable';
import { handleActions } from 'redux-actions';
import { ColorsState, ColorAction } from './types';
import { addColor, removeColor } from './actions';

const MAX_COLORS: number = 10;
const initialState: ColorsState = List();

const reducer: Reducer<ColorsState> = handleActions({
  [addColor]: (state: ColorsState, action: ColorAction): ColorsState => {
    if (state.includes(action.payload)) {
      return state;
    }

    return (state.size === MAX_COLORS ? state.shift() : state).push(action.payload)
  },
  [removeColor]: (state: ColorsState, action: ColorAction): ColorsState => {
    const index = state.indexOf(action.payload);
    return index !== -1 ? state.delete(index) : state;
  },
}, initialState);

export default reducer;