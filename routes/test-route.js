const express = require('express');
const {testGet, testPost} = require('../controllers/test-controller');
const router = express.Router();

router.get('/test', testGet);
router.post('/test', testPost);

module.exports = router;
