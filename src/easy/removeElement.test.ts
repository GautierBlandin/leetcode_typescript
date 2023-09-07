import { Element, ElementToRemove, removeElement } from './removeElement';

describe('removeElement', () => {
  it('should remove elements', () => {
    const elements = [4, 5, 2, 3, 3, 5, 8, 9, 3, 2, 1, 3, 4, 3];
    const expectedElements = [4, 5, 2, 5, 8, 9, 2, 1, 4];

    verify(elements, expectedElements, 3);
  });
});

function verify(elements: Element[], expectedElements: Element[], val: ElementToRemove) {
  const k = removeElement(elements, val);
  expect(k).toEqual(expectedElements.length);

  for (let i = 0; i < expectedElements.length; i += 1) {
    expect(elements[i]).toEqual(expectedElements[i]);
  }
}
