const refs = {
 
    inputEl: document.querySelector('input'),
    buttonCreateEl: document.querySelector('button[data-action="render"]'),
    buttonDestroyEl: document.querySelector('button[data-action="destroy"]'),
    parentDivEl: document.querySelector('div#boxes'),
}


function createBoxes(amount) {
    console.log('amount =', amount);

    let result = '';
    const startWH = 30;
    const decraseWH = 10;
    


    for (let i = 0; i < amount; i+=1) {
        result += `<div style="width:${startWH + i * decraseWH}px;` +
                  `height:${startWH + i * decraseWH}px;`+
                  `background-color:${getRndColor()}">${i+1}</div>`;
    }

    refs.parentDivEl.insertAdjacentHTML('afterbegin', result);
}

function getRndColor() 
{
    const colGenerate =  () => Math.floor(Math.random()*256) ;
    return "rgb(" + colGenerate() + "," + colGenerate() + "," + colGenerate() + ")";
}

function onButtonCreateElClick() {

    const amount = parseInt(refs.inputEl.value);
    if ((Number.isNaN(amount)) || (amount <= 0)) return;
    createBoxes(amount);
}


function destroyBoxes() {
    refs.parentDivEl.innerHTML = '';
    refs.inputEl.value = '';
}

console.log(getRndColor());

refs.buttonCreateEl.addEventListener('click', onButtonCreateElClick);
refs.buttonDestroyEl.addEventListener('click', destroyBoxes);  // Создай функцию destroyBoxes()