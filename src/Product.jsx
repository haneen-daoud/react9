import React from 'react'

import "./Home.css"
export default function Product(props) {
  return (
    <>
    <div className='col-md-3 text-center px-5  '>
           
           <h3>{props.title}</h3>
           <p>{props.desc}</p>
    </div>
    
    </>
  )
}
