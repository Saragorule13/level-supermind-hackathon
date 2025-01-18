import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const fetchRelationScore = async () => {
  const options = {
    method: "POST",
    url: "https://astrologer.p.rapidapi.com/api/v4/relationship-score",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "astrologer.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      first_subject: {
        name: "Paul",
        year: 1994,
        month: 10,
        day: 11,
        hour: 9,
        minute: 11,
        longitude: 12.4963655,
        latitude: 41.9027835,
        city: "Roma",
        nation: "IT",
        timezone: "Europe/Rome",
        zodiac_type: "Tropic",
      },
      second_subject: {
        name: "Jane",
        year: 1990,
        month: 5,
        day: 5,
        hour: 19,
        minute: 11,
        longitude: 12.4963655,
        latitude: 41.9027835,
        city: "Roma",
        nation: "IT",
        timezone: "Europe/Rome",
        zodiac_type: "Tropic",
      },
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const fetchBirthChart = async () => {
  url = "https://astrologer.p.rapidapi.com/api/v4/birth-chart";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "astrologer.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      subject: {
        name: "Paul",
        year: 1994,
        month: 10,
        day: 11,
        hour: 9,
        minute: 11,
        longitude: 12.4963655,
        latitude: 41.9027835,
        city: "Roma",
        nation: "IT",
        timezone: "Europe/Rome",
        zodiac_type: "Tropic",
      },
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

co;

export { fetchRelationScore, fetchBirthChart };
