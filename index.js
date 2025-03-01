const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: "https://mango-cliff-09465fc00.6.azurestaticapps.net", 
    methods: ["GET"],
    allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));

// API to roll a dice
app.get("/roll/:sides", (req, res) => {
    const sides = parseInt(req.params.sides);
    if (!sides || sides < 1) {
        return res.status(400).json({ error: "Invalid number of sides" });
    }
    const roll = Math.floor(Math.random() * sides) + 1;
    res.json({ roll });
});

// Default route
app.get("/", (req, res) => {
    res.send("Dice Roller API is running.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
