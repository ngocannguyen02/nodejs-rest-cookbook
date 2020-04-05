'use strict';

var mongoose = require('mongoose'),
Recipe = mongoose.model('Recipes');

exports.list_all_recipes = function(req, res) {
  Recipe.find({}, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};


exports.create_recipe = function(req, res) {
  var new_recipe = new Recipe(req.body);
  new_recipe.save(function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.read_recipe = function(req, res) {
  Recipe.findById(req.params.title, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.update_recipe = function(req, res) {
  Recipe.findOneAndUpdate({_id:req.params.title}, req.body, {new: true}, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};
exports.delete_recipe = function(req, res) {

  Recipe.remove({
    _id: req.params.title
  }, function(err, recipe) {
    if (err)
      res.send(err);
    res.json({ message: 'Recipe successfully deleted' });
  });
};