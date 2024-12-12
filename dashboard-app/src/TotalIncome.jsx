import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";
import FilterButton from "./FilterButton.jsx";
import DownloadReport from "./DownloadReport.jsx";
import InputField from "./InputField.jsx";
import AmountTitleCrypto from "./AmountTitleCrypto.jsx";
import AmountTitle from "./AmountTitle.jsx";

export default function TotalIncome(){
    const amountData = useLoaderData()
    console.log(amountData);
    return(
        <div className="fiatBodyLayout_Inputfield">
            <div className="fiatBodyLayout">
                <div className="filter-and-amount-container">
                    <div className="filter-button-container">
                        <FilterButton filterNumber = {2}/>
                    </div>
                    <div className="amountTitleCrypto">
                        <AmountTitle
                        componentTitle = "Total Crypto Income" 
                        amountOfMoney = {220000}/>
                    </div>
                </div>
                <div className="amount-list-and-report-container">
                    <div className="amount-lists">
                        {amountData?.map((data,index)=>(
                            <div className="amountListObject-list" key={index}>
                                <AmountList 
                                amount= {data.amount}
                                date= {data.date}/>
                            </div>

                        ))}
                    </div>
                </div>
            
                <div className="downloadreport">
                    <DownloadReport textButton="Download Report"/>
                </div>
                
                {/* input field */}
            </div>
            <div className="inputField-contaner">
                <InputField/>
            </div>
        </div>
    )
}

export const totLoader = async()=>{
    const response = await fetch("http://localhost:3001/totincome")
    return response.json()
}