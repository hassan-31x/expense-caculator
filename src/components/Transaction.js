import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState.js'

const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount > 0 ? '+' : '-'

  return (
    // <div className="flex items-center justify-between px-2 bg-white rounded-sm shadow-md my-3 h-10 border-r-4 border-r-red-500">
    <div className={`flex items-center justify-between px-2 bg-white rounded-sm shadow-md my-3 h-10 border-r-[5px] ${sign === '+' ? 'border-r-green-600' : 'border-r-red-500'}`}>
        <p>{transaction.text}</p>
        <p className='flex gap-2'>{sign}${Math.abs(transaction.amount)}<span className='text-red-600 cursor-pointer' onClick={() => deleteTransaction(transaction.id)}>x</span></p>
    </div>
  )
}

export default Transaction
