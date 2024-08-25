import {useState} from 'react'
export const Userdetails = () => {
    const [user,setUser]=useState({
        fname:"Ashwinram",
        lname:'M',
        age:"18"
    })
    // const updateUsername=()=>{
    //    setUser({...user,name:"Ram"})
    // }
    // const updateUserAge=()=>{
    //     setUser({...user,age:19})
    // }
    // const changeName=(e)=>{
    //     // const newstate={...user}
    //     // newstate.name=e.target.value
    //     // setUser(newstate)
    //     setUser((oldstate)=>{ 
    //         return{...oldstate,name:e.target.value}
    //     })
    // }
    // const changeAge=(e)=>{
    //     setUser((oldstate)=>{
    //         return{...oldstate,age:e.target.value}
    //     })
    // }
    const changeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <h2>
                {user.fname} {user.lname},{user.age}
            </h2>
            <form>
                <input type="text" placeholder='Enter Firstname' onChange={changeHandler} name='fname' value={user.fname}/>
                <input type="text" placeholder='Enter Lastname' onChange={changeHandler} name='lname' value={user.lname}/>
                <input type="number" placeholder='Enter User Age' onChange={changeHandler} name='age' value={user.age}/>
            </form>
            {/* <h1>User Details</h1>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <button onClick={updateUsername}>Update UserName</button>
            <button onClick={updateUserAge}>Update UserAge</button> */}
        </div>
    )
}
