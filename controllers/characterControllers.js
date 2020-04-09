const Character = require('./../models/character');

exports.create = (req, res) => {
  if (!req.body) {
      res.status(400).send({ message: "You can't create an empty character" });
  }

  const character = new Character({
    name: req.body.name,
    height: req.body.height,
    species: req.body.species
  });

  Character.create(character, (err, data) => {
    if (err) {
        res.status(500).send({ message: err });
    }
    
    res.send(data);
  });
};

exports.retrieveAll = (req, res) => {
  Character.retrieveAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    }

    res.send(data);
  });
};

exports.retrieveCharacter = (req, res) => {
  Character.retrieveCharacter(req.params.characterId, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    }
    
    res.send(data);
  })
};