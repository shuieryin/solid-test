import { Component } from "solid-js";
import { createStore } from "solid-js/store";
import SharedCounter from "./SharedCounter";

const [solidState, setSolidState] = createStore({ count: 0 });

const SolidStoreCounter: Component = () => {
	const increaseCount = () => {
		setSolidState({ count: solidState.count + 1 });
	};

	const resetCount = () => {
		setSolidState({ count: 0 });
	};

	return (
		<SharedCounter
			value={() => solidState.count}
			onIncrement={increaseCount}
			onReset={resetCount}
		/>
	);
};

export default SolidStoreCounter;
