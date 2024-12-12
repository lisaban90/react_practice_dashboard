import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";


export default function SmsComponentBody(){
    const amountData = useLoaderData()
    return(
        
                <div className="amount-list-and-report-container">
                    <div className="amount-lists">
                        {amountData.map((data,index)=>(
                            <div key={index} className="amountListObject-list">
                                <AmountList 
                                amount= {data.contact}
                                date= {data.date}/>
                            </div>

                        ))}
                    </div>
                </div>
    )
}

export const smsLoader = async()=>{
    const response = await fetch("http://localhost:3001/SMS")
    return response.json()
}