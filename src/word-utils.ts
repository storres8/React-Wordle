import wordBank from './word-bank.json';

export const getRandomWordFromWordBank = () => {
  const randomIndex = Math.floor(Math.random() * wordBank.valid.length);
  return wordBank.valid[randomIndex];
};
