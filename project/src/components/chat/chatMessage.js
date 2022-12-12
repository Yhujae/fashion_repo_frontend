import styles from "./chatMessage.module.css";
import { IoIosAddCircle, IoMdAddCircleOutline, IoMdSend } from "react-icons/io";
import { GrEmoji } from "react-icons/gr";
import { BiMicrophone } from "react-icons/bi";
import { useState } from "react";
/**
 * This component returns JSX code where the user types in content into the forum.
 * React icons are used to allow for reactions and other contents.
 * TODO:
 * @param {*} props:  onMessageChange and onButtonClick handlers functions
 * @returns JSX
 */
function ChatMessage(props) {
    const [message, setMessage] = useState();
    const [updatedMessage, setUpdatedMessage]= useState(message);

    function handleChange(event){
        setMessage(event.target.value);
    }
    
  return (
    <div className={styles.container}>
      <div className={styles.messageBox}>
        <input
          type="text"
          className={styles.message}
          placeholder="Message"
          onChange={props.onMessageChange}
        />
      </div>
      <div>
        <button className={styles.btn}>
          <i>
            <IoIosAddCircle />
          </i>
        </button>
        <button className={styles.btn} onClick={props.onButtonClick}>
          <i>
            <IoMdSend />
          </i>
        </button>
        <button className={styles.btn}>
          <i>
            <GrEmoji />
          </i>
        </button>
        <button className={styles.btn}>
          <i>
            <div className={styles.textIcon}>@</div>
          </i>
        </button>
        <button className={styles.btn}>
          <i>
            <div className={styles.textIcon}>Aa</div>
          </i>
        </button>
        <button className={styles.btn}>
          <i>
            <BiMicrophone />
          </i>
        </button>
      </div>
    </div>
  );
}
export default ChatMessage;
