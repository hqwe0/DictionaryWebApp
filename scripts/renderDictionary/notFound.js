export function renderNotFound() {
  const dictionary = document.querySelector('.js-dictionary');
  
  const html = `
    <div class="not-found">
      <div class="emoji">😕</div>
      <div class="alert">No definitions found</div>
      <div class="message">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</div>
    </div>
  `
  dictionary.innerHTML = html;
}
