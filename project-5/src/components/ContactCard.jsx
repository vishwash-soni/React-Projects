import { FaRegUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { id, name, email } = contact;

  const [isOpen,setIsOpen] = useState(false);
  
    const onOpen = () => {
      setIsOpen(true);
    }
    const onClose = () => {
      setIsOpen(false);
    }

  const deleteContact = async (id) => {
    try {
      const deleteRef = doc(db, "contacts", id);
      await deleteDoc(deleteRef);

      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <><div>
      <div key={id} className="mx-3 mt-3 rounded-[12px] bg-yellow-200 flex items-center justify-between p-2">

        <div className="flex items-center gap-3">
          <FaRegUser className=" text-orange-400 text-4xl" ></FaRegUser>
          <div className="">
            <h2 className="text-2xl font-medium">{name}</h2>
            <p className="font-medium">{email}</p>
          </div>
        </div>

        <div>
          <div className="flex gap-1">
            <FaEdit onClick={onOpen} className="text-3xl cursor-pointer"></FaEdit>
            <MdDelete onClick={() => deleteContact(id)} className="text-3xl cursor-pointer text-purple-600" />
          </div>
        </div>
      </div>
    </div>
    <AddAndUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}></AddAndUpdate>
    </>
  )
}

export default ContactCard