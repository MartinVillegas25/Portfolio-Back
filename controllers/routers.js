const { response } = require('express');
 

const homeGet = (req, res = response) => {
    res.render('home');
}
const loginGet = (req, res = response) => {
    res.render('login');
}
module.exports = {
    homeGet,
    loginGet,
}