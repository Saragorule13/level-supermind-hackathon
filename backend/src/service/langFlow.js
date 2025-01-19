import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const LANGFLOW_API_URL = process.env.LANGFLOW_API_URL;
const APPLICATION_TOKEN = process.env.APPLICATION_TOKEN;

const langflowClient = async (userMessage) => {
  try {
    if (!LANGFLOW_API_URL || !APPLICATION_TOKEN) {
      throw new Error('Missing required environment variables');
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APPLICATION_TOKEN}`,
    };

    console.log('Sending request to LangFlow:', {
      url: LANGFLOW_API_URL,
      message: userMessage
    });

    const response = await axios.post(
      `${LANGFLOW_API_URL}`,
      {
        input_value: userMessage,
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "AstraDB-3nUiD": {},
          "ParseData-nmPhm": {},
          "ChatInput-LrwV1": {},
          "Prompt-4oQba": {},
          "GoogleGenerativeAIModel-PKrho": {},
          "ChatOutput-TFPuy": {},
        },
      },
      { headers }
    );
    
    // Extract the actual response text from the LangFlow response
    if (response.data) {
      if (typeof response.data === 'string') {
        return response.data;
      } else if (response.data.outputs) {
        return response.data.outputs;
      } else if (response.data.response) {
        return response.data.response;
      } else {
        console.error('Unexpected response structure:', response.data);
        throw new Error('Invalid response format from LangFlow');
      }
    }
    
    throw new Error('Empty response from LangFlow');
  } catch (error) {
    console.error("Detailed LangFlow error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};

export { langflowClient };
