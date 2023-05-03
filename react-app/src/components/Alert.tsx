import React from "react";

interface Props {
  onClose: () => void;
}

const Alert = ({ onClose }: Props) => {
  return (
    <div>
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        You Submitted the request
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
