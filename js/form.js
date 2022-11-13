import { resetScale } from "./scale.js";

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const downloadButton = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const buttonCancel = form.querySelector('.img-upload__cancel');

function onPopupEscKeyDown(evt) {

  if(evt.key === 'Escape' ) {
    evt.preventDefault();

    closePopup();

  }

}

function showPopup() {

  resetScale();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeyDown);

}

function closePopup() {

  resetScale();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeyDown);

}

downloadButton.addEventListener('change', () => {

  showPopup();

});

buttonCancel.addEventListener('click', () => {

  closePopup();

});

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text'
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if(isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма не валидна');
  }

});


