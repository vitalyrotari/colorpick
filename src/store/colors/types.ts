import { List } from 'immutable';

export type Color = string;

export type ColorsState = List<Color>;

export interface ColorAction {
  type: string;
  payload: Color;
};
