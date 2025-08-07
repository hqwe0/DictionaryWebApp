export function initializeAudio() {
  const dictionary = document.querySelector('.js-dictionary');

  dictionary.addEventListener('click', (event) => {
    const playButtonContainer = event.target.closest('.js-play-button-container');
    if (!playButtonContainer) return;

    const audio = playButtonContainer.querySelector('.js-play-button-audio');
    audio?.src && audio.play();
  });
}
