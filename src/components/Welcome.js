import React from "react";

function Welcome() {
  return (
    <div>
      <h1>WELCOME 👋🏽</h1>
      {sessionStorage.setItem("visited", "yes")}
    </div>
  );
}

export default Welcome;
