import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallerySmallImg = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      loading="lazy"
      alt="${description}"
      width= "320px"
    />
  </a>
</li` ).join('');

gallerySmallImg.insertAdjacentHTML('beforeend', markup);

gallerySmallImg.addEventListener('click', onClick);

function onClick (evt) {
  evt.preventDefault();
  const bigImg = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${bigImg}"></img>`)

  instance.show()
}





