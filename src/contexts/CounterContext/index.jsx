import P from "prop-types";
import { createContext, useContext, useState } from "react";

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return <CounterContextProvider value={[state, dispatch]}>{children}</CounterContextProvider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("You  have to use useCounterContext inside <CounterContextProvider>");
  }

  return [...context];
};
