const timePerMinute = require('../api/controller/timePerMinute');
const express = require('express');
// const errorWrap = require('../utils/errorWrap'); // importing check authentication.
// const checkAuthUser = require('../api/Middleware/checkAuth');

const route = express.Router();

route.post('/create-time', timePerMinute.addTime); // api to get admin logs.
route.get('/get-time', timePerMinute.getTime); 
module.exports = route;