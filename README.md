# 🎤 AI Audio Transcriber

Convert audio files to text in seconds using AI.  
This is a full-stack application built with **React** and **Java Spring Boot**, powered by **OpenAI's Whisper** model via **Spring AI**.

---

## 🌐 Live Demo

[🔗 Try it Live](https://ai-audiotranscriber-1.onrender.com)

![UI Screenshot]() <img width="1299" height="831" alt="image" src="https://github.com/user-attachments/assets/1c4829c3-108f-4baa-b2f1-4786d22a6b4d" />

---

## 🚀 Features

- 🎧 Upload `.mp3`, `.wav`, or other audio formats
- 🧠 Transcription powered by OpenAI Whisper via Spring AI
- ⚡ Instant results with smooth frontend experience
- 🛡️ Robust error handling and loading states
- ☁️ Deployed with Render (frontend + backend)

---

## 🛠 Tech Stack

| Frontend            | Backend                          | AI Service     |
|---------------------|----------------------------------|----------------|
| React (Vite)        | Java Spring Boot (Spring Web)    | OpenAI Whisper |
| Axios               | Spring AI + Multipart File Upload|                |
| CSS Modules / SCSS  | Spring Web, CORS, dotenv support |                |

---

## 📁 Project Structure
```
ai-audio-transcriber/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ └── components/
│ │ └── AudioUploader.jsx
│ └── .env # VITE_API_URL
├── server/ # Spring Boot backend
│ ├── src/main/java/com/...
│ │ └── controller/AudioController.java
│ │ └── service/WhisperService.java
│ ├── src/main/resources/
│ │ └── application.properties # OpenAI config
│ └── pom.xml
└── README.md
```

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-audio-transcriber.git
cd ai-audio-transcriber
```
2. Backend (Spring Boot)
Prerequisites:

JDK 17+

Maven or IDE like IntelliJ

### Configure application.properties:
```
properties

server.port=5000
spring.ai.openai.api-key=your_openai_api_key
spring.ai.openai.model.whisper=model-name-if-needed
```
Start Backend:
```bash

./mvnw spring-boot:run
```
3. Frontend (React)
```bash

cd client
npm install
```

### Create .env file:

``` 
.env

VITE_API_URL=http://localhost:5000
```
Start frontend:
```bash
npm run dev
```
## 🌍 Deployment
### Deployed on Render:

Frontend (Vite): Set `VITE_API_URL` in Render environment variables

Backend (Spring Boot): Provide `spring.ai.openai.api-key` in environment

✔️ Enable CORS in your Spring Boot backend
✔️ Set correct MIME types and headers for file upload

## 📸 UI Preview


🧠 Credits
💡 OpenAI Whisper API

⚙️ Built using Spring AI + React Vite

🎨 Dark-themed UI inspired by modern design systems

