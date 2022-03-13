import Counter from "./Counter";
import CounterWithEffect from "./CounterWithEffect";
import CounterWithDevTools from "./CounterWithDevTools";
import MultiStores from "./MultiStores";

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
		<p>
			Multiple stores <MultiStores />
		</p>
	</>
);

export default App;
