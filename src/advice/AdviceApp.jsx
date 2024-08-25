import { useState } from 'react'
import './Advice.css'
export const AdviceApp = () => {
    const [advice,setAdvice]=useState("Please Click the Button to get an advice")
    const [count,setCount]=useState(0)
     const getAdvice=async()=>{
        const adv=await fetch("https://api.adviceslip.com/advice")
        const data=await adv.json()
        console.log(adv)
        console.log(data)  
        setAdvice(data.slip.advice)
        setCount(count+1)
    }
    return (
        <div>
            <div className='app'>
                <h1>{advice}</h1>
                <button onClick={getAdvice}>Get Advice</button>
                <p>You had read <b>{count}</b> times</p>
            </div>
        </div>
    )
}