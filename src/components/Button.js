import React from "react";

import "../styles/button.scss";

function Button({ children, type, onClick, loading }) {
  return (
    <>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <button className="woa-button" onClick={onClick} type={type}>
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
