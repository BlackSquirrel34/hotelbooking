const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        connectio = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to database ${connectio.connection.host}`);
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
};

module.exports = connectDB;

