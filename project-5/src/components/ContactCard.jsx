import { FaRegUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ContactCard = ({contacts}) => {
  return (
    <div>
        {
          contacts.map(({ id, name, email }) => {
            return <div key={id} className="mx-3 mt-3 rounded-[12px] bg-yellow-200 flex items-center justify-between p-2">

              <div className="flex items-center gap-3">
                <FaRegUser className=" text-orange-400 text-4xl" ></FaRegUser>
                <div className="">
                  <h2 className="text-2xl font-medium">{name}</h2>
                  <p className="font-medium">{email}</p>
                </div>
              </div>

              <div>
                <div className="flex gap-1">
                  <FaEdit className="text-3xl cursor-pointer"></FaEdit>
                  <MdDelete className="text-3xl cursor-pointer text-purple-600"></MdDelete>
                </div>
              </div>
            </div>
          })
        }
      </div>
  )
}

export default ContactCard