const express = require("express");
const router = express.Router();
const Food = require("../model/food");
const foodsController = require("../controllers/foodController");

router.get("/",foodsController.getAllFoods);
router.post("/", foodsController.addFood);
router.get("/:id", foodsController.getByTd);
router.put("/:id", foodsController.updateFood)
router.delete("/:id", foodsController.deleteFood)
module.exports = router;
