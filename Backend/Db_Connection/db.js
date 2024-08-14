const Mongoose = require("mongoose");

async function connectDB() {
    try {
        await Mongoose.connect('mongodb://127.0.0.1:27017/CRUD-App-(MERN)', {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("Database is connected");
    } catch (err) {
        console.log("Database is not running", err);
    }
}

module.exports = connectDB;
