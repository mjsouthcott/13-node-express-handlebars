// Import dependencies
const router = require("express").router();
const Burger = require("../models/burger");

// HTML route
router.get('/', async (req, res) => {
  const data = await Burger.selectBurgers();
  res.render('index', { burgers: data });
});

// API routes
router.get('/api/burgers', async (req, res) => {
  try {
    const burgers = await Burger.selectBurgers();
    res.status(200).json({ data: burgers });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/api/burgers', async (req, res) => {
  try {
    const burger = new Burger(req.body);
    await burger.insertBurger();
    res.status(201).json(burger);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.patch('/api/burgers/:id', async (req, res) => {
  const burger = Object.assign(burger, req.body, { id: req.params.id });
  if (!burger) return res.status(404).end();
  try {
    await burger.updateBurger();
    res.status(200).json(burger);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;