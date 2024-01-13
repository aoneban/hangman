import '../styles/modal.scss';
// eslint-disable-next-line import/no-cycle
import { launchNewGame } from './keyboard';



export const modalWindow = (bool, word) => {
  const myModal = document.createElement('div');
  myModal.setAttribute('id', 'myModal');
  myModal.classList.add('modal');
  const content = document.createElement('div');
  content.classList.add('modal-content');
  content.setAttribute('id', 'mod01');
  const caption = document.createElement('div');
  caption.classList.add('caption');

  myModal.append(content, caption);
  document.body.append(myModal);
  const textToModal = document.createElement('h2');
  // eslint-disable-next-line no-unused-expressions
  bool === true ? (textToModal.textContent = 'You won!') : (textToModal.textContent = 'You lose!');
  const hiddenWord = document.createElement('p');
  hiddenWord.textContent = `The hidden word was: ${word}`;
  const contain = document.createElement('p');
  contain.textContent = 'Want to play again?';
  const wrapperButtons = document.createElement('div');
  wrapperButtons.classList.add('wrapper-buttons');
  const buttonOne = document.createElement('button');
  buttonOne.addEventListener('click', launchNewGame);
  buttonOne.classList.add('btn');
  buttonOne.textContent = 'Play again';

  wrapperButtons.append(buttonOne);
  content.append(textToModal, hiddenWord, contain, wrapperButtons);
};
