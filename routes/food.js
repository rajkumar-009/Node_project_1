var express = require('express');
var router = express.Router();

router.get('/food', function (req, res) {
    res.render('food');
});

module.exports = router;