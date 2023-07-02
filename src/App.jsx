
import './App.css'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import Balance from './Components/Balance'
import Transactionlist from './Components/Transactionlist'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  
  return (
    <>
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Transactionlist/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
    </>
  )
}

export default App
