// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector('.gallery');


const newGalleryItems = createGalleryItems(galleryItems);

    function createGalleryItems(galleryItems){
        return galleryItems
        .map(({preview, original, description}) => {
            return `
            <a class="gallery__item" href="${original}">
                <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" />
            </a>
            `;
        })
        .join('');
    };
    console.log(newGalleryItems);
    galleryEl.insertAdjacentHTML('beforeend', newGalleryItems);

    let currentImage = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: '250'});
    galleryEl.addEventListener('click', onGalleryClick);
    function onGalleryClick(event) {
        event.preventDefault();
        
       
        return currentImage;
    };