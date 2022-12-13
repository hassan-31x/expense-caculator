import React, { useContext } from 'react'
import Transaction from './Transaction.js'

import { GlobalContext } from '../context/GlobalState.js'

const TransactionList = () => {
  const { transactions }  = useContext(GlobalContext)

  return (
    <div className='my-8'>
      <h2 className='font-semibold text-lg'>History</h2>
      <div className="w-full h-[0.1rem] bg-gray-500 my-1"></div>
      <div className="my-4">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}

export default TransactionList
