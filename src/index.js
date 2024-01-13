import './index.scss';
import { generateGuillotine } from './modules/guillotine';
// eslint-disable-next-line import/no-cycle
import { generateKeyboard, physicalKeyboard } from './modules/keyboard';
import questions from './modules/questions';

generateGuillotine();

const getAimItem = (num) => {
  const item = questions.filter((el) => el.id === num);
  return item;
};

const filterToQuestion = (num) => {
  const item = getAimItem(num);
  return item[0].question;
};

export const getWordLength = (num) => {
  const item = getAimItem(num);
  return item[0].answer;
};

export const filterToAnswer = (num) => {
  const item = getAimItem(num);
  return item[0].answer.toUpperCase().split('');
};

const countOfNumberAttempts = () => {
  const parentElem = document.querySelector('.block-right__question');
  const counter = document.createElement('div');
  counter.classList.add('block-right__counter');
  counter.innerHTML = `Number of attempts: <span class="count">0</span> / 6`;
  parentElem.insertAdjacentElement('afterend', counter);
};

const generateAnswer = (num) => {
  const wrapper = document.querySelector('.wrapper-right');
  const answer = document.createElement('div');
  answer.classList.add('block-answer');
  const newAnswer = filterToAnswer(num);
  newAnswer.forEach((el, ind) => {
    const elemWrap = document.createElement('div');
    elemWrap.classList.add('letter-wrapper');
    const elem = document.createElement('p');
    elem.classList.add('letter-class', `letter__${ind}`);
    elem.textContent = el;
    elemWrap.append(elem);
    answer.append(elemWrap);
  });
  wrapper.prepend(answer);
};

const generateQuestion = (num) => {
  const wrapper = document.querySelector('.wrapper-right');
  const question = document.createElement('div');
  question.classList.add('block-right__question');
  question.textContent = filterToQuestion(num);
  wrapper.prepend(question);
  generateAnswer(num);
  countOfNumberAttempts();
};

function getRandomNumberNoRepeats() {
  if (!getRandomNumberNoRepeats.previousRandomNumber) {
      getRandomNumberNoRepeats.previousRandomNumber = 0;
  }
  let newRandomNumber;
  do {
      newRandomNumber = Math.floor(Math.random() * 10) + 1;
  } while (newRandomNumber === getRandomNumberNoRepeats.previousRandomNumber);
  getRandomNumberNoRepeats.previousRandomNumber = newRandomNumber;
  return newRandomNumber;
}

const randomNum1 = getRandomNumberNoRepeats();
generateQuestion(randomNum1);

const START_ROW_KEYBOARD = 0;
generateKeyboard(START_ROW_KEYBOARD);
physicalKeyboard();

