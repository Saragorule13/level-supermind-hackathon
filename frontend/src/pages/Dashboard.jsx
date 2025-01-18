import React from 'react'
import Sidebar from '../components/DashboardComponents/DashboardSidebar'
import Header from '../components/DashboardComponents/DashboardHeader'
import DashboardHome from '../components/DashboardComponents/DashboardHome'
import ReportsAnalytics from '../components/DashboardComponents/ReportAnalysis'
import BirthChart from '../components/DashboardComponents/BirthChart'
import Horoscope from '../components/DashboardComponents/Horoscope'
import SpiritualRecommendations from '../components/DashboardComponents/Spiritual'

export default function Dashboard() {
  return (
    <div>
      <Header/>
      <DashboardHome/>
      <BirthChart/>
      <Horoscope/>
      <SpiritualRecommendations/>
      <ReportsAnalytics/>
    </div>
  )
}
