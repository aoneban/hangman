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
    key.addEventListener('click', (event) => {
      const currentClick = event.currentTarget.innerText;
      const nodeList = document.querySelectorAll('.letter-class');
      for (let i = 0; i < nodeList.length; i += 1) {
        if (nodeList[i].innerText === currentClick) {
          nodeList[i].style.opacity = 1;
        }
      }
    });
    keyRows.append(key);
  });
  keyboardWrapper.append(keyRows);
  generateKeyboard(n + 1);
};
