import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar" style={{ justifyContent: 'flex-start', paddingTop: '40px' }}>
            <div className="sidebar-top">
                <div style={{ marginBottom: '40px', paddingLeft: '10px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)', margin: 0 }}>TRINETRA</h1>
                </div>



                <div className="recent-chats-section" style={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    marginBottom: '20px',
                    marginLeft: '10px',
                    marginRight: '10px',
                    border: '1px solid #333',
                    borderRadius: '12px',
                    padding: '10px',
                    backgroundColor: '#000'
                }}>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', textTransform: 'uppercase', marginTop: 0, textAlign: 'center' }}>Recent Chats</h3>
                    {/* Placeholder for future chat history */}
                </div>

                <nav className="sidebar-nav">
                    <a href="#" className="nav-item" style={{
                        border: '1px solid #333',
                        borderRadius: '12px',
                        backgroundColor: '#000', /* Explicit black box */
                        justifyContent: 'center',
                        marginTop: 'auto', /* Push to bottom if needed, but sidebar-top contains it, so maybe just margin */
                        textAlign: 'center',
                        padding: '12px'
                    }}>
                        <span className="nav-label" style={{ fontSize: '14px', fontWeight: '500' }}>RETURN TO MAIN DASHBOARD</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
