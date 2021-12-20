const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 🌝');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, data, (err) => {
      if (err) reject('Could not find that file 😖');
      resolve('success 👦');
    });
  });
};

readFilePro(`${__dirname}/starter/dog.txt`)
  .then((data) => {
    console.log(`Breed:${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('./dog2.txt', res.body.message);
  })
  .catch((err) => {
    console.log(err);
  });
