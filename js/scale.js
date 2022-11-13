const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;


function changedScaleImage(value = DEFAULT_SCALE) {

  image.style.transform = `scale(${value / 100})`;
  scaleControl.value = `${value}%`;

}

changedScaleImage();

function onbuttonSmallerClick() {

  const presentValue = parseInt(scaleControl.value, 10);

  let newValue = presentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  changedScaleImage(newValue);

}


buttonSmaller.addEventListener('click', onbuttonSmallerClick);
