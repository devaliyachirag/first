import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css';
export default function Sidebar(props) {

    var [category, setcategory] = useState([])
    var [isdata, setisdata] = useState(false)

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                    setcategory(res.data);
                    setisdata(true)
            })
    }, [])

    return (
        isdata ? <section>
            <div className='text-center mb-2' onClick={() => props.changeproduct('')} style={{backgroundColor: props.allproduct == '' ? 'red' : null}}><span className='btn'>All products</span></div>
            {
                category.map((val, ind) => {
                    return <>
                        <div className='text-center mb-2' key={ind} style={{backgroundColor: props.allproduct == val ? 'red' : null}} onClick={() => props.changeproduct(val)}><span className='btn'>{val}</span></div>
                    </>
                })
            }
        </section> : <span className="loader"></span>
    )
}
