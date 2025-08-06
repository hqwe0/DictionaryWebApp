export function renderEmptyAlert() {
  const dictionary = document.querySelector('.js-dictionary');
  const input = document.querySelector('.js-search-input-bar');
  
  // Önce mevcut alert'i temizle
  dictionary.querySelector('.empty-alert')?.remove();
  
  // Empty alert HTML'ini ekle
  const html = `<p class="empty-alert">Whoops, can't be empty…</p>`
  dictionary.insertAdjacentHTML('afterbegin', html);
  
  // Input'a error style'ı ekle
  input.classList.add('empty-input-bar');
}
