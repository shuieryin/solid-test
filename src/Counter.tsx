import { createSignal, Component } from "solid-js";

const Counter: Component = () => {
	const [count, setCount] = createSignal(0);

	const onIncrement = () => setCount(count() + 1);
	const onReset = () => setCount(0);

	return (
		<div>
			<span>Clicked: {count()} times</span>{" "}
			<button onClick={onIncrement}>+</button>{" "}
			{onReset && <button onClick={onReset}>Reset</button>}
		</div>
	);
};

export default Counter;
