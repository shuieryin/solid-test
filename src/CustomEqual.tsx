import { Component } from "solid-js";
import {
	useCount,
	increaseCount,
	doubleIncreaseCount
} from "./StoreCustomEqual";
import SharedCounter from "./SharedCounter";

const CustomEqual: Component = () => {
	const count = useCount();
	return (
		<>
			<SharedCounter value={count} onIncrement={increaseCount} />
			<button onClick={doubleIncreaseCount}>+2</button>
		</>
	);
};

export default CustomEqual;
