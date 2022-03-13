import { Component } from "solid-js";
import { useCount, increaseCount, refreshCount } from "./StoreSilentMode";
import SharedCounter from "./SharedCounter";

const SilentMode: Component = () => {
	const count = useCount();
	return (
		<>
			<button onClick={refreshCount}>re-render</button>
			<SharedCounter value={count} onIncrement={increaseCount} />
		</>
	);
};

export default SilentMode;
