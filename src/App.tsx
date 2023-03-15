import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./layouts/PageLayout";
import NotFoundPage from "./pages/404";
import Settings from "./pages/settings";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PageLayout />}>
						<Route index element={<NotFoundPage />} />
						<Route path="/dashboard" element={<NotFoundPage />} />
						<Route path="/projects" element={<NotFoundPage />} />
						<Route path="/Tasks" element={<NotFoundPage />} />
						<Route path="/Reporting" element={<NotFoundPage />} />
						<Route path="/Users" element={<NotFoundPage />} />
						<Route path="/Support" element={<NotFoundPage />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
