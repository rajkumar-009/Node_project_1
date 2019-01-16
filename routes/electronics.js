var express = require('express');
var router = express.Router();

router.get('/electronics', function (req, res) {
    res.render('electronics');
});

module.exports = router;