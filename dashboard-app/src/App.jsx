import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import RootLayout from "./RootLayout.jsx"
import Income from "./Income.jsx"
import Settings from "./Settings.jsx"
import Expenses, { expenseLoader } from "./Expenses.jsx"
import Sms from "./Sms.jsx"
import Investment, { investmentLoader } from "./Investment.jsx"
import IncomeLayout from "./IncomeLayout.jsx"
import FiatIncome, { fiatLoader } from "./FiatIncome.jsx"
import CryptoIncome, { cryptoLoader } from "./CryptoIncome.jsx"
import TotalIncome, { totLoader } from "./TotalIncome.jsx"
import { smsLoader } from "./SmsComponentBody.jsx"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>

      <Route path="/" element={<IncomeLayout/>}>
        <Route index element={<FiatIncome/>} loader= {fiatLoader}/>

        <Route path="fiat" element={<FiatIncome/>} loader= {fiatLoader}/>
        <Route path="crypto" element={<CryptoIncome/>} loader={cryptoLoader}/>
        <Route path="totalincome" element={<TotalIncome/>} loader={totLoader}/>

      </Route>
        
        <Route path="expenses" element={<Expenses/>} loader={expenseLoader}/>
        <Route path="investment" element={<Investment/>} loader={investmentLoader}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="sms" element={<Sms/>} loader={smsLoader}/>
    </Route>
  ))
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )

}

export default App
