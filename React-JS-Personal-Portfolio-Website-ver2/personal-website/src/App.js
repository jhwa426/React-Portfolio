import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Homescreen';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />}>
                        </Route>
                        <Route path='*' element={<div>404 Not Found</div>}>
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;