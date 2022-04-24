import "./box.css"
function Box({ val, index, handelMove }) {
    return (
        <button className="box" onClick={()=>{handelMove(index)}}>{val }</button>
    )
}

export {Box}