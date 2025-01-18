const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const LANGFLOW_API_URL = process.env.LANGFLOW_API_URL;
const APPLICATION_TOKEN = process.env.LANGFLOW_APPLICATION_TOKEN;

// const getData = async (data) => {
//   try {
//     const payload = {
//       input_value: data.message,
//       output_type: "chat",
//       input_type: "chat",
//       tweaks: {
//         "ChatInput-4wzY1": {},
//         "AstraDBToolComponent-gN1Sm": {},
//         "ParseData-K6KIc": {},
//         "Prompt-2H5ro": {},
//         "ChatOutput-baAia": {},
//         "GoogleGenerativeAIModel-aUBSi": {},
//       },
//     };

//     const response = await axios.post(LANGFLOW_API_URL, payload, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${APPLICATION_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error calling LangFlow API:", error);
//     return null;
//   }
// };
