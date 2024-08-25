import PropTypes from "prop-types"
export const ChildComponent=(props)=>{
    return(
        <div className="chilComponent">
            <h1>{props.children}</h1>
        </div>
    );
}
ChildComponent.prototypes={
    children:PropTypes.array
}
