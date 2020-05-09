// Import dependencies
const router = require("express").Router();
const Burger = require("../models/burger");

// HTML route
router.get('/', async (req, res) => {
  const burgers = await Burger.selectAllBurgers();
  res.render('index', { burgers: burgers });
});

// API routes
router.get('/api/burgers', async (req, res) => {
  try {
    const burgers = await Burger.selectAllBurgers();
    res.status(200).json({ data: burgers });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/api/burgers', async (req, res) => {
  try {
    const burger = new Burger(req.body);
    const results = await burger.insertOneBurger();
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.patch('/api/burgers/:id', async (req, res) => {
  try {
    const results = await Burger.updateOneBurger(req.params.id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;