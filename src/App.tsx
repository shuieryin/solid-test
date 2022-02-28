import Counter from "./Counter";
import CounterWithEffect from "./CounterWithEffect";

const App = () => (
	<>
		<p>
			Counter <Counter />
		</p>
		<p>
			With effect <CounterWithEffect />
		</p>
	</>
);

export default App;
