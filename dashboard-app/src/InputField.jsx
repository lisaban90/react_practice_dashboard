import SendIcon from "./assets/send-icon.svg"
export default function InputField(){
    return(
        <div className="inputField">
            <input type="text" id="inputText" placeholder="Talk to our AI finance expert" name="inputText"></input>
            <button className="send-icon"><img src={SendIcon} alt="send" /></button>
        </div>
    )
}