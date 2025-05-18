const express = require("express");
const app = express();
require("dotenv").config();

const transcribeRoute = require("./routes/transcribe");

app.use(express.json());
app.use("/api/transcribe", transcribeRoute);

const PORT = process.env.PORT || 3000;
console.log("Using Hugging Face token:", process.env.HF_API_KEY);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
