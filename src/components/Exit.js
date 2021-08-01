import React from "react";

function Exit() {
  const exitHandler = () => {
    sessionStorage.removeItem("visited");
    window.history.back();
  };
  return (
    <button className="App-button" onClick={exitHandler}>
      FORCE EXIT ⬅
    </button>
  );
}

export default Exit;
