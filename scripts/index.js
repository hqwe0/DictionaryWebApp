import { initializeSearch } from "./eventHandlers/searchHandler.js";
import { initializeFontSwitching } from "./eventHandlers/fontHandler.js";
import { initializeDarkModeToggle } from "./eventHandlers/themeHandler.js";
import { initializeAudio } from "./eventHandlers/audioHandler.js";

// Initialize all handlers
initializeSearch();
initializeFontSwitching();
initializeDarkModeToggle();
initializeAudio();