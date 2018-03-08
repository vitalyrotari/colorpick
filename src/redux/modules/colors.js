import { List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const add = createAction('COLORS_ADD');
export const remove = createAction('COLORS_REMOVE');
export const flush = createAction('COLORS_FLUSH');

const initialState = List();
const MAX_COLORS = 10;

const reducer = handleActions({
  [add]: (state, { payload }) =>
    (state.size === MAX_COLORS ? state.shift() : state).push(payload)
  ,
  [remove]: (state, { payload }) => {
    const index = state.indexOf(payload);
    return index !== -1 ? state.delete(index) : state;
  }, 
  [flush]: (state) => state.clear(),
}, initialState);

export default reducer;
