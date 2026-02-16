
const Navbar = () => {
  return (
    <div className="my-4 h-[60px] bg-[white] m-4 rounded-lg flex justify-center items-center">
        <div className="flex justify-center items-center gap-1.5">
            <img className="w-[25px] h-[25px]"  src="./images/logo.png" alt="logo"/>
            <h1 className="text-[20px] font-medium">Firebase Contact App</h1>
        </div>
    </div>
  )
}

export default Navbar