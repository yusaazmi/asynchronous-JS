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

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/starter/dog.txt`);
    console.log(`Breed:${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images`
    );
    console.log(res.body.message);

    await writeFilePro('./dog2.txt', res.body.message);
    console.log('Random dog image save to file!');
  } catch (err) {
    console.log(err);
  }
};

getDogPic();

// readFilePro(`${__dirname}/starter/dog.txt`)
//   .then((data) => {
//     console.log(`Breed:${data}`);

//     return superagent.get(`https://dog.ceo/api/breed/${data}/images`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro('./dog2.txt', res.body.message);
//   })
//   .then(()=>{
//     console.log('Random dog image save to file!');
//   });
//   .catch((err) => {
//     console.log(err);
//   });
