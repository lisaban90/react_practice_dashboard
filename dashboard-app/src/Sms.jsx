import SmsComponentBody from "./SmsComponentBody.jsx";
import SmsComponentTitle from "./SmsComponentTitle.jsx";

export default function Sms(){
    return(
        <div>
            <SmsComponentTitle 
            componentTitle= "SMS Conversations"
            componentBody= "You can create, forward, delete SMS messages and delete contacts here." />
            <SmsComponentBody/>
        </div>
    )
}