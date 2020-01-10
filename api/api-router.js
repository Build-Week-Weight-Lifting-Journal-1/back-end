const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const workoutRouter = require('../workouts/workouts-router');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/workouts', workoutRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;