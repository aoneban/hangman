import data from './data';

const changeColorToButton = (elem1, elem2) => {
  const itemOne = elem1;
  itemOne.style.opacity = 1;
  itemOne.parentNode.style.border = 'none';
  const itemTwo = elem2;
  itemTwo.style.backgroundColor = '#9316E1';
};

const searchForRequiredLetter = (e) => {
  const currentClick = e.currentTarget.innerText;
  const currentElem = e.currentTarget;
  currentElem.style.backgroundColor = '#ea4f4f';
  const nodeList = document.querySelectorAll('.letter-class');
  for (let i = 0; i < nodeList.length; i += 1) {
    if (nodeList[i].innerText === currentClick) {
      changeColorToButton(nodeList[i], currentElem);
    } 
  }
};

export const generateKeyboard = (n) => {
  const keyboardWrapper = document.querySelector('.block-right__keyboard');
  if (n > data.length - 1) {
    return;
  }
  const keyRows = document.createElement('div');
  keyRows.classList.add(`key-row__${n}`);
  data[n].forEach((el) => {
    const key = document.createElement('div');
    key.classList.add('key', `${el.keyCode}`);
    key.textContent = el.caseUpEn;
    key.addEventListener('click', (event) => {
      searchForRequiredLetter(event);
    });
    keyRows.append(key);
  });
  keyboardWrapper.append(keyRows);
  generateKeyboard(n + 1);
};
