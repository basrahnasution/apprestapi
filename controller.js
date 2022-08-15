'use strict';

var respond = require('./res');
var connection = require('./koneksi');
const { response } = require('express');

exports.index = function (req,res){
    response.ok("Aplikasi REST API ku berjalan")
};