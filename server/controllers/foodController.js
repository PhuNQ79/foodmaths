const Food = require("../model/food");

const getAllFoods =  async (req, res, next) => {
    let foods;
    try {
        foods = await Food.find();
    } catch (error) {
        console.log(error);
    }

    if (!foods) {
        return res.status(404).json({message: "No products found"});
    }
    return res.status(200).json({foods});
}


const addFood = async (req, res, next) => {
    const {name, description, price, image} = req.body;
    let food;
    try {
        food = new Food({
            name, 
            description, 
            price,
            image
        });
        await food.save();
    } catch (error) {
        console.log(error);
    }
    if(!food) {
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(200).json({food});
}


const getByTd = async (req, res, next) => {
    const id = req.params.id;
    let food;
    try {
        food = await Food.findById(id);

    } catch (error) {
        console.log(error);
    }

    if(!food) {
        return res.status(404).json({message:"No Food found"})
    }
    return res.status(200).json({food});
}

const updateFood = async (req, res, next) => {
    const id = req.params.id;
    const {name, description, price, image} = req.body;
    let food;
    try {
        food = await Food.findByIdAndUpdate(id, {
            name, 
            description, 
            price,
            image
        })
        food = await food.save();
    } catch (error) {
        console.log(error);
    }
    if(!food) {
        return res.status(500).json({message:"Unable to update By this ID"})
    }
    return res.status(200).json({food});
}

const deleteFood = async (req, res, next) => {
    const id = req.params.id;
    let food;
    try {
        food = await Food.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }

    if(!food) {
        return res.status(500).json({message:"Unable to delete By this ID"})
    }
    return res.status(200).json({message: "Product successfully Deleted"});
}
exports.getAllFoods = getAllFoods;
exports.addFood = addFood;
exports.getByTd = getByTd;
exports.updateFood = updateFood;
exports.deleteFood = deleteFood;