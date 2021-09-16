const refs = {
    decBtnEl: document.querySelector('button[data-action="decrement"]'),
    incBtnEl: document.querySelector('button[data-action="increment"]'),
    counter: document.querySelector('#value'),
}

function onClickIncBtn() {
   refs.counter.textContent++;
}

function  onClickDecBtn() {
  refs.counter.textContent--;
}

refs.decBtnEl.addEventListener('click', onClickDecBtn);

refs.incBtnEl.addEventListener('click', onClickIncBtn);

// Создай переменную counterValue в которой будет хранится 
// текущее значение счетчика.
const counterValue = refs.counter.textContent; 