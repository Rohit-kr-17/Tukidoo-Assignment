import "./App.css";
import Classroom from "./components/Classroom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App flex">
			<Navbar />
			<div className="flex-1">
				<Classroom />
			</div>
		</div>
	);
}

export default App;
