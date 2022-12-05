import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL WORDS
const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="uid"&equalTo="${uid}"`, {
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
const createWord = (payload) => new Promise((resolve, reject) => {
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

// UPDATE WORD
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${payload.firebaseKey}.json`, {
    method: 'PATCH',
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
const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${firebaseKey}.json`,
    {
      method: 'DETLETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getWords,
  createWord,
  updateWord,
  deleteWord
};
