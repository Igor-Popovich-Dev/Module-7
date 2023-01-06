import { galleryItems } from './gallery-items.js';

//console.log(galleryItems)
const gallery = document.querySelector(".gallery");

const createGallery = (items) => {
    return items.map((item) => `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" 
            src="${item.preview}"
            alt="${item.description}"
        >
    </a>`).join("");
}
gallery.innerHTML = createGallery(galleryItems)

new SimpleLightbox('.gallery a');
