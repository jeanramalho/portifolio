import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Background from './components/Background/Background'

function App() {
    return ( 
        <fragment>
            <Header />
            <Background />
        </fragment>
        
    )
}

export default App