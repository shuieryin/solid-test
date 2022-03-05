import { Component } from "solid-js";
import { increaseCount, resetCount } from "./Store";

const CounterButtons: Component = () => (
	<>
		<button onClick={increaseCount}>+</button>{" "}
		<button onClick={resetCount}>Reset</button>
	</>
);

export default CounterButtons;
