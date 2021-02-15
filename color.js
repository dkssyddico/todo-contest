const dayMode = document.querySelector('.daymode');
const darkMode = document.querySelector('.darkmode');

const dateBox = document.querySelector('.date-box');
const greetingBox = document.querySelector('.greetings');
const settingsBox = document.querySelector('.settings');
const pendingBox = document.querySelector('.pending');
const finishedBox = document.querySelector('.finished');
const googleSection = document.querySelector('.google');
const naverSection = document.querySelector('.naver');
const searchButton = document.querySelector('.search-btn');
const dayModeBtn = document.querySelector('.daymode');
const darkModeBtn = document.querySelector('.darkmode');

const DAY_CN = 'day';
const NIGHT_CN = 'night';
const NIGHT_BTN_CN = 'nightBtn';
const DAY_BTN_CN = 'dayBtn';
const SETTING_DARK_CN = 'setting-btn-dark';

function changeDaymode() {
  dateBox.classList.remove(NIGHT_CN);
  greetingBox.classList.remove(NIGHT_CN);
  settingsBox.classList.remove(NIGHT_CN);
  pendingBox.classList.remove(NIGHT_CN);
  finishedBox.classList.remove(NIGHT_CN);
  googleSection.classList.remove(NIGHT_CN);
  naverSection.classList.remove(NIGHT_CN);
  searchButton.classList.remove(NIGHT_BTN_CN);
  dateBox.classList.add(DAY_CN);
  greetingBox.classList.add(DAY_CN);
  settingsBox.classList.add(DAY_CN);
  pendingBox.classList.add(DAY_CN);
  finishedBox.classList.add(DAY_CN);
  googleSection.classList.add(DAY_CN);
  naverSection.classList.add(DAY_CN);
  searchButton.classList.add(DAY_BTN_CN);
}

function changeDarkMode() {
  dateBox.classList.add(NIGHT_CN);
  greetingBox.classList.add(NIGHT_CN);
  settingsBox.classList.add(NIGHT_CN);
  pendingBox.classList.add(NIGHT_CN);
  finishedBox.classList.add(NIGHT_CN);
  googleSection.classList.add(NIGHT_CN);
  naverSection.classList.add(NIGHT_CN);
  dayModeBtn.classList.add(SETTING_DARK_CN);
  darkModeBtn.classList.add(SETTING_DARK_CN);
  searchButton.classList.add(NIGHT_BTN_CN);
  dateBox.classList.remove(DAY_CN);
  greetingBox.classList.remove(DAY_CN);
  settingsBox.classList.remove(DAY_CN);
  pendingBox.classList.remove(DAY_CN);
  finishedBox.classList.remove(DAY_CN);
  googleSection.classList.remove(DAY_CN);
  naverSection.classList.remove(DAY_CN);
  searchButton.classList.remove(DAY_BTN_CN);
}

function init() {
  dayMode.addEventListener('click', changeDaymode);
  darkMode.addEventListener('click', changeDarkMode);
}

init();
