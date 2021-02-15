const form = document.querySelector('.js-task-form');
const input = document.querySelector('.js-task-input');

const pendingList = document.querySelector('.pending-list');
const finishedList = document.querySelector('.finished-list');

// 빈 array 만들기
let pendingArray, finishedArray;

// local storage 저장될 이름 만들기
const PENDING_LS = 'Pending';
const FINISHED_LS = 'Finished';

function makeTaskObj(text) {
  return {
    text,
    id: String(Date.now()),
  };
}

function addToFinishedArray(obj) {
  finishedArray.push(obj);
}

function addToPendingArray(obj) {
  pendingArray.push(obj);
}

function findInPendingList(id) {
  return pendingArray.find((obj) => {
    return obj.id === id;
  });
}

function findInFinishedList(id) {
  return finishedArray.find((obj) => {
    return obj.id === id;
  });
}

function removeFromPendingList(id) {
  pendingArray = pendingArray.filter((obj) => {
    return obj.id !== id;
  });
}

function removeFromFinishedList(id) {
  finishedArray = finishedArray.filter((obj) => {
    return obj.id !== id;
  });
}

function saveToPendingArray(taskObj) {
  pendingArray.push(taskObj);
}

function checkTask(event) {
  const checked = event.target.parentNode;
  const id = checked.dataset.id;
  checked.parentNode.removeChild(checked);
  const FinishedTask = findInPendingList(id);
  removeFromPendingList(id);
  addToFinishedArray(FinishedTask);
  paintFinishedTasks(FinishedTask);
  saveLocalStorages();
}

function deleteTask(event) {
  const Deleted = event.target.parentNode;
  const id = Deleted.dataset.id;
  Deleted.parentNode.removeChild(Deleted);
  removeFromPendingList(id);
  removeFromFinishedList(id);
  saveLocalStorages();
}

function backTask(event) {
  const back = event.target.parentNode;
  const id = back.dataset.id;
  back.parentNode.removeChild(back);
  const backTask = findInFinishedList(id);
  removeFromFinishedList(id);
  addToPendingArray(backTask);
  paintPendingTasks(backTask);
  saveLocalStorages();
}

function makeItem(taskObj) {
  const id = taskObj.id;
  const li = document.createElement('li');
  li.setAttribute('data-id', id);
  const span = document.createElement('span');
  span.innerText = taskObj.text;
  const delBtn = document.createElement('i');
  delBtn.setAttribute('class', 'fas fa-trash-alt delBtn');
  delBtn.setAttribute('data-id', id);
  delBtn.addEventListener('click', deleteTask);
  li.append(span, delBtn);
  return li;
}

function paintFinishedTasks(taskObj) {
  const finishedRow = makeItem(taskObj);
  const id = taskObj.id;
  const backBtn = document.createElement('i');
  backBtn.setAttribute('class', 'fas fa-backward backBtn');
  backBtn.setAttribute('data-id', id);
  backBtn.addEventListener('click', backTask);
  finishedRow.append(backBtn);
  finishedList.append(finishedRow);
}

function paintPendingTasks(taskObj) {
  const pendingRow = makeItem(taskObj);
  const id = taskObj.id;
  const checkBtn = document.createElement('i');
  checkBtn.setAttribute('class', 'fas fa-check checkBtn');
  checkBtn.setAttribute('data-id', id);
  checkBtn.addEventListener('click', checkTask);
  pendingRow.append(checkBtn);
  pendingList.append(pendingRow);
}

function showNumPendingTasks(num) {
  const pendingSign = document.querySelector('.pending-notice');
  if (num === 0) {
    pendingSign.innerText = "There's nothing to do! ";
  }
  if (num === 1) {
    pendingSign.innerText = 'You have 1 thing to do!';
  }
  if (num > 1) {
    pendingSign.innerText = `You have ${num} things to do!`;
  }
}

function showNumFinishedTasks(num) {
  const finishedSign = document.querySelector('.finished-notice');
  if (num === 0) {
    finishedSign.innerText = 'Nothing done 😅';
  }
  if (num === 1) {
    finishedSign.innerText = 'You finished 1 thing! 👏';
  }
  if (num > 1) {
    finishedSign.innerText = `You finished ${num} things! 👏`;
  }
}

function saveLocalStorages() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingArray));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArray));
  let numPending = pendingArray.length;
  let numFinished = finishedArray.length;
  showNumPendingTasks(numPending);
  showNumFinishedTasks(numFinished);
}

function loadLocalStorages() {
  pendingArray = JSON.parse(localStorage.getItem(PENDING_LS)) || [];
  finishedArray = JSON.parse(localStorage.getItem(FINISHED_LS)) || [];
}

function handlesubmit(event) {
  event.preventDefault();
  const text = input.value;
  if (text === '') {
    alert('No Content!');
  } else {
    input.value = '';
    const taskObj = makeTaskObj(text);
    paintPendingTasks(taskObj);
    saveToPendingArray(taskObj);
    saveLocalStorages();
  }
}

function restoreLocalStorage() {
  pendingArray.forEach((obj) => {
    paintPendingTasks(obj);
  });
  finishedArray.forEach((obj) => {
    paintFinishedTasks(obj);
  });
}

function init() {
  form.addEventListener('submit', handlesubmit);
  loadLocalStorages();
  restoreLocalStorage();
}

init();
