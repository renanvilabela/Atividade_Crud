const express = require('express');
const router = express.Router();

const SkateController = require('./controllers/skateController');

router.get('/skates', SkateController.buscarTodos);

module.exports = router;