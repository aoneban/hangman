import '../styles/modal.scss';

const deleteModalWindow = () => {
  document.getElementById('myModal').remove();

  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.zIndex = '9999';
  overlay.style.pointerEvents = 'all';

  document.body.appendChild(overlay);
};

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
  buttonOne.classList.add('btn');
  buttonOne.textContent = 'Yes';
  const buttonTwo = document.createElement('button');
  buttonTwo.addEventListener('click', deleteModalWindow);
  buttonTwo.classList.add('btn');
  buttonTwo.textContent = 'No';

  wrapperButtons.append(buttonOne, buttonTwo);
  content.append(textToModal, hiddenWord, contain, wrapperButtons);
};
