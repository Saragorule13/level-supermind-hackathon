import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { getCityCoordinates, getZodiacSign } from "./utils/utils.js";

// getting the relationship score between two people
const fetchRelationScore = async (data) => {
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
        name: data[0].name,
        year: data[0].year,
        month: data[0].month,
        day: data[0].day,
        hour: data[0].hour,
        minute: data[0].minute,
        longitude: getCityCoordinates(city).longitude,
        latitude: getCityCoordinates(city).latitude,
        city: data[0].city,
        nation: data[0].nation,
        timezone: data[0].timezone,
        zodiac_type: getZodiacSign(month, day),
      },
      second_subject: {
        name: data[1].name,
        year: data[1].year,
        month: data[1].month,
        day: data[1].day,
        hour: data[1].hour,
        minute: data[1].minute,
        longitude: getCityCoordinates(city).longitude,
        latitude: getCityCoordinates(city).latitude,
        city: data[1].city,
        nation: data[1].nation,
        timezone: data[1].timezone,
        zodiac_type: getZodiacSign(month, day),
      },
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// getting the birth chart of a person
const fetchBirthChart = async (data) => {
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
        name: data[0].name,
        year: data[0].year,
        month: data[0].month,
        day: data[0].day,
        hour: data[0].hour,
        minute: data[0].minute,
        longitude: getCityCoordinates(city).longitude,
        latitude: getCityCoordinates(city).latitude,
        city: data[0].city,
        nation: data[0].nation,
        timezone: data[0].timezone,
        zodiac_type: getZodiacSign(month, day),
      },
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchRelationScore, fetchBirthChart };
