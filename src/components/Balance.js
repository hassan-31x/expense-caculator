import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState.js'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <div>
      <h2 className='font-semibold text-lg'>Your balance</h2>
      <p className='font-semibold text-2xl'>${total}</p>
    </div>
  )
}

export default Balance
