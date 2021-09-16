const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const refs = {
    ulParentEl: document.querySelector('#gallery'),
}


function createGallery(images) {

    const result = images.reduce((acc, el) =>
        acc +=
        `<li class="item">` +
        `<article class="card">` +
        `<div><img src="${el.url}" alt="${el.alt}"></div>` +
        `<div><h2>${el.alt}</h2></div>` +
        `</article >`
        +`</li >`, '');
    

    refs.ulParentEl.insertAdjacentHTML("afterbegin", result);
}


createGallery(images)