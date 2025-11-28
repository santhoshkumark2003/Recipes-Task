import recipes from "../Models/recipesSchema.js";

// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new recipes(req.body);
    await newRecipe.save();
    res.status(201).json({ message: "Recipe created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create recipe" });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipes.find();
    res.status(200).json({ message: "Recipes fetched successfully", data: allRecipes });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipeId = await recipes.findById(req.params.id);       
    if (!recipeId) {
        return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe fetched successfully", data: recipeId });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipe" });
  } 
};

export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const {name, ingredients, procedure} = req.body;
    const updatedRecipe = await recipes.findByIdAndUpdate(
        { _id: recipeId },
        { name, ingredients, procedure },
        { new: true }
    );
    if (!updatedRecipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe updated successfully", data: updatedRecipe });
  } catch (error) {
    res.status(500).json({ message: "Failed to update recipe" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const deletedRecipe = await recipes.findByIdAndDelete({ _id: recipeId });
    if (!deletedRecipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }
    const allRecipes = await recipes.find({});
    res.status(200).json({ message: "Recipe deleted successfully", data: allRecipes });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete recipe" });
  }
};  