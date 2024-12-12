import {Link} from "react-router-dom"
import DownloadImage from "./assets/download.svg"
export default function DownloadReport({textButton}){
    return(
        <div className="filter-button-and-icon">
            <Link>
            <div className="filterbutton">
                <p>{textButton}</p>
            </div>
            
            <img src={DownloadImage} alt="downloadImage" />
            
            </Link>
        </div>
    )
}