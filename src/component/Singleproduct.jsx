import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adCart } from '../slice/cartSlice'
export default function Singleproduct(props) {

    var [val, setval] = useState({})

    var { id } = useParams()

    var dispatch = useDispatch()

    useEffect(() => {
        console.log(props.product);
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setval(res.data)
            })

    }, [props.product])

    return (
        <>
            <div className='d-flex container p-5'>
                <section className='col-6'>
                    <div className='mb-2' style={{ height: '300px' }}>
                        <img className='d-block w-100 h-100' src={val.thumbnail} />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-info'>Buy now</button>
                        <button className='btn btn-info' onClick={()=>dispatch(adCart(val))}>Add to cart</button>
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
        </>
    )
}
