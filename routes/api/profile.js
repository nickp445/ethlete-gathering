const express = require('express');
const router = express.Router();

// @Route GET api/profile/test
// @Descrp Test route
// @Access Public
router.get('/test', (req , res) => res.json({msg: 'Profile Works'}));


module.exports = router;