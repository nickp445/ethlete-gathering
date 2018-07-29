const express = require('express');
const router = express.Router();

// @Route GET api/posts/test
// @Descrp Test route
// @Access Public
router.get('/test', (req , res) => res.json({msg: 'Posts Works'}));

module.exports = router;