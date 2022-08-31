import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const listImagesEl = document.querySelector('.gallery');

function createGallary(items) {
    return items
    .map((item) => `
        <div>
            <a class="gallery__item" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}" 
                    alt=${item.description} />
            </a>
        </div>
        `)
    .join("");
}
const addGallary = createGallary(galleryItems);
    
listImagesEl.innerHTML = addGallary;

new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt', 
    captionDelay: 250
});