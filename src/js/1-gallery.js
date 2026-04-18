import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg',
    description: 'Ocean waves',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    description: 'Beautiful tree',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg',
    description: 'Mountain landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg',
    description: 'Camera',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg',
    description: 'Elephant in nature',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
    description: 'Alpine meadow',
  },
];

const galleryEl = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
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
