import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Content from '../component/Content'
import Singleproduct from '../component/Singleproduct'
export default function Products() {


  var [allproduct, setallproduct] = useState('')
  var [search, setsearch] = useState('')
  var [product, setproduct] = useState('')
  var [cart, setcart] = useState([])

  function changeproduct(category) {
    setallproduct(category)
  }

  function searchproduct(value) {
    setsearch(value)
  }

  function viewproduct(val) {
    setproduct(val)
    // console.log(val);
  }

  function adCart(val){
    setcart(val)
  }


  return (
    <>

      <section className='d-flex justify-content-center p-3'>
        <Header searchproduct={searchproduct}></Header>
      </section>
      <section className='row'>
        <div className='col-2 p-0 bg-warning'>
          <Sidebar changeproduct={changeproduct} allproduct={allproduct}></Sidebar>
        </div>
        <div className='col-10'>
          {
            product == '' ? <Content allproduct={allproduct} search={search} ></Content> : 
            <Singleproduct product={product} cart={cart} ></Singleproduct>
          }
        </div>
      </section>
    </>
  )
}
