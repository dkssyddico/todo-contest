const searchBtn = document.querySelector('.search-btn');
const searchWindow = document.querySelector('.search');
const exitBtn = document.querySelector('.exit-btn');

const Hidden_CN = 'hidden';

function openSearch() {
  searchWindow.classList.remove(Hidden_CN);
}

function closeSearch() {
  searchWindow.classList.add(Hidden_CN);
}

const googleForm = document.querySelector('.js-google-form');
const googleInput = document.querySelector('.js-google-input');
const googleBtn = document.querySelector('.google-search-btn');

const naverForm = document.querySelector('.js-naver-form');
const naverInput = document.querySelector('.js-naver-input');
const naverBtn = document.querySelector('.naver-search-btn');

function goToGoogle(query) {
  googleBtn.setAttribute('href', `https://www.google.co.kr/search?q=${query}`);
  googleInput.value = '';
}

function handleGoogleSubmit(e) {
  e.preventDefault();
  const query = googleInput.value;
  window.open(`https://www.google.co.kr/search?q=${query}`);
  googleInput.value = '';
}

function handleGoogleClick(e) {
  const goolgeQuery = googleInput.value;
  goToGoogle(goolgeQuery);
}

function goToNaver(query) {
  naverBtn.setAttribute('href', `https://en.dict.naver.com/#/search?query=${query}`);
  naverInput.value = '';
}

https: function handleNaverSubmit(e) {
  e.preventDefault();
  const query = naverInput.value;
  window.open(`https://en.dict.naver.com/#/search?query=${query}`);
  naverInput.value = '';
}

function handleNaverClick(e) {
  const query = naverInput.value;
  goToNaver(query);
}

function init() {
  searchBtn.addEventListener('click', openSearch);
  exitBtn.addEventListener('click', closeSearch);
  googleForm.addEventListener('submit', handleGoogleSubmit);
  googleBtn.addEventListener('click', handleGoogleClick);
  naverForm.addEventListener('submit', handleNaverSubmit);
  naverBtn.addEventListener('click', handleNaverClick);
}

init();
