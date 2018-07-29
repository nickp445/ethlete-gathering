const express = require('express');
const router = express.Router();

// @Route GET api/users/test
// @Descrp Test route
// @Access Public
router.get('/test', (req , res) => res.json({msg: 'Users Works'}));


module.exports = router;