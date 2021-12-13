import React from "react";
import { useNavigate } from "react-router-dom";

function HowToUse() {
  let navigate = useNavigate();
  return (
    <div id="InfoPage">
      <div className="content">
        <h1>How to use page</h1>
        <br />
        <button onClick={() => navigate("/")}>Star Using!</button>
      </div>
    </div>
  );
}

export default HowToUse;
