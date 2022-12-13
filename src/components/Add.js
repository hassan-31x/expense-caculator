import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'

const Add = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const { addTransaction } = useContext(GlobalContext)

    const handleSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction)
      setText('')
      setAmount('')
    }

  return (
    <div className='my-1'>
      <h2 className='font-semibold text-lg'>Add New Transaction</h2>
      <div className="w-full h-[0.1rem] bg-gray-500 my-1"></div>
      <form className='my-3' onSubmit={handleSubmit}>
        <label className='font-semibold mb-6 pl-1'>Name<br />
            <input className="w-full h-8 rounded-sm px-2 mb-2 shadow-sm" type="text" placeholder="Enter expense name.." value={text} onChange={(e) => {setText(e.target.value)}} />
        </label>
        <label className='font-semibold mb-6 pl-1'>Amount<br />
            <p className='font-normal text-sm pb-2'>(negative = expense, positive = income)</p>
            <input className="w-full h-8 rounded-sm px-2 shadow-sm" type="number" placeholder="$2.00" value={amount} onChange={(e) => {setAmount(e.target.value)}} />
        </label>
        <button className='w-full bg-purple-600 text-white font-semibold text-lg py-2 rounded-lg my-8' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Add
