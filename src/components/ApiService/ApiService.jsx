const URL = 'https://pixabay.com/api/';
const KEY = '25733108-a2320bdb0f7933c9befe0040d';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

function fetchImages(query, page = 1) {
    return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
      response => response.json()
    );
}

export default fetchImages;
