import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name,setName] = useState("xyz")
  const [email,setEmail] = useState("xyz@gmail.com")
  const [text,setText] = useState("xyz")

  const onSubmit = (event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log(event)
  }
  return (
    <section className={`${styles.container} container`}>
      <div className={`${styles.contact_form}`}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"}></MdMessage>}
          ></Button>
          <Button
            text="VIA CALL"
            icon={<IoIosCall fontSize={"24px"}></IoIosCall>}
          ></Button>
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize={"24px"}></MdEmail>}
        ></Button>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}/>
          </div>
          <div style={{
            display:'flex',
            justifyContent: 'end'
          }}>
            <Button isOutline={false} text="SUBMIT"></Button>
          </div>
          <div>
            {`name: ${name} email: ${email} text: ${text}`}
          </div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="./images/contactImage.svg" alt="contact logo" />
      </div>

    </section>
  );
};

export default ContactForm;
