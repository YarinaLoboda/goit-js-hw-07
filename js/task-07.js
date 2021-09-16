const refs = {
    inputEl: document.querySelector('input#font-size-control'),
    spanEl: document.querySelector('span#text'),  
}

function onInputInputEl(event) {
    refs.spanEl.style.fontSize = event.currentTarget.value+'px';
}

refs.inputEl.addEventListener('input', onInputInputEl);