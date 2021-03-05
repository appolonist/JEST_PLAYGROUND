import profiler from './factory';
test('Factory', () => {
    expect(profiler(22345678)).toEqual({"label": 22345678, "lastTime": null});
  });