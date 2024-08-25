import PropTypes from "prop-types"
export const Functionsample=(props)=>{
    const {handleclick}=props;
    return(
        <div>
            <p>This is function component</p>
            <button onClick={handleclick}>Click Me!</button>
        </div>
    )
}
Functionsample.propTypes={
    handleclick:PropTypes.func.isRequired,
}