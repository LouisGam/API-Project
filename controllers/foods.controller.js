import query from "../db/utils";

async function findOne(id) {
    return await query('SELECT * FROM macroinfo WHERE id = ?;', [id]);

};

async function findAll() {
    return await query('SELECT * FROM macroinfo;');
};

async function addOne(proteinsource) {
    return await query('INSERT INTO macroinfo (id, name, protein, carbohydrates, portion_size) VALUES(?, ?, ?, ?, ?)', [proteinsource.id, proteinsource.name, proteinsource.protein, proteinsource.carbohydrates, proteinsource.portion_size ] )
};

async function updateOne(id, food) {
    return await query('UPDATE macroinfo SET ? WHERE id = ?', [food, id]);
};

async function removeOne(id) {
    return await query('DELETE FROM macroinfo WHERE id = ?', [id]);

};

//Export the entire module as the default export
export  {
    findOne,
    findAll,
    addOne,
    updateOne,
    removeOne,
};