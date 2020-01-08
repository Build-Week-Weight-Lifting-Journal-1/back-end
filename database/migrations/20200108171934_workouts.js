exports.up = function(knex) {
    return knex.schema.createTable('workouts', tbl => {
      tbl.increments();
  
      tbl.string('date', 128).notNullable();

      tbl.string('exercise', 128).notNullable();
  
      tbl.string('muscle', 128).notNullable();
      
      tbl.string('sets', 128)
  
      tbl.string('reps', 128)
  
      tbl.string('weight', 128)
  
      tbl.string('notes', 128)
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('workouts');
  };