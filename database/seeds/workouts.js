
exports.seed = function(knex) {
  return knex('exercise').del()
    .then(function () {

      return knex('exercise').insert([
        {date: "01-08-2020", exercise: 'Squat', muscle: "Hamstring", sets: 4, reps: 10, weight: 200, notes: "Started at 200 and increased weight by 5 per rep"},

        {date: "01-08-2020", exercise: 'Deadlift', muscle: "Hamstring", sets: 4, reps: 10, weight: 200, notes: "Started at 200 and increased weight by 5 per rep"},

        {date: "01-08-2020", exercise: 'Bench Press', muscle: "Hamstring", sets: 4, reps: 10, weight: 200, notes: "Started at 200 and increased weight by 5 per rep"}
      ]);
    });
};


