import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallerySmallImg = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</li` ).join('');

gallerySmallImg.insertAdjacentHTML('beforeend', markup);

gallerySmallImg.addEventListener('click', onClick);

function onClick (evt) {
  evt.preventDefault();
  console.log(evt.target);
  console.log(evt.currentTarget);
}

