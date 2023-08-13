import { dailyTemperatures } from './dailyTemperatures';

describe('dailyTemperature', () => {
  it('should compute the daily temperature for simple problem 1', () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    const days = dailyTemperatures(temperatures);

    expect(days).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it('should compute the daily temperatures for simple problem 2', () => {
    const temperatures = [30, 40, 50, 60];
    const days = dailyTemperatures(temperatures);

    expect(days).toEqual([1, 1, 1, 0]);
  });

  it('should compute daily temperatures for simple problem 3', () => {
    const temperatures = [30, 60, 90];
    const days = dailyTemperatures(temperatures);

    expect(days).toEqual([1, 1, 0]);
  });
});
