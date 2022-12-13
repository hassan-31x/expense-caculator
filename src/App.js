import './App.css';

import Header from './components/Header.js'
import Balance from './components/Balance.js'
import Comparison from './components/Comparison.js'
import TransactionList from './components/TransactionList.js'
import Add from './components/Add.js'

import { GlobalProvider } from './context/GlobalState.js';

function App() {
  return (
    <GlobalProvider>
      <div className="h-screen w-screen flex justify-center items-center flex-col bg-gray-100">
        <div className="w-auto h-auto flex flex-col justify-start shadow-lg py-4 px-10 rounded-xl bg-gray-50">
          <Header />
          <Balance />
          <Comparison />
          <TransactionList />
          <Add />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
