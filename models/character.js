// The character constructor
function Character(character) {
    this.name = character.name;
    this.height = character.height;
    this.species = character.species;
}

Character.create = (newCharacter, result) => {
    db.query('INSERT INTO characters SET ?', newCharacter, (err, res) => {
        if (err) {
            result(err);
            return;
        }

        result({ id: res.insertId, ...newCharacter })
    })
};

Character.retrieveAll = result => {
    db.query("SELECT * FROM characters", (err, res) => {
        if (err) {
            result(err);
            return;
        }

        result(res);
    })
};

Character.retrieveCharacter = (characterId, result) => {
    db.query(`SELECT * FROM characters WHERE id = ${characterId}`, (err, res) => {
        if (err) {
            result(err);
            return;
        }

        if(res.length) {
            result(res);
            return;
        }

        result({ response: "Character not found!" });
    })
};

module.exports = Character;