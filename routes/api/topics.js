const express = require('express');
const router = express.Router();
const topicsCtrl = require('../../controllers/api/topics');

router.get('/', topicsCtrl.list);

module.exports = router;