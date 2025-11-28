import express from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe} from '../Controllers/recipesController.js';

const router = express.Router();

router.post('/create', createRecipe);
router.get('/all',getAllRecipes);
router.get('/:id',getRecipeById);
router.put('/update/:id',updateRecipe);
router.delete('/delete/:id',deleteRecipe);

export default router;