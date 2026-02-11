import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const ContactForm = () => {
  return (
    <section className={`${styles.container} container`}>
        <div className={`${styles.contact_form}`}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={"24px"}></MdMessage>}></Button>
          <Button text="VIA CALL" icon={<IoIosCall fontSize={"24px"}></IoIosCall>}></Button>
        </div>
        <div className={`${styles.contact_image}`}>
          <img src="" alt="" />
        </div>
    </section>
  )
}

export default ContactForm