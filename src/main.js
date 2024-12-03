import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  position: 'topRight',
  maxWidth: '432px',
});
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { creatImg } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
loader.style.display = 'none';
const gallery = document.querySelector('.gallery-list');
const galleryImg = new SimpleLightbox('.gallery-item .gallery-link', {
  captionsData: 'alt',
});

form.addEventListener('submit', handSub);

function handSub(event) {
  event.preventDefault();
  let inputValue = event.target.elements.input.value.trim();

  if (inputValue === '') {
    loader.style.display = 'none';
    iziToast.warning({
      message: 'The field is empty!',
    });
    return;
  }
  if (inputValue) {
    loader.style.display = 'block';
  }

  getImages(inputValue)
    .then(response => {
      if (response.total === 0) {
        gallery.innerHTML = '';
        throw new Error();
      }
      loader.style.display = 'none';
      return response.hits;
    })
    .then(images => {
      gallery.innerHTML = '';
      loader.style.display = 'none';
      gallery.innerHTML = creatImg(images);
      galleryImg.refresh();
    })
    .catch(() => {
      loader.style.display = 'none';
      iziToast.error({
        iconColor: '#ffffff',
        messageColor: '#ffffff',
        progressBarColor: '#ffffff',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      event.target.elements.input.value = '';
    });
}
