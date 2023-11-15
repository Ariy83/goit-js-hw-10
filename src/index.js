import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
  breedSelectEl: document.querySelector('.breed-select'),
  catInfoEl: document.querySelector('.cat-info'),
  pLoaderEl: document.querySelector('.loader'),
  pErrorEl: document.querySelector('.error'),
};

window.addEventListener('DOMContentLoaded', onContentLoaded);
refs.breedSelectEl.addEventListener('change', onBreedSelectChange);

function breedSelectMarkup({ id, name }) {
  return `<option value="${id}">${name}</option>`;
}

function breedsSelect(breedsArray) {
  return breedsArray.map(breedSelectMarkup).join('');
}

function onContentLoaded() {
  refs.breedSelectEl.classList.add('is-hidden');
  refs.pLoaderEl.classList.remove('is-hidden');

  fetchBreeds()
    .then(res => {
      refs.breedSelectEl.innerHTML = breedsSelect(res);
      new SlimSelect({
        select: '#selectElement',
      });
    })
    .then(res => {
      refs.breedSelectEl.classList.remove('is-hidden');
      refs.pLoaderEl.classList.add('is-hidden');
    })
    .catch(err => {
      refs.pLoaderEl.classList.add('is-hidden');
      Report.failure('Oops! Something went wrong!', 'Try reloading the page!');
    });
}

function onBreedSelectChange(e) {
  refs.catInfoEl.classList.add('is-hidden');
  refs.pLoaderEl.classList.remove('is-hidden');

  fetchCatByBreed(e.target.value)
    .then(res => {
      refs.catInfoEl.innerHTML = catInfoMarkup(res);
    })
    .then(res => {
      refs.breedSelectEl.classList.remove('is-hidden');
      refs.pLoaderEl.classList.add('is-hidden');
    })
    .catch(err => {
      refs.pLoaderEl.classList.add('is-hidden');
      Report.failure('Oops! Something went wrong!', 'Try reloading the page!');
    });
}

function catInfoMarkup(cat) {
  const { description, name, temperament } = cat.breeds[0];
  return `<img class="img-cat" src="${cat.url}" alt="${name}" width="500px">
  <div class="cat-txt"><h2 class="title-cat">${name}</h2>
  <p>${description}</p>
  <p><span class="span">Temperament:</span> ${temperament}</p></div>`;
}
