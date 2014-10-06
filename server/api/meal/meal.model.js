'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MealSchema = new Schema({
  desc: String,
  meat: Boolean,
  addons: [String],
  sides: [String],
  status: {type:String, enum:['active','inactive']}
});

module.exports = mongoose.model('Meal', MealSchema);