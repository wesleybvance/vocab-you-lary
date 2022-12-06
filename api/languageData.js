import client from '../utils/client';

const endpoint = client.databaseURL;

// GET LANGUAGES BY UID
const getLanguages = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
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

// GET SINGLE LANGUAGE
const getOneLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language/${firebaseKey}.json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET WORDS BY LANGUAGE
const getWordsByLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="language_id"&equalTo="${firebaseKey}"`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export { getWordsByLanguage, getLanguages, getOneLanguage };
