import Navbar from "./components/Navbar"
import { HiOutlineMagnifyingGlass as SearchIcon } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
const App = () => {
  return (
    <div className=" mx-auto max-w-[370px]">
      <Navbar></Navbar>

      <div className="relative flex px-4 items-center">
        <SearchIcon className=" ml-1 absolute text-white text-3xl"></SearchIcon>
        <input className=" pl-10 text-white flex-grow bg-transparent border rounded-md h-[40px] border-white " type="text" placeholder="Search Contact" />
        <button className="ml-3 bg-white w-[42px] h-[42px] rounded-[50%] flex justify-center items-center cursor-pointer">
          <LuPlus className="text-3xl"></LuPlus>
        </button>
      </div>
    </div>
  )
}

export default App