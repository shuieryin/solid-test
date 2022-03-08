import { Component } from "solid-js";
import { increaseCount, resetCount, useCount } from "./StoreWithDevtools";

const CounterWithDevTools: Component = () => {
	const count = useCount();

	return (
		<div>
			<span>Clicked: {count()} times</span>{" "}
			<button onClick={increaseCount}>+</button>{" "}
			<button onClick={resetCount}>Reset</button>
		</div>
	);
};

export default CounterWithDevTools;
