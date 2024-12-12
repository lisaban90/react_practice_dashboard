export default function SmsComponentTitle({componentTitle, componentBody}){
    return(
        <div className="amount-title-container-sms">
            <div className="left-content">
                <h1>{componentTitle}</h1>
            </div>
            <div className="component-body-container">
                <p>{componentBody}</p>
            </div>
        </div>
    )
}