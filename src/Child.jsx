import React from 'react'
import { useEffect,useState } from 'react'
function Child({getGreeting}) {
    const[greetvalue,setGreetValue]=useState()
useEffect(() => {
    console.log('child render')
    setGreetValue(getGreeting())
},[getGreeting])
  return (
    <div>
     <h3>{greetvalue}</h3>
    </div>
  )
}

export default Child
