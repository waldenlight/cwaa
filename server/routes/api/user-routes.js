const router = require('express').Router();
const { User, Client } = require('../../models');

// The `/api/users` endpoint

router.get('/', async (req, res) => {
  // find all users
  // include its associated clients
  try {
    const userData = await User.findAll({
      include: [{ model: Client }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one user by its `id` value
  // be sure to include its associated Clients
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Client }],
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new user
  User.create(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a user by its `id` value
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete a user by its `id` value
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', (req, res) => {
  // create a new user
  User.findOne({ where: { username: req.body.username, password: req.body.password } })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
