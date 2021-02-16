import React from 'react';

import {OrderBook} from "../order-book/order-book";
import logo from './logo.svg';
import './app.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

            <OrderBook/>
            </header>
        </div>
    );
}

export default App;
