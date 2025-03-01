const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS (Modify origin for CORS testing)
const corsOptions = {
    origin: "https://your-allowed-site.com", // Change this for CORS testing
    methods: ["GET"],
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
