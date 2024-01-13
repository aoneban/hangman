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