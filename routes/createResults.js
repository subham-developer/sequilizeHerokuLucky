const resultData = require('../api/controller/resultData');
const express = require('express');
// const errorWrap = require('../utils/errorWrap'); // importing check authentication.
// const checkAuthUser = require('../api/Middleware/checkAuth');

const route = express.Router();

route.post('/create-result', resultData.createResults);
route.get('/get-result', resultData.getResults);  // api to get admin logs.
// route.get('/get-time', timePerMinute.getTime); 
module.exports = route;