const refs = {
    inputEl: document.querySelector('input#validation-input'),
}


function onBlurInputEl(event) {

    const result =
        (Number(refs.inputEl.dataset.length) === event.currentTarget.value.length)
        ? 'valid' : 'invalid';

    refs.inputEl.classList = [];
    refs.inputEl.classList.add(result);
}

refs.inputEl.addEventListener('blur', onBlurInputEl);

