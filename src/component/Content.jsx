import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { adCart } from '../slice/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Content(props) {

    const [data, setdata] = useState([])

    const navigate = useNavigate();

    var dispatch = useDispatch()

    useEffect(() => {
        if (props.allproduct == '' && props.search == '') {
            axios.get(`https://dummyjson.com/products`)
                .then((res) => {
                    // console.log(res.data.products);
                    setdata(res.data.products)
                })
        }
        else if (props.search == '' && props.allproduct != '') {
            axios.get(`https://dummyjson.com/products/category/${props.allproduct}`)
                .then((res) => {
                    // console.log(res.data.products);
                    setdata(res.data.products)
                })
        }
        else if (props.allproduct == '' && props.search != '') {
            axios.get(`https://dummyjson.com/products/search?q=${props.search}`)
                .then((res) => {
                    // console.log(res.data.products);
                    setdata(res.data.products)
                })
        }
        else {
            axios.get(`https://dummyjson.com/products/search?q=${props.search}`)
                .then((res) => {
                    // console.log(res.data.products);
                    setdata(res.data.products)
                })
        }
    }, [props.allproduct, props.search])

    var Navigate = useNavigate()

    var dispatch = useDispatch()
    var cartItem = useSelector((state) => {
        console.log(state.cart.cartItem);
        return state.cart.cartItem
    })
    return (
        <>
            <button className='btn btn-primary' onClick={() => Navigate('/cart')}>go to cart
                <span style={{ width: '20px', display: 'inline-block', backgroundColor: 'red', marginLeft: '10px' }}>{cartItem.length}</span>
            </button>
            <div className='d-flex flex-wrap mx-auto'>
                {
                    data.map((val, ind) => {
                        return <>
                            <section className='col-4 p-5' key={ind}>
                                <div className='mb-2' style={{ height: '250px' }}>
                                    <img className='d-block w-100 h-100' src={val.thumbnail} alt="" />
                                </div>
                                <div style={{ height: '200px' }}>
                                    <h5>Product:-{val.title}</h5>
                                    <p>{val.description}</p>
                                    <h6>{val.price}$</h6>
                                    {/* <h6>{val.id}$</h6> */}
                                    {/* <h6>{val.category}</h6> */}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn btn-info'>Buy now</button>
                                    <button className='btn btn-info' onClick={() => dispatch(adCart(val))}>Add to cart</button>
                                    <button className='btn btn-info' onClick={() => navigate(`/product/${val.id}`)} productid={val.id}>View</button>
                                </div>
                            </section>
                        </>
                    })
                }
            </div>
        </>
    )
}
