import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'

const Comparison = () => {
  const { transactions }  = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className='w-96 h-24 bg-white shadow-xl flex rounded-lg items-center mt-4'>
      <div className="flex-1 w-full flex flex-col justify-center h-[70%] items-center border-r-2">
        <h2 className='font-semibold text-center'>INCOME</h2>
        <p className='text-green-500 font-semibold text-lg text-center'>+${income}</p>
      </div>
      <div className="flex-1 w-full flex flex-col justify-center h-[70%] items-center">
        <h2 className='font-semibold text-center'>EXPENSE</h2>
        <p className='text-red-700 font-semibold text-lg text-center'>-${expense}</p>
      </div>
    </div>
  )
}

export default Comparison
