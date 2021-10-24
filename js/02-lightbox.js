import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

addScripts ();

function addScripts () {
    const bodyEl = document.querySelector("body");
    const lightboxScript = document.createElement("script");
    lightboxScript.src = "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.9.0/simple-lightbox.min.js";
   //lightboxScript.integrity = "sha512-d3VUxSAz6ET/1m4LI8NrqHb25ziUKeYQHHyGPvx2Q6yD8Tuw4MP0oRXXYkGKh/nylBy2+7I1LF/WaDyLoAz1ug==";
    lightboxScript.crossorigin = "anonymous";
    lightboxScript.referrerpolicy = "no-referrer";
    bodyEl.append(lightboxScript);
 
    const headEl = document.querySelector("head");
    const lightboxStyles = document.createElement("link");
    lightboxStyles.rel = "stylesheet";
    lightboxStyles.href = "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.9.0/simple-lightbox.min.css";
    headEl.append(lightboxStyles);
}

function createGalleryMarkup (array) {
    let markup = "";
    array.forEach(e => {
       markup += `<li><a class="gallery__item" href="${e.original}">
       <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
     </a></li>`
    });

    return markup;
};

galleryEl.innerHTML = createGalleryMarkup(galleryItems);

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }

    e.preventDefault();

    const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt",  captionDelay: 250});

};
