'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TableSchema = new Schema({
  desc: String,
  x: String,
  y: String,
  unit_height: [Schema.Integer],
  unit_width: [Schema.Integer],
  height: String,
  width: String,
  bills: [{ type:Schema.ObjectId , ref:'Bill'}],
  status: {type:String, enum:['idle','active','reserved','inactive']}
});

module.exports = mongoose.model('Table', TableSchema);