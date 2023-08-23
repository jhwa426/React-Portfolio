import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Homescreen';

const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
}

export default App;