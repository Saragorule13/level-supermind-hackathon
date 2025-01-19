import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { langflowClient } from "./src/service/langFlow.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Horo Backend is running");
});

app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    console.log('Received message:', message);
    
    // Call langflow service
    const langflowResponse = await langflowClient(message);
    console.log('Langflow response:', langflowResponse);
    
    if (!langflowResponse) {
      return res.status(500).json({ error: 'Failed to get response from AI' });
    }
    
    res.json({ response: langflowResponse });
  } catch (error) {
    console.error('Detailed error in chatbot endpoint:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

app.post("/api/getHoroscope", (req, res) => {});

// Start the server
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
