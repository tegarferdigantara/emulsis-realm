import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Classes from "./components/Classes";
import Guilds from "./components/Guilds";
import News from "./components/News";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ServerInfo from "./components/ServerInfo";
import TopUp from "./components/TopUp";
import ItemMall from "./components/ItemMall";
import ExchangeMall from "./components/ExchangeMall";
import Download from "./components/Download";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Classes />
                <Guilds />
                <News />
                <Footer />
              </>
            }
          />
          <Route path="/server" element={<ServerInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/mall" element={<ItemMall />} />
          <Route path="/exchange" element={<ExchangeMall />} />
          <Route path="/download" element={<Download />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
