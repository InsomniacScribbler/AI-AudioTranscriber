<img width="934" height="919" alt="image" src="https://github.com/user-attachments/assets/92999893-d7d8-424f-9d7f-621bb315687b" /># 🎤 AI Audio Transcriber

Convert audio files to text in seconds using AI.  
This is a full-stack application built with **React**, **Node.js**, and powered by **OpenAI's Whisper** via API.

### 🌐 Live Demo
[https://ai-audiotranscriber-1.onrender.com](https://ai-audiotranscriber-1.onrender.com)
<img width="1299" height="831" alt="image" src="https://github.com/user-attachments/assets/820ab880-6038-47ee-8aa7-97a6a427fea1" />


---

## 🚀 Features

- 🎧 Upload `.mp3`, `.wav`, or any audio file
- 🧠 Transcribe using OpenAI's Whisper model
- ⚡ Instant transcription on the frontend
- 🛡️ Form validation, loading states, and error handling
- 📦 Deployed using Render (frontend + backend)

---

## 📸 UI Preview

> ![Preview](./screenshot.png) <!-- Replace with your actual screenshot path -->

---

## 🛠 Tech Stack

| Frontend      | Backend           | AI Service     |
|---------------|-------------------|----------------|
| React (Vite)  | Node.js + Express | OpenAI Whisper |
| Axios         | Multer (file upload) |               |
| TailwindCSS (optional) | CORS, dotenv    |               |

---

## 📁 Project Structure

```bash
ai-audio-transcriber/
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│   └── .env                 # VITE_API_URL
├── server/                  # Node.js backend
│   ├── index.js
│   └── routes/transcribe.js
│   └── .env                 # OPENAI_API_KEY
└── README.md
📦 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/ai-audio-transcriber.git
cd ai-audio-transcriber
2. Backend Setup
bash
Copy
Edit
cd server
npm install
Create .env file:
env
Copy
Edit
PORT=5000
OPENAI_API_KEY=your_openai_api_key_here
Then start the backend:

bash
Copy
Edit
node index.js
3. Frontend Setup
bash
Copy
Edit
cd ../client
npm install
Create .env file:
env
Copy
Edit
VITE_API_URL=http://localhost:5000
Start the frontend:

bash
Copy
Edit
npm run dev
🌍 Deployment
Hosted on Render
Frontend: VITE_API_URL must be set in Render Environment Variables

Backend: Requires OPENAI_API_KEY

Make sure to:

Enable build commands for both services

Serve frontend via Vite’s dist/

Allow CORS in backend

🧠 Credits
🧠 OpenAI Whisper API – Speech-to-Text model

🎨 UI inspired by modern dark-themed tools

⚙️ Built by Your Name

📜 License
This project is licensed under the MIT License.
See the LICENSE file for details.
