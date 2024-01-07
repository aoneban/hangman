import './index.scss';
import { generateGuillotine } from './modules/guillotine';
import { generateKeyboard } from './modules/keyboard';
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

const filterToAnswer = (num) => {
  const item = getAimItem(num);
  return item[0].answer.toUpperCase().split('');
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
};

generateQuestion(1);
generateKeyboard(0);
