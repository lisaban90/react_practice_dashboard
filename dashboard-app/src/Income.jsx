import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Income() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("fiat"); // Default selected button

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); // Update the selected button
    navigate(buttonName); // Navigate to the respective route
  };

  return (
    <div className="buttonsDesign">
      <button
        className={selectedButton === "fiat" ? "selected" : ""}
        onClick={() => handleButtonClick("fiat")}
      >
        Fiat Income
      </button>
      <button
        className={selectedButton === "crypto" ? "selected" : ""}
        onClick={() => handleButtonClick("crypto")}
      >
        Crypto Income
      </button>
      <button
        className={selectedButton === "totalincome" ? "selected" : ""}
        onClick={() => handleButtonClick("totalincome")}
      >
        Total Income
      </button>
    </div>
  );
}

// import { useNavigate } from "react-router-dom"

// export default function Income(){
//     const navigate = useNavigate()
//     return(
//         <div className="buttonsDesign">
//             <button onClick={()=>navigate("fiat")}>Fiat Income</button>
//             <button onClick={()=>navigate("crypto")}>Crypto Income</button>
//             <button onClick={()=>navigate("totalincome")}>Total Income</button>
//         </div>
//     )
// }