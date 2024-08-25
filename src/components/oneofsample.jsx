import Proptypes from 'prop-types';
export const Oneofsample=(props)=>{
    const {color}=props;
    return(
        <div style={{backgroundColor:color,padding:"20px",color:"white"}}>
            <p>This component has background colour {color}</p>
        </div>
    );
}
Oneofsample.propTypes={
    color:Proptypes.oneOf(["red","bLue","green"]).isRequired
}