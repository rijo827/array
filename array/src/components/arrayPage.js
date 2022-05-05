import React, { useState } from 'react'
import "../components/arrayPage.css"
  




function ArrayPage() {

    // const [array, setarray] = useState([1,2])
    const [state,setState] = useState([1,2])
    for(let i =3;i<=100;i++){
    state.push(i);
    if (state[i]===100) {
      break
    }
  }
  return (
    <div className='array'>
    <ul>
    {state.map((val)=>{
      return(
  <li><p  className='yellow' style={
           val% 6 ===0 ? {color:'coral'}   :
          (val% 3 ===0 ? {color: 'green'} : (val% 2 ===0 ? {color: 'blue'}: {color:'black'}))
         }>{val}</p> </li>
      )
    },[])}
  </ul>
      </div>

  )
}

export default ArrayPage