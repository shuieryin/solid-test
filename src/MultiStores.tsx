import { Component } from "solid-js";
import { useCount1, increaseCount1 } from "./MultiStore1";
import { useCount2, increaseCount2 } from "./MultiStore2";
import SharedCounter from "./SharedCounter";

const MultiStores: Component = () => {
	const count1 = useCount1();
	const count2 = useCount2();

	return (
		<div>
			Store1 <SharedCounter value={count1} onIncrement={increaseCount1} />
			Store2 <SharedCounter value={count2} onIncrement={increaseCount2} />
		</div>
	);
};

export default MultiStores;
