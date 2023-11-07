import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adCart } from '../slice/cartSlice'

export default function Cart() {
    var dispatch = useDispatch()

    var cartItem = useSelector((state) => {
        console.log(state.cart.cartItem);
        return state.cart.cartItem
    })

    return (
        <>
            {
                cartItem.map((val, ind) => {
                    return (
                        <div className='d-flex container p-5'>
                            <section className='col-6'>
                                <div className='mb-2' style={{ height: '300px' }}>
                                    <img className='d-block w-100 h-100' src={val.thumbnail} />
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn btn-info'>Buy now</button>
                                    <button className='btn btn-info' onClick={() => dispatch(adCart(val))}>Add to cart</button>
                                </div>
                            </section>
                            <section className='p-5 col-6'>
                                <div style={{ height: '200px' }}>
                                    <h5>Product:-{val.title}</h5>
                                    <p>{val.description}</p>
                                    <h6>{val.price}$</h6>
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </>
    )
}
