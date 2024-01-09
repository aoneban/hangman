import data from './data';

let ATTEMPT_COUNTER = 0;

const changeColorToButton = (elem1, elem2) => {
  const itemOne = elem1;
  itemOne.style.opacity = 1;
  itemOne.parentNode.classList.add('border-hidden');
  const itemTwo = elem2;
  itemTwo.style.backgroundColor = '#9316E1';
};

const showBodyParts = (res, elem) => {
  if (res.length === 0 && !elem.classList.contains('marker')) {
    document.getElementsByClassName('body-player')[ATTEMPT_COUNTER].style.display = 'block';
    ATTEMPT_COUNTER += 1;
  }
};

const searchForRequiredLetter = (e) => {
  const currentClick = e.currentTarget.innerText;
  const currentElem = e.currentTarget;
  currentElem.style.backgroundColor = '#ea4f4f';
  const nodeList = document.querySelectorAll('.letter-class');
  const resultTrue = [];
  const resultFalse = [];
  for (let i = 0; i < nodeList.length; i += 1) {
    if (nodeList[i].innerText === currentClick) {
      resultTrue.push(nodeList[i].innerText);
      changeColorToButton(nodeList[i], currentElem);
    } else {
      resultFalse.push(currentClick);
    }
  }
  if (resultFalse.includes(currentClick)) {
    showBodyParts(resultTrue, currentElem);
    currentElem.classList.add('marker');
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

export const physicalKeyboard = () => {
  document.addEventListener('keydown', (event) => {
    const nodeListTwo = document.querySelectorAll('.letter-class');
    const key = event.key.toUpperCase();
    const topKey = event.code;
    const resultTrueTwo = [];
    for (let i = 0; i < nodeListTwo.length; i += 1) {
      if (nodeListTwo[i].innerHTML === key) {
        resultTrueTwo.push(nodeListTwo[i].innerText);
        nodeListTwo[i].style.opacity = 1;
        nodeListTwo[i].parentNode.classList.add('border-hidden');
      }
    }
    if (resultTrueTwo.length === 0) {
      const keyboard = document.querySelectorAll('.key');
      for (let i = 0; i < keyboard.length; i += 1) {
        if (keyboard[i].classList.contains(topKey))
        keyboard[i].style.backgroundColor = '#ea4f4f';
      }
      document.getElementsByClassName('body-player')[ATTEMPT_COUNTER].style.display = 'block';
      ATTEMPT_COUNTER += 1;
    }
  });
};