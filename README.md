# Dictionary Web App

A simple, responsive dictionary web app that lets you look up English words using the Free Dictionary API. It includes dark mode, font switching (Sans Serif / Serif / Mono), and audio pronunciation when available.

## Features
- Search any English word via https://dictionaryapi.dev (no API key required)
- Clean results view with phonetics, definitions, examples, synonyms, and antonyms
- Audio pronunciation playback (when the API provides an audio URL)
- Dark mode toggle
- Font selector: Sans Serif, Serif, Mono
- Friendly empty input and not‑found states

## Tech Stack
- HTML, CSS
- JavaScript (ES Modules)

## Getting Started
Because this project uses ES Modules in the browser, it’s best to run it with a local HTTP server .

### Quick Start with VS Code Live Server
- Install the "Live Server" extension (by Ritwick Dey) in VS Code
- Open this project folder in VS Code
- Right‑click `index.html` and choose "Open with Live Server" (or click the "Go Live" button in the status bar)
- Your browser will open at a local URL (e.g., http://127.0.0.1:5500). If it doesn’t, copy the URL from the Live Server output and open it manually

## Usage
- Type a word in the search bar and press Enter or click the search icon
- If the input is empty, you’ll see a small alert
- If the word isn’t found, a helpful message is shown
- Use the dropdown in the navbar to switch fonts
- Use the toggle to switch between light/dark modes
- Click the round play button (if visible) to hear pronunciation

## Project Structure
```
.
├── index.html
├── assets/
│   ├── fonts/
│   └── images/
├── scripts/
│   ├── index.js
│   ├── eventHandlers/
│   │   ├── audioHandler.js
│   │   ├── fontHandler.js
│   │   ├── searchHandler.js
│   │   └── themeHandler.js
│   └── renderDictionary/
│       ├── dictionary.js
│       ├── emptyState.js
│       └── notFound.js
└── styles/
    ├── general.css
    ├── navbar.css
    ├── search-bar.css
    └── dictionary/
        ├── dictionary-head.css
        ├── dictionary-main.css
        └── dictionary-not-found.css
```

## API
- Source: https://dictionaryapi.dev/
- Endpoint used: `GET https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
- No API key required

## Notes & Troubleshooting
- If you open `index.html` directly from the file system, module loading may fail; use a local HTTP server instead
- Audio isn’t available for every word; the play button only appears when an audio URL exists
- Some browsers restrict autoplay; audio here is user‑initiated (click), which should work

## Roadmap / To‑do
- Restructure the codebase to make adding multiple languages easier
- Add support for additional languages (beyond English)
- Refine and improve the mobile layout/responsiveness
- Persist dark mode state and selected font family using local storage (local history)

## Acknowledgements
- Inspired by the “Dictionary web app” challenge from Frontend Mentor