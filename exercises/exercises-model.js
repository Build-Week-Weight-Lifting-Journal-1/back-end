// const db = require("../database/dbConfig.js");

// module.exports = {
//   find,
//   findById,
//   add,
//   update,
//   remove
// }

// function find() {
//   return db('restaurants')
//     .select('id', 'exercise', 'muscle', 'sets', 'reps', 'weight', 'notes', 'date')
//     .orderBy('id')
// }

// function findById(id) {
//   return db('restaurants')
//     .where({id})
//     .first()
// }

// async function add(exercise) {
//   const [id] = await db('exercise').insert(exercise, 'id')

//   return findById(id)
// }

// function update(id, changes) {
//   return db('restaurants')
//     .where('id', id)
//     .update(changes)
//     .then(() => {
//       return findById(id);
//     })
// }

// function remove(id) {
//   return db('restaurants').where('id', id).del()
// }