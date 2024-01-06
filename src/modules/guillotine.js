export const generateGuillotine = () => {
  const wrapper = document.getElementsByTagName('body')[0];
  const container = document.createElement('div');
  container.classList.add('container');

  const wrapperLeft = document.createElement('div');
  wrapperLeft.classList.add('wrapper-left');

  const wrapperRight = document.createElement('div');
  wrapperRight.classList.add('wrapper-right');

  const blockLeft = document.createElement('div');
  blockLeft.classList.add('block-left');

  const rope = document.createElement('div');
  rope.classList.add('block-left__rope');

  const jumper = document.createElement('div');
  jumper.classList.add('block-left__jumper');

  const word = document.createElement('div');
  word.classList.add('block-right__word');
  word.textContent = 'Поле Чудес';

  const blockRight = document.createElement('div');
  blockRight.classList.add('block-right__question');
  blockRight.textContent = 'Назовите слово';

  const keyboard = document.createElement('div');
  keyboard.classList.add('block-right__keyboard');

  blockLeft.append(rope, jumper);
  wrapperLeft.append(blockLeft);
  wrapperRight.append(word, blockRight, keyboard);
  container.append(wrapperLeft, wrapperRight);
  wrapper.append(container);
};
