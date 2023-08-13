export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const days = new Array(n).fill(0);
  const stack: IndexedTemperature[] = [];

  let i = 0;
  while (i < n) {
    const newTemperature: IndexedTemperature = {
      index: i,
      temperature: temperatures[i],
    };
    removeLowerTemperaturesFromStack(newTemperature);
    stack.push(newTemperature);
    i++;
  }

  return days;

  function removeLowerTemperaturesFromStack(newTemperature: IndexedTemperature) {
    while (stack.length > 0) {
      const lastTemperature = stack[stack.length - 1];
      if (lastTemperature.temperature < newTemperature.temperature) {
        days[lastTemperature.index] = newTemperature.index - lastTemperature.index;
        stack.pop();
      } else {
        break;
      }
    }
  }
}

type IndexedTemperature = {
  index: number,
  temperature: number
};
