const refs = {
    categories: document.querySelectorAll("li.item"),
} 

function getCountOfCategory(arr) {
   return `В списке ${arr.length} категории.`;
}

function showCategoryCaptionWithCountItem(arr) {

    let result = '';



    arr.forEach(({ children }) => {
 
        const [category, items] = children;

    result += `Категория: ${category.textContent}
Количество элементов: ${items.children.length}
`;

    });

    return result;
    
}


console.log(getCountOfCategory(refs.categories));
console.log(showCategoryCaptionWithCountItem(refs.categories));

