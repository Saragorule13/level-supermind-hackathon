import React from "react";
import Header from "../components/DashboardComponents/DashboardHeader";
import DashboardHome from "../components/DashboardComponents/DashboardHome";
import BirthChart from "../components/DashboardComponents/BirthChart";
import Horoscope from "../components/DashboardComponents/Horoscope";
import SpiritualRecommendations from "../components/DashboardComponents/Spiritual";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <DashboardHome />
      <BirthChart
        birthDetails={{ year: 2005, month: 12, day: 13, hour: 14, minute: 15 }}
      />
      <Horoscope />
      <SpiritualRecommendations />
    </div>
  );
}
