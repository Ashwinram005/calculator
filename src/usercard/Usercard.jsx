import PropTypes from "prop-types";
const userdata=[
    {name:"Ashwinram M",age:"18",city:"Madurai",description:"Frontend developer",skills:["HTML","CSS","JAVASCRIPT","REACT","C++","JAVA"],online:true,profile:"images/2.jpg"},
    {name:"Rajesh",age:19,city:"Chennai",description:"Backend developer",skills:["Node js","React","MongoDb","python","java"],online:false,profile:"images/3.jpg"},
    {name:"Suresh",age:20,city:"Coimbatore",description:"Backend developer",skills:["Node js","React","MongoDb","python","java"],online:false,profile:"images/1.jpg"},
    {name:"Ramesh",age:21,city:"Erode",description:"Backend developer",skills:["Node js","React","MongoDb","python","java"],online:false,profile:"images/3.jpg"},
]
const User=(props)=>{
    return(
        <div className="card-container">
            <span className={props.online?"o online":"o offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src={props.profile} alt="user1" className="im"/>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}
const Usercard = () => {
  return (
    <div className="uc">
        {/* <User name="Ashwinram M" age=18 city="Madurai" description="Frontend developer" skills={["HTML","CSS","JAVASCRIPT","REACT","C++","JAVA"]} online={true} profile="images/2.jpg"/>    */}
        {
            userdata.map((user, index) =>(
                <User key={index} name={user.name} age={user.age} city={user.city} description={user.description} skills={user.skills} online={user.online} profile={user.profile}/>
                ) 
            )
        }
    </div>
  )
}

export default Usercard

Usercard.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired
}