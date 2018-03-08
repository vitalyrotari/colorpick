import { List, Map } from 'immutable';
import colors, * as ColorActions from './colors';

describe('colors actions', () => {
  it('add should create COLORS_ADD action', () => {
    expect(ColorActions.add('#fff')).toEqual({
      type: ColorActions.add.toString(),
      payload: '#fff',
    });
  });

  it('remove should create COLORS_REMOVE action', () => {
    expect(ColorActions.remove(0)).toEqual({
      type: ColorActions.remove.toString(),
      payload: 0,
    });
  });

  it('flush should create COLORS_FLUSH action', () => {
    expect(ColorActions.flush()).toEqual({
      type: ColorActions.flush.toString(),
    });
  });
});

describe('colors reducer', () => {
  const initialState = List();

  it('should handle initial state', () => {
    expect(
      colors(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle COLORS_ADD', () => {
    expect(
      colors(initialState, ColorActions.add('#fff'))
    ).toEqual(
      List(['#fff'])
    );

    expect(
      colors(List(['#fff']), ColorActions.add('#000'))
    ).toEqual(
      List(['#fff', '#000'])
    );
  });

  it('should handle COLORS_REMOVE', () => {
    expect(
      colors(List(['#fff', '#000']), ColorActions.remove('#000'))
    ).toEqual(
      List(['#fff'])
    );
  });

  it('should handle COLORS_FLUSH', () => {
    expect(
      colors(List(['#fff', '#000']), ColorActions.flush())
    ).toEqual(
      List(),
    );
  });

  it('should contains up to 10 colors', () => {
    expect(
      colors(
        List(['#fff', '#fafafa', '#808080', '#020202', '#8cd3cf', '#9fb66f', '#bc8aae', '#f8cb8b', '#bf5754', '#363b4f']),
        ColorActions.add('#000')
      )
    ).toEqual(
      List(['#fafafa', '#808080', '#020202', '#8cd3cf', '#9fb66f', '#bc8aae', '#f8cb8b', '#bf5754', '#363b4f', '#000']),
    );
  });
});
