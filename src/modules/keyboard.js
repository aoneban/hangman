import data from './data';
// eslint-disable-next-line import/no-cycle
import { modalWindow } from './modal';
// eslint-disable-next-line import/no-cycle
import { generateQuestion } from '../index';
import { getRandomNumberNoRepeats } from './helper';


let ATTEMPT_COUNTER = 0;

const getHiddenWord = () => {
  const result = [];
  const hiddenWord = document.querySelectorAll('.letter-class');
  hiddenWord.forEach((el) => {
    result.push(el.innerText);
  });
  return result.join('');
};

const changeHead = (head1, head2) => {
  const head = document.querySelectorAll('.body-player');
  head.forEach((el) => {
    if (el.classList.contains(head1)) {
      el.classList.add(head2);
      el.classList.remove(head1);
    }
  });
};

const listenerCount = (count) => {
  const totalAttempts = 6;
  if (count === totalAttempts) {
    const word = getHiddenWord();
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('keydown', keyboardHandler);
    changeHead('head-man', 'head-man2');
    setTimeout(() => {
      modalWindow(false, word);
    }, 1000);
  }
};

const changeColorToButton = (elem1, elem2) => {
  const itemOne = elem1;
  itemOne.style.opacity = 1;
  itemOne.parentNode.classList.add('border-hidden');
  const itemTwo = elem2;
  itemTwo.style.backgroundColor = '#9316E1';
};

const generateNewCount = () => {
  const count = document.querySelector('.count');
  count.innerHTML = ATTEMPT_COUNTER;
};

const showBodyParts = (res, elem) => {
  if (res.length === 0 && !elem.classList.contains('marker')) {
    document.getElementsByClassName('body-player')[ATTEMPT_COUNTER].style.display = 'block';
    ATTEMPT_COUNTER += 1;
    generateNewCount();
  }
  listenerCount(ATTEMPT_COUNTER);
};

const launchModalWindow = () => {
  const word = getHiddenWord();
  modalWindow(true, word);
};

const checkBeforeLaunchModalWindow = () => {
  const resultLength = [];
  const items = document.querySelectorAll('.letter-wrapper');
  items.forEach((item) => {
    if (!item.classList.contains('border-hidden')) {
      resultLength.push(item);
    }
  });
  if (resultLength.length === 0) {
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('keydown', keyboardHandler);
    launchModalWindow();
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
    checkBeforeLaunchModalWindow();
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

function keyboardHandler(event) {
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
    keyboard.forEach((item) => {
      if (item.classList.contains(topKey) && !item.classList.contains('marker')) {
        const newItem = item;
        newItem.style.backgroundColor = '#ea4f4f';
        newItem.classList.add('marker');
        document.querySelector('.head-man').classList.add('active');
        document.getElementsByClassName('body-player')[ATTEMPT_COUNTER].style.display = 'block';
        ATTEMPT_COUNTER += 1;
      }
    });
  }
  checkBeforeLaunchModalWindow();
  generateNewCount();
  listenerCount(ATTEMPT_COUNTER);
}

export const physicalKeyboard = () => {
  document.addEventListener('keydown', keyboardHandler);
};

const replaceQuestion = () => {
  const randomNum = getRandomNumberNoRepeats();
  document.querySelector('.block-right__question').remove();
  document.querySelector('.block-answer').remove();
  document.querySelector('.block-right__counter').remove();
  generateQuestion(randomNum);
};

const restoringKeyboard = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((el) => {
    if (el.classList.contains('marker')) {
      el.classList.remove('marker');
      el.removeAttribute('style');
    }
  });
  replaceQuestion();
};

const hidingBodyParts = () => {
  const man = document.getElementsByClassName('body-player');
  for (let i = 0; i < man.length; i += 1) {
    man[i].style.display = 'none';
  }
  document.addEventListener('keydown', keyboardHandler);
  restoringKeyboard();
};

export const launchNewGame = () => {
  ATTEMPT_COUNTER = 0;
  document.getElementById('myModal').remove();
  changeHead('head-man2', 'head-man');
  hidingBodyParts();
};


