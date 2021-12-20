const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/starter/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superagent.get(`https://dog.ceo/api/breed/${data}/images`).end((err, res) => {
    if (err) return console.log(err.message);
    console.log(res.body.message);
    fs.writeFile(
      './dog2.txt',
      JSON.stringify(res.body.message),
      function (err) {}
    );
  });
});
