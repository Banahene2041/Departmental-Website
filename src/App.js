import React from "react"
// react routers
import { Routes, Route } from "react-router-dom"

// importing all the pages
import HomePage from "./screens/HomePage"
import AboutUs from "./screens/AboutUs"
import NotFound from "./screens/NotFound"
import Chatbot from "./screens/Chatbot"
import AssociationLeadership from "./screens/AssociationLeadershipPage"
import Chat from "./screens/Chat"
import TeslaStory from "./screens/TeslaStory"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/association' element={<AssociationLeadership />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/tesla-story' element={<TeslaStory/>} />
      </Routes>
    </div>
  )
}

export default App
