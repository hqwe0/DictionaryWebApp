const dictionary = document.querySelector('.js-dictionary');

export function renderDictionary(data) {
  const html = `
      <div class="dictionary-head">
        <div class="word-container">
          ${dictionaryHeadHtml(data)}
        </div>
        <div class="play-button-container">
          <img src="./assets/images/icon-play.svg" alt="play-button">
        </div>
      </div>
      <div class="dictionary-main">
        ${dictionaryMainHtml(data)}
      </div>
    `
    dictionary.innerHTML = html;
}

function dictionaryHeadHtml(data) {
  const word = data.word;
  const phonetic = data.phonetics.find(phonetic => phonetic.audio && phonetic.text) || {};
  const phoneticText = phonetic.text;
  const phoneticAudio = phonetic.audio;

  const html = `
    <p class="word">${word}</p>
    <p class="phonetic">${phoneticText}</p>
  `;

  return html;
}

function dictionaryMainHtml(data) {
  let html = '';
  
  data.meanings.forEach(meaning => {
    const {partOfSpeech, definitions, synonyms, antonyms} = meaning;

    html += `
      <div class="part-of-speech">
        <p>${partOfSpeech}</p>
        <div class="horizontal-line"></div>
      </div>
      <div class="definitons">
        <p class="meaning">Meaning</p>
        <div class="meanings">
          <ul>
            ${definitions.map(def => `
              <li>
                ${def.definition}
                ${def.example ? `<p>${def.example}</p>` : ''}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      ${synonyms && synonyms.length > 0 ? `
        <div class="synonym">
          Synonyms : <span>${synonyms.join(', ')}</span>
        </div>
      `: ''}

       ${antonyms && antonyms.length > 0 ? `
        <div class="antonym">
          Antonyms : <span>${antonyms.join(', ')}</span>
        </div>
      `: ''}
    `;
  });
  return html;
}