const page = document.querySelector('.js-page');

const fontFamilySansSerif = document.querySelector('.js-sans-serif');
const fontFamilySerif = document.querySelector('.js-serif');
const fontFamilyMono = document.querySelector('.js-mono');

export function initializeFontSwitching() {
  fontFamilySansSerif.addEventListener('click', () => {
    page.style.fontFamily = 'mySansSerif';
  });
  
  fontFamilySerif.addEventListener('click', () => {
    page.style.fontFamily = 'mySerif';
  });
  
  fontFamilyMono.addEventListener('click', () => {
    page.style.fontFamily = 'myMono';
  });
}