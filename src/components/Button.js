import React from "react";

import "../styles/button.scss";

function Button({ children, type, onClick, loading }) {
  return (
    <>
      <button
        className={"woa-button " + (loading && "disabled")}
        data-testid="button"
        onClick={onClick}
        type={type}
        disabled={loading}
      >
        {loading ? (
          <>
            <i className="loading" data-testid="loading-animation"></i> Loading
            ...
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    </>
  );
}

export default Button;
