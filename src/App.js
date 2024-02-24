
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./Assets/img/logo.png"
import homeic from "./Assets/icons/home.png"
import gamesic from "./Assets/icons/games.png"
import newsic from "./Assets/icons/news.png"
import esportsic from "./Assets/icons/esports.png"
import aboutic from "./Assets/icons/about.png"
import libraryic from './Assets/icons/library.png'
import MainContainer from './components/MainContainer';

import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./Assets/img/logo.png";
import control from "./Assets/icons/control.png";
import homeic from "./Assets/icons/home.png";
import gamesic from "./Assets/icons/games.png";
import newsic from "./Assets/icons/news.png";
import esportsic from "./Assets/icons/esports.png";
import aboutic from "./Assets/icons/about.png";
import libraryic from "./Assets/icons/library.png";
import search from "./Assets/icons/Search.png";

function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: homeic },
    { title: "Games", src: gamesic },
    { title: "News", src: newsic },
    { title: "Esports ", src: esportsic },
    { title: "About Us", src: aboutic },
    { title: "Library", src: libraryic },
  ];

  return (
    <div className="flex bg-black justify-center items-center h-screen">
      <div className={`bg-[#222222] me-2 relative duration-300 m-10 items-center rounded-lg grid justify-items-center`}>
        {/* <img
          src={control}
          className={`absolute cursor-pointer -right-4 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} alt='img'
        /> */}
        <div className="flex gap-x-4 pt-2 items-center">
          <img src={logo} className={`cursor-pointer duration-500 h-20`} alt='img' />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >SEN10
          </h1> */}
        </div>
        <div className="ps-1 flex-col justify-between">

          {Menus.map((Menu, index) => (
            <div className='bg-[#302f2f] rounded-m w-3/4 text-center ' key={index}>
              <div
                className={` rounded-md text-center place-content-center cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 p-2 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                  } `}
              >
                <img src={Menu.src} alt='img' className='text-center place-content-center' />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
      <div className="h-screen flex-1 p-7">
        <h1>Home</h1>
        <MainContainer/>
      <div className="h-screen flex-1  ">
        <main className="flex-1 p-7">
          <header className="container mx-auto px-4 py-8 flex justify-between items-center">
            <div className="flex items-center bg-[#222222] rounded-sm flex-center w-64 h-10 p-1">
              <img src={search} alt="0" className="w-6 mr-4" />
              <p className="text-3x font-bold text-white text-center">Search</p>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-gray-400 hover:text-gray-200 mr-4 underline-none">
                WishList
              </a>
              <a href="#" className=" text-gray-400 hover:text-gray-200 underline-none">
                <div className='flex items-center bg-[#222222] p-2 m-2 rounded-sm'>
                  <p className="text-white mr-1">Cart</p>
                  <p className='bg-[#ffffff] text-black p-1 rounded-sm'>9</p>
                </div>
              </a>
            </div>
          </header>
        </main>

      </div>


    </div>
    </div>
  );
};

export default App;
