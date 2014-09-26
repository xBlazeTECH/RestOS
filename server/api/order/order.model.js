'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  hash: Schema.Integer,
  type: [{ type:Schema.ObjectId , ref:'Choice'}],
  addons: [String],
  sides: [String],
  status: {type:String, enum:['placed','queued','active','prepared','served']}
});

module.exports = mongoose.model('Order', OrderSchema);