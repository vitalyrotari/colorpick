import { createAction } from 'redux-actions';
import { Color } from './types';

export const addColor = createAction('COLORS_ADD', (color: Color) => color);
export const removeColor = createAction('COLORS_REMOVE', (color: Color) => color);