import express from 'express';
import mongoose from 'mongoose';
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from '../models/Users.js';
import { verifyToken } from "./users.js";

const router = express.Router();

//Get All Recipes from MongoDB
router.get("/", async (req, res) => {
    try{
        const allRecipes = await RecipeModel.find({});
        console.log("All recipes:", allRecipes);
        res.json(allRecipes);
    } catch (err) {
        res.json(err);
        console.error(err);
    }

})

//Create New Recipe
router.post("/", verifyToken, async (req, res) => {    
    const newRecipe = new RecipeModel (req.body);
    try{
        await newRecipe.save();
        res.json({newRecipe, message: "New recipe added succesfully!"});
    }catch (err) {
        console.error(err);
    }
    
    res.redirect("/");
});

//Save Recipe
router.put("/", verifyToken, async (req, res) => {
    try {
        const recipe = await RecipeModel.findById(req.body.recipeId);
        const user = await UserModel.findById(req.body.userId);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({savedRecipes: user.savedRecipes});
    } catch (err) {
        res.json(err);
        console.error(err);
    }
})

//Remove Recipe From Saved
router.delete("/:params", async (req, res) => {
    try {
        const [userId, recipeId] = req.params.params.split('&');
        const updatedUser = await UserModel.findByIdAndUpdate(
            mongoose.Types.ObjectId(userId),
            {$pull : {savedRecipes: mongoose.Types.ObjectId(recipeId)}},
            {new: true}
        );
        res.json({savedRecipes: updatedUser.savedRecipes});
    } catch (err) {
        res.json(err);
        console.error(err);
    }
})

//Get a Recipe
router.get("/:recipeId", async (req, res) => {
    try {
        const result = await RecipeModel.findById(req.params.recipeId);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get Username by userId
router.get('/:userId', async (req, res) => {
    try {
        const user = await UserModel.findById(mongoose.Types.ObjectId(req.params.userId));
        res.json({username: user.username});
    } catch(err){
        console.error(err);
    }

})

// Get id of saved recipes
router.get("/savedRecipes/ids/:userId", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        res.status(201).json({ savedRecipes: user?.savedRecipes });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get saved recipes
router.get("/savedRecipes/:userId", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });
        console.log(savedRecipes);
        res.status(201).json({ savedRecipes });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



export {router as recipesRouter};