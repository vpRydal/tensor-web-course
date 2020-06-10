import React from 'react';
import './App.css';
import Main from "./App/Components/Main";
import Header from "./App/Components/Header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
