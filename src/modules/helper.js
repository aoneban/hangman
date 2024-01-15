export const getRandomNumberNoRepeats = () => {
    if (!getRandomNumberNoRepeats.previousRandomNumber) {
        getRandomNumberNoRepeats.previousRandomNumber = 0;
    }
    let newRandomNumber;
    do {
        newRandomNumber = Math.floor(Math.random() * 10) + 1;
    } while (newRandomNumber === getRandomNumberNoRepeats.previousRandomNumber);
    getRandomNumberNoRepeats.previousRandomNumber = newRandomNumber;
    return newRandomNumber;
  };

const getRandomNumber = () => Math.floor(Math.random() * 11) + 1;

export const getRandomNumberNoRepeatsTwo = () => {
  let previousRandomNumber = parseInt(localStorage.getItem('previousRandomNumber'), 11);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(previousRandomNumber)) {
    previousRandomNumber = 0;
  }
  let newRandomNumber;
  do {
    newRandomNumber = getRandomNumber();
  } while (newRandomNumber === previousRandomNumber);
  localStorage.setItem('previousRandomNumber', newRandomNumber.toString());
  return newRandomNumber;
};