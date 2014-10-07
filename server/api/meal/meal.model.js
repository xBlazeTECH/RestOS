'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var PartSchema = new Schema({ name: String, state: Boolean });
var MealSchema = new Schema({
  desc: String,
  meat: Boolean,
  parts: [PartSchema],
  status: {type:String, enum:['active','inactive']}
});

module.exports = mongoose.model('Meal', MealSchema);