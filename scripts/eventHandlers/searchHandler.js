import { renderDictionary } from "../renderDictionary/dictionary.js"
import { renderNotFound } from "../renderDictionary/notFound.js";
import { renderEmptyAlert } from "../renderDictionary/emptyState.js";

const input = document.querySelector('.js-search-input-bar');
const searchIcon = document.querySelector('.js-search-icon');
const dictionary = document.querySelector('.js-dictionary');

export async function getWordJson(word) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const data = await response.json();
  console.log(data);
  return data;
}

async function handleSearch() {
  try {
    const dataArray = await getWordJson(input.value);
    const data = dataArray[0];
    console.log(data.word);
    renderDictionary(data);
  } catch (error) {
    if (input.value === '') {
      renderEmptyAlert();
    }
    else{
      renderNotFound();
    }
  }
}

export function initializeSearch() {
  input.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
      await handleSearch();
    }
  });
  
  input.addEventListener('input', () => {
    input.classList.remove('empty-input-bar');
    dictionary.querySelector('.empty-alert')?.remove();
  });

  searchIcon.addEventListener('click', async () => {
    await handleSearch();
  });
}