import { List } from 'immutable';
import { ColorsState } from '../types';
import { addColor, removeColor } from '../actions';
import colorsReducer from '../reducer';


describe('colors reducer', () => {
  const initialState: ColorsState = List();

  it('should handle initial state', () => {
    expect(
      colorsReducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle COLORS_ADD', () => {
    expect(
      colorsReducer(initialState, addColor('#fff'))
    ).toEqual(
      List(['#fff'])
    );

    expect(
      colorsReducer(List(['#fff']), addColor('#000'))
    ).toEqual(
      List(['#fff', '#000'])
    );
  });

  it('should handle COLORS_REMOVE', () => {
    expect(
      colorsReducer(List(['#fff', '#000']), removeColor('#000'))
    ).toEqual(
      List(['#fff'])
    );
  });

  it('should contains up to 10 colors', () => {
    expect(
      colorsReducer(
        List(['#fff', '#fafafa', '#808080', '#020202', '#8cd3cf', '#9fb66f', '#bc8aae', '#f8cb8b', '#bf5754', '#363b4f']),
        addColor('#000')
      )
    ).toEqual(
      List(['#fafafa', '#808080', '#020202', '#8cd3cf', '#9fb66f', '#bc8aae', '#f8cb8b', '#bf5754', '#363b4f', '#000']),
    );
  });
});