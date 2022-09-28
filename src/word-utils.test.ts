import { getRandomWordFromWordBank } from './word-utils';

describe('getRandomWordFromWordBank function', () => {
  it('should produce a random word', () => {
    expect(getRandomWordFromWordBank()).toBeTruthy();
  });

  it('should produce a 5 letter word', () => {
    expect(getRandomWordFromWordBank()).toHaveLength(5);
  });
});
