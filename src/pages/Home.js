import React from "react";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import bg from "../assets/img/bg.png";

export default function Home() {
  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${bg})` }}>
        <Header />
        <MainMenu />
      </div>
    </>
  );
}
