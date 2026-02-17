import Navbar from "./components/Navbar";
import { HiOutlineMagnifyingGlass as SearchIcon } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";

import { db } from "./config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import AddAndUpdate from "./components/AddAndUpdate";

import { ToastContainer} from 'react-toastify';
import NotFoundContact from "./components/NotFoundContact";




const App = () => {

  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const filterContact = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

     

      const filteredContactList = contactList.filter((contact)=>{
        return contact.name.toLowerCase().includes(value.toLowerCase())
      })
      
       setContacts(filteredContactList)
      return filteredContactList;
    })

  }

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

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })

          setContacts(contactList)
          return contactList;
        })
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
          <input onChange={filterContact} className=" pl-10 text-white flex-grow bg-transparent border rounded-md h-[40px] border-white " type="text" placeholder="Search Contact" />
          <button className="ml-3 bg-white w-[42px] h-[42px] rounded-[50%] flex justify-center items-center cursor-pointer">
            <LuPlus onClick={onOpen} className="text-3xl"></LuPlus>
          </button>
        </div>

        {contacts.length <= 0 ? <NotFoundContact></NotFoundContact> : contacts.map((contact) => {
          return <ContactCard key={contact.id} contact={contact}></ContactCard>
        })}
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose}></AddAndUpdate>
      <ToastContainer position="bottom-center" style={{ marginBottom: "30px" }}></ToastContainer>
    </>
  )
}

export default App