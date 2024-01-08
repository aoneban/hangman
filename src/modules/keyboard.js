import data from './data';

const changeColorToButton = (elem1, elem2) => {
  const itemOne = elem1;
  itemOne.style.opacity = 1;
  itemOne.parentNode.classList.add('border-hidden');
  const itemTwo = elem2;
  itemTwo.style.backgroundColor = '#9316E1';
};

let counter = 0;

const showBodyParts = (res) => {
  if (res.length === 0) {
    document.getElementsByClassName('body-player')[counter].style.display = 'block';
    counter += 1;
  }
};

const searchForRequiredLetter = (e) => {
  const currentClick = e.currentTarget.innerText;
  const currentElem = e.currentTarget;
  currentElem.style.backgroundColor = '#ea4f4f';
  const nodeList = document.querySelectorAll('.letter-class');
  const result = [];
  for (let i = 0; i < nodeList.length; i += 1) {
    if (nodeList[i].innerText === currentClick) {
      result.push(nodeList[i].innerText);
      changeColorToButton(nodeList[i], currentElem);
    } 
  }
  showBodyParts(result);
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
