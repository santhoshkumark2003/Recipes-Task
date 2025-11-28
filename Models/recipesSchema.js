import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    ingredients: { 
        type: String, 
        required: true 
    },
    procedure: { 
        type: String, 
        required: true 
    },
});

const recipes = mongoose.model("recipes", recipesSchema);

export default recipes;