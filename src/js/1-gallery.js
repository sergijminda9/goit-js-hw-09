import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    small:
      'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg',
    large:
      'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg',
    alt: 'Ocean waves',
  },
  {
    small: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
    large:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    alt: 'Beautiful tree',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_640.jpg',
    large:
      'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg',
    alt: 'Mountain landscape',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_640.jpg',
    large:
      'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg',
    alt: 'Camera',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg',
    large:
      'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg',
    alt: 'Elephant in nature',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg',
    large:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
    alt: 'Alpine meadow',
  },
];

const galleryEl = document.querySelector('.gallery');

const markup = images
  .map(
    ({ small, large, alt }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${large}">
      <img
        class="gallery-image"
        src="${small}"
        alt="${alt}"
      />
    </a>
  </li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
