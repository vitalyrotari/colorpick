import { Map } from 'immutable';
import { Reducer } from 'redux';
import { combineReducers } from 'redux-immutable';

import { ColorsState } from './colors/types';
import colorsReducer from './colors/reducer';

export interface ApplicationState extends Map<string, any> {
  colors: ColorsState;
};

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  colors: colorsReducer,
});
