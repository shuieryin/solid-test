import { createSignal, createEffect, Component } from "solid-js";

const Counter: Component = () => {
	const [count1, setCount1] = createSignal(0);
	const [count2, setCount2] = createSignal(0);

	createEffect(() => console.log("count1 =", count1()));
	createEffect(() => console.log("count2 =", count2()));
	createEffect(() => console.log("count1 + count2 =", count1() + count2()));

	const onIncrement1 = () => setCount1(count1() + 1);
	const onReset1 = () => setCount1(0);

	const onIncrement2 = () => setCount2(count2() + 1);
	const onReset2 = () => setCount2(0);

	return (
		<>
			<div>
				<span>Count 1: {count1()} times</span>{" "}
				<button onClick={onIncrement1}>+</button>{" "}
				{onReset1 && <button onClick={onReset1}>Reset</button>}
			</div>
			<div>
				<span>Count 2: {count2()} times</span>{" "}
				<button onClick={onIncrement2}>+</button>{" "}
				<button onClick={onReset2}>Reset</button>
			</div>
		</>
	);
};

export default Counter;
