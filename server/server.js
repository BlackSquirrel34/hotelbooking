const dotenv = require("dotenv").config();

const express = require("express")
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");

const port = process.env.PORT || 5000;

// connect to database
connectDB();

// setup middleware
app.use(express.json());

// setup routes
app.use("/api/rooms", roomRoutes)


app.listen(port, () => console.log(`listening on port ${port}`));