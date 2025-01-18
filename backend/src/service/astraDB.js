import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// const data = {
//   id: "266c666c",
//   metadata: {
//     name: "Smit Thomas",
//     age: 69,
//     gender: "Male",
//     bod: "27-04-1998",
//     tod: "21:07:35",
//     city: "Stew",
//     state: "Wisconsin",
//     username: "user1021",
//   },
// };

const insertData = async (data) => {
  try {
    const headers = {
      Token: process.env.ASTRA_DB_TOKEN,
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      "https://abdb2d0b-cef0-4087-b778-55317eba4f3a-us-east1.apps.astra.datastax.com/api/json/v1/default_keyspace/ho",
      {
        insertOne: {
          document: {
            $vectorize: data.id,
            metadata: data.metadata,
          },
        },
      },
      { headers }
    );
    console.log("Data pushed successfully:", response.data);
  } catch (error) {
    console.error("Error pushing data:", error);
  }
};
