import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
addScript ();

function addScript () {
    const bodyEl = document.querySelector("body");
    const lightboxScript = document.createElement("script");
    lightboxScript.src = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
    bodyEl.append(lightboxScript);

    const headEl = document.querySelector("head");
    const lightboxStyles = document.createElement("link");
    lightboxStyles.rel = "stylesheet";
    lightboxStyles.href = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
    headEl.append(lightboxStyles);
}

function createGalleryMarkup (array) {
    let markup = "";
    array.forEach(e => {
       markup += `<div class="gallery__item">
       <a class="gallery__link" href=${e.original}>
       <img
       class="gallery__image"
       src=${e.preview}
       data-source=${e.original}
       alt=${e.description}
       />
       </a>
       </div>`
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

    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`
    )

    instance.show()

    document.addEventListener("keydown", onEscapePress);

    function onEscapePress(e) {
        if (e.code !== "Escape") {
            return;
        }

        instance.close()

        document.removeEventListener("keydown", onEscapePress);
    }
};

