import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((resolve) => console.log(resolve))
      .catch((err) => console.log(`${err.name}:${err.message}`));
  };

  return (
    <div>
      <Heading />

      <div>
        <Button disabled={state.loading} onButtonClick={actions.increase}>
          Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.decrease}>
          Decrease
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.reset}>
          Reset
        </Button>
        <Button disabled={state.loading} onButtonClick={() => actions.setCounter({ counter: 10 })}>
          set 10
        </Button>
        <Button disabled={state.loading} onButtonClick={() => actions.setCounter({ counter: 100 })}>
          set 100
        </Button>
        <Button disabled={state.loading} onButtonClick={() => actions.setCounter({ counter: 100 })}>
          set 100
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          async increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async error
        </Button>
      </div>
    </div>
  );
};
