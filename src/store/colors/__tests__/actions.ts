import { addColor, removeColor } from '../actions';

describe('colors actions', () => {
  it('add should create COLORS_ADD action', () => {
    expect(addColor('#fff')).toEqual({
      type: addColor.toString(),
      payload: '#fff',
    });
  });

  it('remove should create COLORS_REMOVE action', () => {
    expect(removeColor(0)).toEqual({
      type: removeColor.toString(),
      payload: 0,
    });
  });
});