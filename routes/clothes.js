var express = require('express');
var router = express.Router();

router.get('/clothes', function (req, res) {
    res.render('clothes');
});

module.exports = router;