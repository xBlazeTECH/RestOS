'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TableSchema = new Schema({
  desc: Schema.Integer,
  bills: [{ type:Schema.ObjectId , ref:'Bill'}],
  status: {type:String, enum:['idle','active','reserved','inactive']}
});

module.exports = mongoose.model('Table', TableSchema);