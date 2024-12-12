import {NavLink} from "react-router-dom"
import incomeIcon from "./assets/incomeIcon.svg"
import settingsIcon from "./assets/settingsIcon.svg"
import expensesIcon from "./assets/expensesIcon.svg"
import investmentsIcon from "./assets/investmentsIcon.svg"
import smsIcon from "./assets/smsIcon.svg"
export default function Sidebar(){
    return(
        <div className="sidebar-container">
            <div className="menu-items-container">
                <NavLink to= {"/"}>
                    <div className="menu-item">
                        <div className="icon-container">
                            <img src= {incomeIcon} alt="Income" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Income</h1>
                            <p>Click to see how much income you've made</p>
                        </div>

                    </div>
                </NavLink>
                <NavLink to={"expenses"}>
                    <div className="menu-item">
                        <div className="icon-container">
                            <img src= {expensesIcon} alt="Expenses" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Expenses</h1>
                            <p>Click to see how much you’ve spent</p>
                        </div>

                    </div>
                </NavLink>
                <NavLink to={"sms"}>
                    <div className="menu-item">
                        <div className="icon-container">
                            <img src= {smsIcon} alt="sms" />
                        </div>
                        <div className="menu-text-container">
                            <h1>SMS alerts</h1>
                            <p>Click to see your financial SMS notifications</p>
                        </div>

                    </div>
                </NavLink>
                <NavLink to={"investment"}>
                    <div className="menu-item">
                        <div className="icon-container">
                            <img src= {investmentsIcon} alt="Investments" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Investments</h1>
                            <p>Click to see how much you’ve invested</p>
                        </div>

                    </div>
                </NavLink>
                <NavLink to={"settings"}>
                    <div className="menu-item">
                        <div className="icon-container">
                            <img src= {settingsIcon} alt="settings" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Settings</h1>
                            <p>Click to change your settings</p>
                        </div>

                    </div>
                </NavLink>
                

            </div>
        </div>
    )
}