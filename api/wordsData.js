import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL WORDS
const getWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE WORD
const createWord = (payload) => new Promise ((resolve, reject) => {
  fetch(`${endpoint}/words.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE WORD

export { getWords, createWord }
