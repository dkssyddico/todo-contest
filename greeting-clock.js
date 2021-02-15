// Clock Part
const date = document.querySelector('.js-date');

function writeDate(year, month, day) {
  if (month === 0) {
    month = 'Jan';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 1) {
    month = 'Feb';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 2) {
    month = 'Mar';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 3) {
    month = 'Apr';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 4) {
    month = 'May';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 5) {
    month = 'Jun';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 6) {
    month = 'Jul';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 7) {
    month = 'Aug';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 8) {
    month = 'Sep';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 9) {
    month = 'Oct';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 10) {
    month = 'Nov';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
  if (month === 11) {
    month = 'Dec';
    if (day === 1) {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
    if (day === 2) {
      date.innerHTML = `${year} ${month} ${day}nd`;
    }
    if (day === 3) {
      date.innerHTML = `${year} ${month} ${day}rd`;
    } else {
      date.innerHTML = `${year} ${month} ${day}st`;
    }
  }
}

const realClock = document.querySelector('.js-clock');

function getTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  writeDate(year, month, day);
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  realClock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// Greeting Part

const greetingMsg = document.querySelector('.js-greeting');
const greetingName = document.querySelector('.js-name');
const greetingForm = document.querySelector('.js-name-form');
const greetingInput = greetingForm.querySelector('input');
const addTaskForm = document.querySelector('.js-task-form');

const USER_LS = 'currentUser';
const HIDDEN_CN = 'hidden';

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

const headerText = document.querySelector('.header-title--text');

function changeTitle(name) {
  headerText.innerText = `${name}'s To Do List`;
}

function paintName(name) {
  const today = new Date();
  let hours = parseInt(today.getHours());
  console.log(hours);
  if (hours == 0 && hours <= 5) {
    greetingMsg.innerText = "It's time to sleep 😴";
  }
  if (hours >= 6 && hours <= 11) {
    greetingMsg.innerText = 'Good Morning.';
  }
  if (hours >= 12 && hours <= 17) {
    greetingMsg.innerText = 'Good afternoon.';
  }
  if (hours >= 18 && hours <= 23) {
    greetingMsg.innerText = 'Good Night.';
  }
  greetingName.innerText = name;
  greetingForm.classList.add(HIDDEN_CN);
  addTaskForm.classList.remove(HIDDEN_CN);
  changeTitle(name);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintName(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingForm.addEventListener('submit', handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    addTaskForm.classList.add(HIDDEN_CN);
    askForName();
  } else {
    paintName(currentUser);
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  loadName();
}

init();
