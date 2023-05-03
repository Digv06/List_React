import React, { Children } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

// const handleAlert = () => {
//   console.log("clicked");

//   <div className="alert alert-primary alert-dismissible fade show" role="alert">
//     You Submitted the request
//     <button
//       type="button"
//       className="btn-close"
//       data-bs-dismiss="alert"
//       aria-label="Close"
//     ></button>
//   </div>;
// };

const Button = ({ color, children, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
