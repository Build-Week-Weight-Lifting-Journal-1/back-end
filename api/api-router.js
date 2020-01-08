const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const exercisesRouter = require('../exercises/exercises-router');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/exercises', exercisesRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;