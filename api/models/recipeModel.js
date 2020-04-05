'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  title: {
    type: String,
    Required: 'Title of the recipe'
  },
  descriptions: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  ingredients: [{
      name: String,
      quantity: String
  }]
});


module.exports = mongoose.model('Recipes', RecipeSchema);