const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Brand = require('../models/Brand');

// @route   GET api/brands
// @desc    Get all brands
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const brands = await Brand.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(brands);
  } catch (err) {
    console.error(err.message);
  }
});

// @route   POST api/brands
// @desc    Add new Brand
// @access  Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    const { name, imgUrl } = req.body;

    try {
      const newBrand = new Brand({
        name,
        imgUrl,
        user: req.user.id,
      });

      const brand = await newBrand.save();
      res.json(brand);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
