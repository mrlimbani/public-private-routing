import React from 'react'

const Shop = () => {
    return (
        <div>
            <h2>Debit/Credit Money</h2>
            {/* <button className='btn btn-danger mx-2' onClick={()=>{dispatch(actionCreators.debitMoney(100))}} >-</button>
            Update Balance
            <button className='btn btn-success mx-2' onClick={()=>{dispatch(actionCreators.creditMoney(100))}} >+</button>
             */}
            <button className='btn btn-danger mx-2' >-</button>
            Update Balance
            <button className='btn btn-success mx-2'>+</button>
        </div>
    )
}

export default Shop
