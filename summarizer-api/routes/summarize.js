const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
require("dotenv").config();

const HF_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";

router.post("/", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: text }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error });
    }

    res.json({ summary: data[0]?.summary_text || "No summary returned" });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
console.log("Using Hugging Face token:", process.env.HF_API_KEY);

module.exports = router;
