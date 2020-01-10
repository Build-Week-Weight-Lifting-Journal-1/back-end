const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  update,
  findByDate,
  remove
}

function find() {
  return db('workouts')
    .select('id', 'exercise', 'muscle', 'sets', 'reps', 'weight', 'notes', 'date')
    .orderBy('id')
}

function findById(id) {
  return db('workouts')
    .where({id})
    .first()
}

function findByDate(date) {
  return db('workouts')
    .where({date})
    .first()
}

async function add(workout) {
  const [id] = await db('workouts').insert(workout, 'id')

  return findById(id)
}

function update(id, changes) {
  return db('workouts')
    .where('id', id)
    .update(changes)
    .then(() => {
      return findById(id);
    })
}

function remove(id) {
  return db('workouts').where({id}).del()
}