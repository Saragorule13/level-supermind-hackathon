import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const LANGFLOW_API_URL = process.env.LANGFLOW_API_URL;
const APPLICATION_TOKEN = process.env.LANGFLOW_APPLICATION_TOKEN;

const langflowClient = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APPLICATION_TOKEN}`,
    };

    const response = await axios.post(
      `${LANGFLOW_API_URL}/lf/5800bf39-8644-403e-bca4-1732cdb12419/api/v1/run/d4f16cc4-fd21-44d6-8182-eb0930265937?stream=false`,
      {
        input_value: "what sign is best suited as my partner",
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
    console.log("Data pushed successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error pushing data:", error);
    return null;
  }
};

export { langflowClient };
