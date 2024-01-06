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

  const keyboard = document.createElement('div');
  keyboard.classList.add('block-right__keyboard');

  blockLeft.append(rope, jumper);
  wrapperLeft.append(blockLeft);
  wrapperRight.append(keyboard);
  container.append(wrapperLeft, wrapperRight);
  wrapper.append(container);
};
