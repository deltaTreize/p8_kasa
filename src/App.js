import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./components/pageHome";
import { Location } from "./components/pageLocation";
import { ErrorPage } from "./components/pageError";
import { About } from "./components/pageAbout";
import "./style/App.css";
import React from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
	return (
		<React.StrictMode>
			<Router>
				<Header/>
				<Routes>
					<Route path="/" element={<HomePage />}/>
					<Route path="/about" element={<About />}/>
					<Route path="/location/:targetId" element={<Location />}/>
					<Route path="*" element={<ErrorPage />}/>
				</Routes>
				<Footer/>
			</Router>
		</React.StrictMode>
	);
}

export default App;
