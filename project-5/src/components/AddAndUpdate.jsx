import { addDoc, collection } from "firebase/firestore"
import Model from "./Model"
import { Field, Form, Formik } from "formik"
import { db } from "../config/firebase"

const AddAndUpdate = ({ isOpen, onClose }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Model isOpen={isOpen} onClose={onClose}>
                <Formik initialValues={{
                    name: "",
                    email: "",
                }} onSubmit={(values) => {
                    console.log(values);
                    addContact(values);
                }}>
                    <Form className="flex flex-col">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="border h-10 pl-3" ></Field>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" className="border h-10 pl-3" ></Field>
                        </div>

                        <button className="border mt-[50px] p-2 font-medium bg-yellow-500 rounded-[10px] self-end cursor-pointer">Add Contact</button>
                    </Form>
                </Formik>
            </Model>
        </div>
    )
}

export default AddAndUpdate