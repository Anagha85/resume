import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FormContainer from './FormContainer';
import './style.css';


function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <FormContainer />
        </div>
    );
}

export default App;