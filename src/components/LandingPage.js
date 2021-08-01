import React from "react";
import Welcome from "./Welcome";
import WelcomeBack from "./WelcomeBack";
import Exit from "./Exit";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <b>VISITOR.12</b>
        {sessionStorage.getItem("visited") && <Exit />}
      </header>
      <main className="App-body">
        {!sessionStorage.getItem("visited") && <Welcome />}
        {sessionStorage.getItem("visited") && <WelcomeBack />}
      </main>
      <footer className="App-footer">
        [ SHRUTI-04011604420 ]
        <br />
        Team Shraw
      </footer>
    </div>
  );
}

export default LandingPage;
