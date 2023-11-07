import React from 'react'

export default function Header(props) {
  return (
    <>
      <div className=' d-flex align-items-center'>
        <section>
          <div style={{width:'50px',height:'50px',backgroundColor:'blue'}}></div>
        </section>
        <section>
        <input type="text" placeholder='Search' className='form-control ms-3' style={{width:'900px',height:'50px',backgroundColor:'light'}} onChange={(e)=>props.searchproduct(e.target.value)} />
        </section>
      </div>
    </>
  )
}
