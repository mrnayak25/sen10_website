import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Assets/img/logo.png";
import homeic from "../Assets/icons/home.png";
import gamesic from "../Assets/icons/games.png";
import newsic from "../Assets/icons/news.png";
import esportsic from "../Assets/icons/esports.png";
import aboutic from "../Assets/icons/about.png";
import libraryic from "../Assets/icons/library.png";
import cart from "../Assets/icons/trolley.png"
import profile from "../Assets/icons/profile.png"
import MainContainer from './MainContainer';
import { BrowserRouter, Link } from "react-router-dom";

function NavBar() {
  const Menus = [
    { title: "Home", src: homeic , path: '/'},
    { title: "Games", src: gamesic , path: '/games'},
    { title: "News", src: newsic , path: '/news'},
    { title: "Esports ", src: esportsic , path:'/esports' },
    { title: "About", src: aboutic  , path: '/about'},
    { title: "Library", src: libraryic , path: '/library'},
  ]
  return (
   <>
   <div className="flex bg-black justify-center items-center h-screen overflow-hidden">
      <div className={`bg-[#222222] ms-4 relative duration-300 p-2 items-center rounded-lg grid justify-items-center w-17 `}>
        {/* <img
          src={control}
          className={`absolute cursor-pointer -right-4 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} alt='img'
        /> */}
        <div className="flex gap-x-4  items-center">
          <img src={logo} className={`cursor-pointer duration-500 h-20`} alt='img' />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >SEN10
          </h1> */}
        </div>
        <div className="ps-1 flex-col justify-center text-center ">

          {Menus.map((Menu, index) => (
             
            <div className='bg-[#302f2f] rounded-lg w-[100%] text-center flex justify-center ps-0.5 pe-0.5 my-2' key={index}>
              <Link to={Menu.path}>
              <div
                className={`flex-col justify-center  rounded-md text-center place-content-center cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 p-2 
              ${Menu.gap ? "mt-9" : ""} ${index === 0 && "bg-light-white" } `}>
               
                <img src={Menu.src} alt='img' className='text-center place-content-center' />
                <span className={`origin-left duration-200`}>
                  {Menu.title}
                </span>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen flex-1 px-6 py-2">
      <div className="flex justify-between rounded-lg">
       <div className='flex m-3'>
       <input type="search" id="default-search" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#302f2f] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
       <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-[#302f2f] rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#302f2f] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
     </div>
     <div className='flex text-center justify-center me-2'>
      <div className='flex text-center mx-3'>
<p className='text-white text-center m-auto'>WishList</p>
</div> 
<div className='bg-[#4d4d4d] flex rounded-lg my-2 mx-3'>
  <img src={cart} alt='...' className='h-10 m-auto p-1'/>
  <div className='bg-[#fff] rounded-full flex my-2 mx-1'>
    <h4 className='m-auto text-lg mx-2'>5</h4>
  </div>
</div>
<Link to='/signin'>
<div className='bg-[#4d4d4d] flex justify-center mx-3 my-2 rounded-lg'>
<img src={profile} alt='...'className='h-10 m-auto'/>
</div>
</Link>
     </div>
      </div>
      <div className='overflow-hidden overflow-y-auto h-[90%] p-1 pe-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-[#fff] pb-5'>

      <MainContainer/>
      </div>
    </div>
    </div>
   </>
  )
}

export default NavBar
