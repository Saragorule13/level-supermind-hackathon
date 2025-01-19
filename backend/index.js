import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { langflowClient } from "./src/service/langFlow.js";
import { insertData } from "./src/service/astraDB.js";

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
    const { message, userID } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    console.log('Received message:', message);
    
    // Call langflow service
    const langflowResponse = await langflowClient(message, userID);
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

app.post("/api/insertData", async (req, res) => {
  try {
    const { userData } = req.body;
    
    if (!userData) {
      return res.status(400).json({ error: 'User data is required' });
    }
    
    await insertData(userData);
    res.json({ success: true, message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

// Start the server
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
