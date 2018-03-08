import { combineReducers } from 'redux-immutable';
import colors from './modules/colors';

const reducers = combineReducers({
  colors,
});

export default reducers;
