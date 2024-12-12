import Avatar from "./Avatar.jsx";
import Card from "./card.jsx";

export default function Settings(){
    return(
        <div className= "settings-details" style={{ display: 'flex', gap: '20px', padding: '90px' }}>
            <Avatar initials="JS" backgroundColor="#4470cf" size={100} shape="circle" />
            <h3>First Name: John</h3>
            <h3>Last Name: Saul</h3>
            <p>Phone number: +233 204444888</p>
            <p>Email adress: john.saul@gmail.com </p>

            <Card
            cardHeading="Payment Preferences"
            cardBody= "Currency Preferences"
            />

            <Card
            cardHeading="Cards"
            cardBody= "Debit and Credit cards"
            />

            <Card
            cardHeading="Currency Preferences"
            cardBody= "Local and Foreign currencies"
            />

            <Card
            cardHeading="Backup Payment Method"
            cardBody= "Add alternative methods in case the primary one fails"
            />
        </div>
    )
}