import Counter from "./Counter";
import CounterWithEffect from "./CounterWithEffect";
import CounterWithDevTools from "./CounterWithDevTools";

const App = () => (
	<>
		<p>
			Counter <Counter />
		</p>
		<p>
			With effect <CounterWithEffect />
		</p>
		<p>
			With devtools <CounterWithDevTools />
		</p>
	</>
);

export default App;
