const router = require("express").Router();

const authRequired = require("../auth/requireMiddleware")

const Workouts = require("../workouts/workouts-model");


//GETs all workouts
router.get("/", authRequired, (req, res) => {
    Workouts.find()
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => res.send(err));
  });

//Get workout by date
router.get('/:date', authRequired, (req, res) => {
  try {
    let workout = Workouts.findByDate(req.params.date);
    if (!workout) {
      res.status(404).json({message: `workout on ${req.params.id} does not exist`});
      return;
    }
    res.status(200).json(workout)
  } catch (error) {  
    console.log(error)
    res.status(500).json(error)
  }
});

//Adds new workouts by user in session.
router.post("/newworkout", authRequired, (req, res) => {
    let workout = req.body;

    Workouts.add(workout)
      .then(saved => {
        res.status(201).json({message: `workout added`});
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

//Update a workout by a user in session by id.
router.put('/update/:id', authRequired, (req, res) => {
  const id = req.params.id;
  const updatedWorkout = req.body;

  Workouts.update(id, updatedWorkout)
    .then(count => {
      if (count === 0) {
        res.status(404).json({message: 'There is no workout with that ID.'})
      } else {
        Workouts.findById(id)
          .then(workout => {
            res.status(201).json(workout)
          })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})


//Deletes a workout by ID
router.delete('/delete/:id', authRequired, (req, res) => {
  const id = req.params.id;
  
  Workouts.remove(id)
    .then(removedWorkout => {
      if (removedWorkout > 0) {
        res.status(404).json(removedWorkout)
      } else {
        res.status(200).json({message: 'workout has been deleted.'})
      }
    })
})




module.exports = router;