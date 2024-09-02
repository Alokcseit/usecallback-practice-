import React from 'react'
import { useState,useCallback    } from 'react'
import Child from './Child'
function Parent() {
const [name, setName] = useState('')
const[count,setCount]=useState(0)
console.log('parent render')
 const getGreeting=useCallback(()=>{
    return `Hello ${name}`
 } ,[name])
  return (
    <div>
      <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
      <Child getGreeting={getGreeting} />
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default Parent
