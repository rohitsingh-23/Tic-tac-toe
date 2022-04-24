import "./winnerBox.css"

function Winnerbox({ winner }) {
    return <div className="winnerBoxContainer">
        
        <h1 className="winnerName">{ winner } Wins</h1>
    </div>
}
export {Winnerbox}