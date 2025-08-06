const lightModeSwitch = document.querySelector('.js-light-mode-switch');
let isDarkMode = false;

export function initializeDarkModeToggle() {
  lightModeSwitch.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  });
}
