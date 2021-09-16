const refs = {
    inputEl: document.querySelector('input#name-input'),
    spanEl: document.querySelector('span#name-output'),
}

function onChangeInputEl(event) {
  
    if (!event.currentTarget.value)
    {
        refs.spanEl.textContent = 'незнакомец';
        return;
    }

    refs.spanEl.textContent = event.currentTarget.value;
}

 refs.inputEl.addEventListener('input', onChangeInputEl);