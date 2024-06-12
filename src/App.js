import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}

export default App;
