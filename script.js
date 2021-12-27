const letter = document.getElementById('carta-gerada');
const inputLetterText = document.getElementById('carta-texto');
const buttonGenerateLetter = document.getElementById('criar-carta');
const howManyWords = document.getElementById('carta-contador');

const writtenGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const screwGroup = ['skewleft', 'skewright'];

function isTextInvalid() {
  let otherCharacters = `${inputLetterText.value}`.match(/[^ ]/g);
  if (!otherCharacters) {
    otherCharacters = [];
  }
  if (otherCharacters.length > 0) {
    return false;
  }
  return true;
}

function generateRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function generateRandomClassList() {
  const written = writtenGroup[generateRandomIndex(writtenGroup.length)];
  const size = sizeGroup[generateRandomIndex(sizeGroup.length)];
  const rotation = rotationGroup[generateRandomIndex(rotationGroup.length)];
  const screw = screwGroup[generateRandomIndex(screwGroup.length)];
  return `${written} ${size} ${rotation} ${screw}`;
}

function switchClassList(event) {
  const selectedWord = event.target;
  let newClassList = generateRandomClassList();
  while (selectedWord.className === newClassList) {
    newClassList = generateRandomClassList();
  }
  selectedWord.className = newClassList;
}

function updateHowManyWords(length) {
  howManyWords.innerHTML = length;
}

function generateLetter() {
  letter.innerHTML = '';
  if (inputLetterText.value === '' || isTextInvalid()) {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const arrayWords = inputLetterText.value.split(' ');
    updateHowManyWords(arrayWords.length);
    for (let i = 0; i < arrayWords.length; i += 1) {
      const newWord = document.createElement('span');
      newWord.innerHTML = arrayWords[i];
      newWord.className = generateRandomClassList();
      newWord.addEventListener('click', switchClassList);
      letter.appendChild(newWord);
    }
  }
}

function pressEnterToGenerateLetter(event) {
  if (event.key === 'Enter') {
    generateLetter();
  }
}

buttonGenerateLetter.addEventListener('click', generateLetter);
inputLetterText.addEventListener('keypress', pressEnterToGenerateLetter);
