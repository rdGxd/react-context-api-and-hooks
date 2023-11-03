import P from "prop-types";
import { createContext, useContext, useReducer, useRef } from "react";
import { buildActions } from "./build-actions";
import { reducer } from "./reducer";

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return <CounterContextProvider value={[state, actions.current]}>{children}</CounterContextProvider>;
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
