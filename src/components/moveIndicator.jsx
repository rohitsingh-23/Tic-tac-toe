import './moveIndicator.css'

function MoveIndicator({ currentPlayer }) {
    return (
      <div className="moveIndicatorDiv">
        <div id={currentPlayer ? "currentPlayer" : null}>Player X</div>
        <div id={currentPlayer ? null : "currentPlayer"}>Player O</div>
      </div>
    );
}

export {MoveIndicator}