import PropTypes from "prop-types"
export const Arraysample=(props)=>{
    const {items}=props;
    return(
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((it)=>(
                        <li key={it.id}>{it.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}
Arraysample.propTypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired
        })
    ).isRequired
}