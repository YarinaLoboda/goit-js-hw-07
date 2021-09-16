const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs = {
    ulParentEl: document.querySelector('#ingredients'),
}


function createList(arr) {

    const args = [];
    
        arr.forEach(element => {     
     
        const itemsList = document.createElement('li');
        itemsList.textContent = element;
        args.push(itemsList);
       
    });

 refs.ulParentEl.append(...args);

}


createList(ingredients);