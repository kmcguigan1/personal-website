import styles from "./styles/App.module.scss";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className={styles.app}>
			<Navbar />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
