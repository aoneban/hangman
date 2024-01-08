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

  const headMan = document.createElement('div');
  headMan.classList.add('body-player','head-man');

  const bodyMan = document.createElement('div');
  bodyMan.classList.add('body-player','body-man');

  const rightHang = document.createElement('div');
  rightHang.classList.add('body-player','right-hang');

  const leftHang = document.createElement('div');
  leftHang.classList.add('body-player','left-hang');

  const rightLeg = document.createElement('div');
  rightLeg.classList.add('body-player','right-leg');

  const leftLeg = document.createElement('div');
  leftLeg.classList.add('body-player','left-leg');

  const jumper = document.createElement('div');
  jumper.classList.add('block-left__jumper');

  const keyboard = document.createElement('div');
  keyboard.classList.add('block-right__keyboard');
  
  rope.append(headMan, bodyMan, leftHang, rightHang, leftLeg, rightLeg);
  blockLeft.append(rope, jumper);
  wrapperLeft.append(blockLeft);
  wrapperRight.append(keyboard);
  container.append(wrapperLeft, wrapperRight);
  wrapper.append(container);
};
