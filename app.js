const express = require('express');
const _ = require('underscore');

const port = process.env.PORT || 8080;

const animals = {
  cat: "meow",
  dog: "bark",
  eel: "hiss",
  bear: "growl",
  frog: "croak",
  lion: "roar",
};

function getAnimal() {
  return _.sample(Object.entries(animals));
}

const app = express();

app.get('/', (req, res) => {
  const [animalName, sound] = getAnimal();
  res.status(200).send(`
    George Orwell had a farm.<br />
    E-I-E-I-O<br />
    And on his farm he had a ${animalName}.<br />
    E-I-E-I-O<br />
    With a ${sound}-${sound} here.<br />
    And a ${sound}-${sound} there.<br />
    Here a ${sound}, there a ${sound}.<br />
    Everywhere a ${sound}-${sound}.<br />
  `);
});

app.get('/api', (req, res) => {
  res.status(200).json(animals);
});

app.listen(port, () => {
  console.log(`Launching server on http://localhost:${port}`);
});

module.exports = app;
