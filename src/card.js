import React from "react";

function Card(props) {
  let asd = 1;

  return (
    <>
      <div class="container mt-4">
        <div class="row">
          <div class="">
            <img src={props.folder.icon}></img>

            {props.folder.name}
          </div>
          {/* props.folder.ext */}
        </div>
      </div>
    </>
  );
}

export default Card;
