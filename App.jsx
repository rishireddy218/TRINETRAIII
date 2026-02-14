import React from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import './index.css';

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <ChatArea />
        </div>
    );
}

export default App;
