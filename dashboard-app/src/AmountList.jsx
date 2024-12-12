import { Link } from "react-router-dom";

export default function AmountList({amount,date}){
    return(
        <div className="amount-list-container">
            <div className="left-list-content">
                <div className="amount">
                    <h1>{amount}</h1>
                </div>
                <div className="payment-date">
                    <p>{date}</p>
                </div>
            </div>
            <div className="right-list-content">
                <Link>See details</Link>
            </div>

        </div>
    )
}