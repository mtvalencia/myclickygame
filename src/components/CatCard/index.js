import React from "react";

function CatCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Point Value:</strong> {props.ptvalue}
          </li>
          <li>
            <strong>Times Clicked:</strong> {props.timesClicked}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;

