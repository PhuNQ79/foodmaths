const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/foodRouter")

const app = express();


// Middlewares
app.use(express.json());
app.use('/foods', router)




mongoose.connect("mongodb+srv://phu:1610@cluster0.zrwjyis.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connect to mongoDB"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err))