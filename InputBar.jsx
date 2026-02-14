import React from 'react';

const InputBar = () => {
    return (
        <div className="input-container">
            <div className="input-box">
                <input type="text" placeholder="Ask anything" className="chat-input" />
                <button className="send-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default InputBar;
