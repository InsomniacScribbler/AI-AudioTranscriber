import React, { useState } from 'react';
import axios from 'axios';

const AudioUploader = () => {
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setTranscription("");
        setError("");
    }

    const HandleUpload = async () => {
        if (!file) {
            setError("Please select an audio file to upload.");
            return;
        }
        setLoading(true);
        setError("");
        setTranscription("");
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:2222/api/transcribe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setTranscription(response.data.transcription);
        } catch (error) {
            setError("Error uploading file or transcribing audio.");
            console.error("Error uploading file:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="dark-container">
            <div className="dark-card">
                <h1 className="dark-title">
                    <span role="img" aria-label="microphone">🎤</span> Audio To Text Transcriber
                </h1>
                <p className="dark-subtitle">
                    Upload your audio file and get the transcribed text instantly.
                </p>
                <div className="dark-uploader">
                    <input
                        type="file"
                        accept="audio/*"
                        id="audio-upload"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <label htmlFor="audio-upload" className="dark-upload-label">
                        {file ? file.name : "Choose Audio File"}
                    </label>
                </div>
                <button
                    className="dark-upload-button"
                    onClick={HandleUpload}
                    disabled={loading}
                >
                    {loading ? "Transcribing..." : "Upload & Transcribe"}
                </button>
                {error && <div className="dark-error">{error}</div>}
                <div className="dark-transcription-result">
                    <h2>Transcribed Text</h2>
                    <p>
                        <i>{transcription ? transcription : "Your transcription will appear here."}</i>
                    </p>
                </div>
            </div>
            <style>{`
                .dark-container {
                    min-height: 100vh;
                    min-width: 100vw;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #18181b 0%, #23272f 100%);
                    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
                    transition: background 0.3s;
                }
                .dark-card {
                    background: rgba(30, 32, 38, 0.98);
                    border-radius: 22px;
                    box-shadow: 0 8px 40px rgba(0,0,0,0.45);
                    padding: 2.5rem 2rem 2rem 2rem;
                    max-width: 480px;
                    width: 95vw;
                    text-align: center;
                    transition: background 0.3s;
                }
                .dark-title {
                    font-size: 2.2rem;
                    font-weight: 800;
                    margin-bottom: 0.5rem;
                    color: #a5b4fc;
                    letter-spacing: 1px;
                    text-shadow: 0 2px 8px #3730a333;
                }
                .dark-subtitle {
                    color: #cbd5e1;
                    margin-bottom: 1.5rem;
                    font-size: 1.08rem;
                }
                .dark-uploader {
                    margin-bottom: 1.2rem;
                }
                .dark-upload-label {
                    display: inline-block;
                    padding: 0.8rem 1.7rem;
                    background: linear-gradient(90deg, #6366f1 0%, #818cf8 100%);
                    color: #fff;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 1.05rem;
                    transition: background 0.2s, transform 0.1s;
                    margin-bottom: 0.5rem;
                    box-shadow: 0 2px 12px rgba(99, 102, 241, 0.13);
                }
                .dark-upload-label:hover {
                    background: linear-gradient(90deg, #818cf8 0%, #6366f1 100%);
                    transform: scale(1.03);
                }
                .dark-upload-button {
                    width: 100%;
                    padding: 0.8rem 0;
                    background: linear-gradient(90deg, #3730a3 0%, #6366f1 100%);
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    font-size: 1.08rem;
                    font-weight: 700;
                    cursor: pointer;
                    margin-bottom: 1.2rem;
                    transition: background 0.2s, opacity 0.2s, transform 0.1s;
                    box-shadow: 0 2px 12px rgba(55, 48, 163, 0.13);
                    opacity: 1;
                }
                .dark-upload-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .dark-error {
                    color: #f87171;
                    background: #1e293b;
                    border-radius: 7px;
                    padding: 0.6rem;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                    border: 1px solid #f87171;
                }
                .dark-transcription-result {
                    background: #23272f;
                    border-radius: 12px;
                    padding: 1.1rem;
                    min-height: 80px;
                    margin-top: 0.5rem;
                    color: #e0e7ef;
                    font-size: 1.08rem;
                    box-shadow: 0 1px 8px rgba(51,65,85,0.09);
                    word-break: break-word;
                }
                .dark-transcription-result h2 {
                    font-size: 1.15rem;
                    color: #818cf8;
                    margin-bottom: 0.4rem;
                }
                @media (max-width: 600px) {
                    .dark-card {
                        padding: 1.2rem 0.5rem 1rem 0.5rem;
                        max-width: 99vw;
                    }
                    .dark-title {
                        font-size: 1.3rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default AudioUploader;