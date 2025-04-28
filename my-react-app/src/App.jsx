import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/cuerpo/:id' element={<Details></Details>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
