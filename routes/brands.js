const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

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
