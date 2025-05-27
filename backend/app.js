const express = require('express');
const app = express();

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const database = require("./config/database");

// importing routes
const userRoutes = require("./routes/user.routes");


dotenv.config();
database.connect();
const PORT = process.env.PORT || 4000;

// setting up middlewares
app.use(express.json());
app.use(cookieParser());



app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// routes
app.use("/api/", userRoutes);

// default route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "YOUR SMARTSKY SERVER IS UP AND RUNNING"
    });
})


app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})