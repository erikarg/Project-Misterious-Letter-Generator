const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];
const style = ['newspaper', 'magazine1', 'magazine2'];

function randomClasses(element) {
  const randomSize = size[Math.floor(Math.random() * 3)];
  const randomInclination = inclination[Math.floor(Math.random() * 2)];
  const randomRotation = rotation[Math.floor(Math.random() * 2)];
  const randomStyle = style[Math.floor(Math.random() * 3)];
  const words = document.getElementById('carta-gerada');
  words.classList = `${randomSize} ${randomInclination} ${randomRotation} ${randomStyle}`;
}

function wordCounter() {
  const words = document.getElementById('carta-texto').value;
  const splitter = words.split(' ');
  const counter = document.getElementById('carta-contador');
  counter.innerText = splitter.length;
}
wordCounter();

function generateLetter() {
  const words = document.getElementById('carta-texto').value;
  const spanTags = document.createElement('span');
  const mother = document.getElementById('carta-gerada');
  if (words.length === 0 || words === '' || words === null) {
    mother.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    mother.innerHTML = '';
    mother.appendChild(spanTags);
    spanTags.innerHTML = words;
    randomClasses(spanTags);
    wordCounter();
  }
}
generateLetter();

const generateLetterButton = document.getElementById('criar-carta');
generateLetterButton.addEventListener('click', generateLetter);
