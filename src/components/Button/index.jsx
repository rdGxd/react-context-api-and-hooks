import P from "prop-types";

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
};

export const Button = ({ children, onButtonClick }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};
