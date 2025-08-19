# Audio to Text & Summarizer API

This repository contains JavaScript projects that use AI models to **convert audio to text** and **summarize text**. The projects leverage Hugging Face API for fast and accurate AI-powered processing.

## Features

### 1. Audio to Text
- Convert audio files (speech) into written text.  
- Supports multiple audio formats.  
- Powered by Hugging Face speech-to-text models.  

### 2. Text Summarizer
- Generate concise summaries from long text.  
- Ideal for meeting notes, lectures, or large documents.  
- Uses Hugging Face text summarization models.  

### 3. Text to Audio
- (Optional) Convert written text back into speech.  
- Useful for listening to summaries or notes.

## Project Structure
- `summarizer-api/` – API integration for audio-to-text conversion and text summarization.  
- `text-to-audio/` – Converts text back into audio.  
- `.gitignore` – Excludes sensitive files such as `.env`.  

## Requirements
- Node.js v16 or higher  
- npm or yarn  
- Hugging Face API key  

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/leulged/Audio-to-Text.git
   cd Audio-to-Text
````

2. Install dependencies:

   ```bash
   npm install
   ```
3. Add your Hugging Face API key in a `.env` file:

   ```
   HUGGINGFACE_API_KEY=your_api_key_here
   ```

## Usage

### Run Audio to Text

```bash
node summarizer-api/audio-to-text.js path/to/audio/file
```

### Summarize Text

```bash
node summarizer-api/summarize.js path/to/text/file
```

### Convert Text to Audio

```bash
node text-to-audio/index.js "Your text here"
```

## Author

**Leulged** – JavaScript developer exploring AI-powered audio and text processing with Hugging Face API.

## Contributing

Contributions are welcome! You can:

* Add support for more audio formats.
* Improve summarization accuracy.
* Enhance API integration and error handling.

## License

This repository is for educational purposes and personal use.

