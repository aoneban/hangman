import data from './data';

export const generateKeyboard = (n) => {
  const keyboardWrapper = document.querySelector('.block-right__keyboard');
  if (n > 2) {
    return;
  }
  const keyRows = document.createElement('div');
  keyRows.classList.add(`key-row__${n}`);
  data[n].forEach((el) => {
    const key = document.createElement('div');
    key.classList.add('key', `${el.keyCode}`);
    key.textContent = el.caseUpEn;
    key.addEventListener('click', () => alert('hfhfh'));
    keyRows.append(key);
  });
  keyboardWrapper.append(keyRows);
  generateKeyboard(n + 1);
};
