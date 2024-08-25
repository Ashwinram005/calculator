import { useState } from 'react';
export const Calculator = () => {
    const [result,setresult]=useState("");
    const [eqop,setEqop]=useState(false);
    const buttons=[
        {label:"C",value:"C",bt:"op"},
        {label:"DEL",value:"DEL",bt:"op"},
        {label:".",value:"."},
        {label:"/",value:"/",bt:"op"},
        {label:"7",value:7},
        {label:"8",value:8},
        {label:"9",value:9},
        {label:"*",value:"*",bt:"op"},
        {label:"4",value:4},
        {label:"5",value:5},
        {label:"6",value:6},
        {label:"+",value:"+",bt:"op"},
        {label:"1",value:1},
        {label:"2",value:2},
        {label:"3",value:3},
        {label:"-",value:"-",bt:"op"},
        {label:"0",value:0},
        {label:"00",value:"00"},
        {label:"=",value:"=",iswide:true},
    ]
    const operators=['+','-','*','/','.'];
    const handleclick=(val)=>{
        if(val==='C')
            setresult("");
        else  if (val === 'DEL') {
            if (typeof result === 'string') {
                setresult(result.slice(0, -1)); // Remove the last character
            }  
        }
        else if(val==='='){
            try{    
                setresult(String(eval(result)));
                setEqop(true);
            }
            catch{
                setresult("Error")
                setEqop(true)
            }
        }
        else {
            if(eqop){
                setresult(String(val));
                setEqop(false);
            }
            else if(operators.includes(result.slice(-1))&&operators.includes(val)){
                setresult(result.slice(0,-1)+val);
            }
            else
            setresult(result+val);
        }
    }   
    return (
        <div className='app'>
                <input type="text" className='dis' value={result} readOnly />
                <div className='buttons'>
                {buttons.map((button,index)=>(
                    <button key={index} onClick={()=>handleclick(button.value)} className={button.iswide?"wide":(button.bt==="op"?"operator":"")}>{button.label}</button>
                    )
                )  
            }
        </div>
    </div>
    )
}