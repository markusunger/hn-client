const API_URL = 'https://hacker-news.firebaseio.com/v0';

export function getStories(type, offset) {
  return fetch(`${API_URL}/${type}.json?orderBy="$key"&startAt="${offset}"&endAt="${offset + 10}"`)
    .then(data => data.json())
    .then(obj => Object.values(obj))
    .then(ids => getStoryDetails(ids))
    .catch((error) => error);
}

export function getStoryDetail(id) {
  return fetch(`${API_URL}/item/${id}.json`)
    .then(data => data.json());
}

export function getStoryDetails(ids) {
  const promises = ids.map(id => getStoryDetail(id));
  return Promise.all(promises)
    .then(stories => stories)
    .catch((error) => this.setState({ error }));
}