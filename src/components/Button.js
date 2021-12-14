import React from "react";

import "../styles/button.scss";

function Button({ children, type, onClick, loading }) {
  return (
    <>
      <button
        className={"woa-button " + (loading && "disabled")}
        onClick={onClick}
        type={type}
        disabled={loading}
      >
        {loading ? (
          <>
            <i className="loading"></i> Loading ...
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    </>
  );
}

export default Button;
