'use strict';

module.exports = function(app) {
	var recipe = require('../controllers/recipeController');

	// todoList Routes
	app.route('/recipes')
		.get(recipe.list_all_recipes)
		.post(recipe.create_recipe);

	app.route('/recipes/:recipeTitle')
		.get(recipe.read_recipe)
		.put(recipe.update_recipe)
		.delete(recipe.delete_recipe);
};