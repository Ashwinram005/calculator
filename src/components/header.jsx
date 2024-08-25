export const Header=()=>{
    let customcss='code';
    let isloggedin=false;
    const greeting=isloggedin?<p>Logged in</p>:<p>Logged out</p>
    const items=["item1","item2","item3","item4"];
    return(
        <>
        <h1 className="bt">ASHWINRAM</h1>
        <p className={customcss}> HELLO</p>
        {/* expression in jsx */}
        <p>2+3={2+3}</p>
        {/* jsx with conditional rendering */}
        {greeting}
        {/* jsx with list */}
        <ul>
            {items.map((v,i)=>(
                <li key={i}>{v}</li>
            ))}
        </ul>
        </>
    );
}