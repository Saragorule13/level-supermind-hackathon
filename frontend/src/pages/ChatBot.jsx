import React from 'react'
import ChatConsole from '../components/ChatBot/ChatConsole'
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

export default function ChatBot() {
  return (

    <div className="h-[100vh] bg-neutral-900 flex flex-col items-center justify-center relative w-full">
    <ChatConsole />
    <ShootingStars />
    <StarsBackground />
  </div>
  )
}

