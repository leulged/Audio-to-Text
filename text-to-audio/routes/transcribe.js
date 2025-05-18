const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const HF_API_URL = "https://api-inference.huggingface.co/models/openai/whisper-large-v3"; // ✅ correct

// Setup multer to handle uploads
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("audio"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const audioBuffer = fs.readFileSync(req.file.path);

    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "audio/mpeg", // or "audio/wav"
      },
      body: audioBuffer,
    });

    const data = await response.json();

    fs.unlinkSync(req.file.path); // Delete temp file after request

    if (data.error) {
      return res.status(500).json({ error: data.error });
    }

    res.json({ transcription: data.text });
  } catch (error) {
    console.error("Transcription error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
