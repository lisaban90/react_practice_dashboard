export default function AmountTitleCrypto({componentTitle, amountOfCrypto}){
    return(
        <div className="amount-title-container">
            <div className="left-content">
                <h1>{componentTitle}</h1>
            </div>
            <div className="right-content-b">
                <h1>{amountOfCrypto}</h1>
                <select name="crypto">
                    <option value="btc">BTC</option>
                    <option value="eth">ETH</option>
                    <option value="bnb">BNB</option>
                </select>
            </div>
        </div>
    )
}