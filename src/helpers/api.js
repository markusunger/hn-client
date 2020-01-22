const API_URL = 'http://localhost:8080';
const API_URL_ORIGINAL = 'https://hacker-news.firebaseio.com/v0';
const STORY_PAGE_SIZE = 10;

export function getStories(type, offset) {
  // get next items from one of the provided lists 
  return fetch(`${API_URL}/${type}`)
    .then(data => data.json())
    .then(obj => Object.values(obj).slice(offset, offset + STORY_PAGE_SIZE + 1))
    .then(ids => getItemDetails(ids))
    .catch((error) => error);
}

export function getItemDetail(id) {
  // get all data for a specific item
  return fetch(`${API_URL}/item/${id}`)
    .then(data => data.json());
}

export function getItemDetails(ids) {
  // get all data for a collection of items
  const promises = ids.map(id => getItemDetail(id));
  return Promise.all(promises)
    .catch((error) => this.setState({ error }));
}
