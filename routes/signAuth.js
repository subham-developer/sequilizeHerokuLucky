const timePerMinute = require('../api/controller/timePerMinute');
const express = require('express');
// const errorWrap = require('../utils/errorWrap'); // importing check authentication.
// const checkAuthUser = require('../api/Middleware/checkAuth');

const route = express.Router();

route.post('/signIn', timePerMinute.signIn); // api to get admin logs.
module.exports = route;