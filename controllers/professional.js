// const mongodb = require('../db/connect');
const { getProfessional } = require('../models/professional');

const getData = async (req, res, next) => {
    // const result = await mongodb.getDb().db().collection('user').find();
    // result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.status(200).json(getProfessional()); // we just need the first one (the only one)
    // });
};

module.exports = { getData };