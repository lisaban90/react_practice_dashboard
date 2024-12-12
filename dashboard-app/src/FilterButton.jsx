import {Link} from "react-router-dom"
import filterIcon from "./assets/filterIcon.svg"
export default function FilterButton({filterNumber}){
    return(
        <div className="filter-button-and-icon">
            <Link>
            <div className="filterbutton">
                <p>Filter Applied : {filterNumber}</p>
            </div>
            
            <img src={filterIcon} alt="filter" />
            
            </Link>
        </div>
    )
}