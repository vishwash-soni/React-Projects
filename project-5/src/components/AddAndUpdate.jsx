import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import Model from "./Model"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { db } from "../config/firebase"
import { toast } from "react-toastify"
import * as Yup from "Yup"

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
})

const AddAndUpdate = ({contact,isUpdate, isOpen, onClose }) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact)
            toast.success("Contact Added Successfully")
            onClose()
        } catch (error) {
            console.log(error)
        }
    }


    const updateContact = async (values,contact) => {
        console.log(contact)
        try {
            const contactRef = doc(db, "contacts",contact.id);
            await updateDoc(contactRef, values)
            toast.success("Contact Updated Successfully")
            onClose()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Model isOpen={isOpen} onClose={onClose}>
                <Formik 
                validationSchema={contactSchemaValidation}
                initialValues={isUpdate?{
                    name: contact.name,
                    email: contact.email,
                }:{
                    name: "",
                    email: "",
                }} onSubmit={(values) => {
                    console.log(values);
                    isUpdate ? updateContact(values,contact) : addContact(values);
                }}>
                    <Form className="flex flex-col">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="border h-10 pl-3" ></Field>
                            <div className="text-red-600 text-xs">
                                <ErrorMessage name="name"></ErrorMessage>
                            </div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" className="border h-10 pl-3" ></Field>
                            <div className="text-red-600 text-xs">
                                <ErrorMessage name="email"></ErrorMessage>
                            </div>
                        </div>

                        <button type="submit" className="border mt-[50px] p-2 font-medium bg-yellow-500 rounded-[10px] self-end cursor-pointer">{isUpdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Model>
        </div>
    )
}

export default AddAndUpdate