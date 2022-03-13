import "./App.less";
import Counter from "./Counter";
import CounterWithEffect from "./CounterWithEffect";
import CounterWithDevTools from "./CounterWithDevTools";
import MultiStores from "./MultiStores";
import SilentMode from "./SilentMode";
import CustomEqual from "./CustomEqual";

const App = () => (
	<div class="container">
		<p class="example">
			Counter <Counter />
		</p>
		<p class="example">
			With effect <CounterWithEffect />
		</p>
		<p class="example">
			With devtools <CounterWithDevTools />
		</p>
		<p class="example">
			Multiple stores <MultiStores />
		</p>
		<p class="example">
			Silent mode <SilentMode />
		</p>
		<p class="example">
			Custom equal <CustomEqual />
		</p>
	</div>
);

export default App;
