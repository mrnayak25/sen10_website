
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./Assets/img/logo.png"
import control from "./Assets/icons/control.png"
import homeic from "./Assets/icons/home.png"
import gamesic from "./Assets/icons/games.png"
import newsic from "./Assets/icons/news.png"
import esportsic from "./Assets/icons/esports.png"
import aboutic from "./Assets/icons/about.png"
import libraryic from './Assets/icons/library.png'


function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: homeic },
    { title: "Games", src: gamesic },
    { title: "News", src: newsic},
    { title: "Esports ", src: esportsic },
    { title: "About Us", src: aboutic },
    { title: "Library", src: libraryic },
  ];

  return (
    <div className="flex bg-black" >
      <div
        className={`bg-dark-purple me-2 relative duration-300`}
      >
        {/* <img
          src={control}
          className={`absolute cursor-pointer -right-4 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} alt='img'
        /> */}
        <div className="flex gap-x-4 pt-2 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 h-20`}alt='img'
          />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >SEN10
          </h1> */}
        </div>
        <ul className="ps-1 content-center">
          
          {Menus.map((Menu, index) => (
            <div className='bg-slate-800 rounded-lg w-3/4 text-center align-center place-content-center'>
            <li
              key={index}
              className={` rounded-md text-center place-content-center cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt='img' className='text-center place-content-center'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            </div>
          ))}
          
        </ul>
        
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default App;
