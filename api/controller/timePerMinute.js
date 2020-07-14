
const models = require('../../models');
const jwt = require('jsonwebtoken');
const CONSTANT = require('../../utils/const');
// const paginationFUNC = require('../../utils/pagination'); // importing pagination function.
const sequelize = models.sequelize;
const Sequelize = models.Sequelize;
const Op = Sequelize.Op;
const resultsData = require('./resultData');


exports.addTime = async (req, res) => {
    var currentTime = new Date();
    let minutes = (currentTime.getMinutes());
    let timeInMilliSec = currentTime.getTime() + 15 * 60 * 1000;
    // console.log(timeInMilliSec)
    // let createdTime = await models.timePerMinutes.create({ timeInMilliSec, minutes, is_active: 1 });
    let createdTime = await models.timePerMinutes.update({ timeInMilliSec, minutes }, {
        where: {
            id: 1,
        }
    });
    // console.log(createdTime)
    if (!createdTime == 1) {
        res.status(422).json({ message: "Time not added" });
    } else {
        res.status(201).json(createdTime);
    }
};

var global = {}
setInterval(() => {
    // console.log('Hi')
    var targetMinute = global.targetMinute;
    // console.log(targetMinute)
    var newCurrentTime = new Date();
    var newTime = newCurrentTime.getTime();
    var now = new Date().getTime();
    var distance = targetMinute - now;
    let timeLeft = targetMinute - now;
    // console.log((timeLeft / 60) / 1000)
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(timeLeft)
    if (targetMinute > now) {
        // console.log(resultsData.createResults())
        return minutes + ":" + seconds;
    } else {
        // console.log('Expired')
        createTimeStamp();
        getTimeStamp();
        // global.targetMinute = 1589185996732;
        // this.createTimeStamp()

        // window.location.reload();
    }
}, 1000)

createTimeStamp = async () => {
    var currentTime = new Date();
    let minutes = (currentTime.getMinutes());
    let timeInMilliSec = currentTime.getTime() + 15 * 60 * 1000;
    let createdTime = await models.timePerMinutes.update({ timeInMilliSec, minutes }, {
        where: {
            id: 1,
        }
    });
}
getTimeStamp = async () => {
    let getAdvanceMinutesInMillisec = await models.timePerMinutes.findOne({
        where: {
            id: 1
        }
    })
    global.targetMinute = getAdvanceMinutesInMillisec.timeInMilliSec
    // console.log(global.targetMinute)
    return targetMinute;
}


exports.getTime = async (req, res) => {
    var currentTime = new Date();
    var currentMinute = (currentTime.getMinutes());
    var currentSecond = (currentTime.getSeconds());
    let cureentTimeMinute = currentMinute % 60
    let currentTimeSecond = Math.floor(currentMinute / 60)

    let getAdvanceMinutesInMillisec = await models.timePerMinutes.findOne({
        where: {
            id: 1
        }
    })

    if (getAdvanceMinutesInMillisec) {
        return res.status(200).json({ getAdvanceMinutesInMillisec: getAdvanceMinutesInMillisec })
    } else {
        return res.status(400).json({ 'Message': "Found Error" })
    }
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Math.floor(((millis % 60000) / 1000));
    // return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    return minutes + ":" + seconds;
    // return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}



function pad(num) {
    return ("0" + num).slice(-2);
}

function getTimeFromDate(timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return pad(minutes) + ":" + pad(seconds)
}


exports.signIn = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    // let checkUser = await models.user.findOne({ where: { email: email, isActive: true } });
    if (email != 'lucky@gmail.com' || password != 'root') {
        return res.status(404).json({ message: 'User not found' })
    } else if(email == 'lucky@gmail.com' && password == 'root') {
        // let userDetails = await checkUser.comparePassword(password);
        let userDetails = true;
        if (userDetails === true) {
            const token = jwt.sign({
                // id: checkUser.dataValues.id,
                // mobileNumber: checkUser.dataValues.mobileNumber,
                userName: email,
                stoneLessPercent: email,
            },
            CONSTANT.secretKey, { expiresIn: CONSTANT.jwtExpirationTime });
            const decoded = jwt.verify(token, CONSTANT.secretKey);
            const createdTime = new Date(decoded.iat * 1000).toGMTString();
            const expiryTime = new Date(decoded.exp * 1000).toGMTString();
            // const createLog = await models.logger.create({
            //     userId: checkUser.dataValues.id,
            //     token: token,
            //     expiryDate: expiryTime,
            //     createdDate: createdTime
            // });
            if (token) {
                res.status(200).json({ message: "Authenticate Successfully", token: token, userData: email })
            }
        } else {
            res.status(401).json({ message: 'You entered wrong password' });
        }
    }

};





