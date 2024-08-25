import { useState } from 'react'
import './regform.css'
export const Regform=()=> {
    const[user,setUser]=useState(
        {
            name:"Ashwinram M",
            age:18,
            gender:"Male",
            country:"India",
            bio:"Im a developer",
            isMarried:false,
        }
    )
    const changehandler=(event)=>{
        const val=event.target.type==="checkbox"?event.target.checked:event.target.value;
        setUser({...user,[event.target.name]:val})
    }
    return (
        <div className='app'>
            <table>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Bio</td>
                    <td>{user.bio}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>{user.isMarried?"Married":"Not Married"}</td>
                </tr>
            </table>
            <form >
                <input type="text" placeholder='Enter your name' name="name" value={user.name} onChange={changehandler}/>
                <input type="number" placeholder='Enter your Age' name="age" value={user.age} onChange={changehandler}/>
                <div className='gender'>
                    <label htmlFor="male">
                        <input type="radio" name="gender" id='male' onChange={changehandler} value="Male" checked={user.gender==="Male"}/>
                        Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" name="gender" id='female' onChange={changehandler} value="Female" checked={user.gender==="Female"}/>
                        Female
                    </label>
                    <label htmlFor="transgender">
                        <input type="radio" name="gender" id="transgender" onChange={changehandler} value="Transgender" checked={user.gender==="Transgender"}/>
                        Transgender
                    </label>
                </div>
                <div className='selectdiv'>
                    <label htmlFor="country">Select Country</label>
                    <select name="country" id="country" value={user.country} onChange={changehandler}>
                        <option value="INDIA">INDIA</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="JAPAN">JAPAN</option>
                        <option value="SOUTH KOREA">SOUTH KOREA</option>
                        <option value="SWITZERLAND">SWIZERLAND</option>
                    </select>
                </div>
                <label htmlFor="ismarried">
                    <input type="checkbox" name="isMarried" id="ismarried" onChange={changehandler} checked={user.isMarried}/>
                    IsMarried
                </label>
                <textarea name="bio" id="bio" rows="5" cols="5" placeholder='Write about you' value={user.bio} onChange={changehandler}></textarea>
            </form>
        </div>
    )
}