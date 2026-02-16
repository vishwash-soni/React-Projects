import Navbar from "./components/Navbar";
import { HiOutlineMagnifyingGlass as SearchIcon } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";

import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Model from "./components/Model";

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [isOpen,setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const getContacts = async () => {

      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        const contactList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })

        setContacts(contactList)
        console.log(contactList)

      } catch (error) {
        console.log(error)
      }

    }
    getContacts();
  }, [])


  return (
    <>
    <div className=" mx-auto max-w-[370px]">
      <Navbar></Navbar>

      <div className="relative flex px-4 items-center">
        <SearchIcon className=" ml-1 absolute text-white text-3xl"></SearchIcon>
        <input className=" pl-10 text-white flex-grow bg-transparent border rounded-md h-[40px] border-white " type="text" placeholder="Search Contact" />
        <button className="ml-3 bg-white w-[42px] h-[42px] rounded-[50%] flex justify-center items-center cursor-pointer">
          <LuPlus onClick={onOpen} className="text-3xl"></LuPlus>
        </button>
      </div>

      <ContactCard contacts={contacts}></ContactCard>
    </div>

    <Model isOpen={isOpen} onClose={onClose}>hi</Model>

    </>
  )
}

export default App