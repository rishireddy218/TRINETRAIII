import React from 'react';
import InputBar from './InputBar';

const ChatArea = () => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth - 260; // Subtract sidebar width
        canvas.height = window.innerHeight;

        const characters = 'TRINETRA010101ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#ff4444'; // Red text for hacker look
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth - 260;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="chat-area" style={{ position: 'relative', overflow: 'hidden' }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    opacity: 0.2,
                    pointerEvents: 'none'
                }}
            />

            <header className="chat-header" style={{ zIndex: 1 }}>
                <div className="auth-buttons" style={{ position: 'absolute', right: '20px', top: '20px' }}>
                    <button className="btn-login" style={{ marginRight: '10px' }}>Log in</button>
                    <button className="btn-signup">Sign up</button>
                </div>
            </header>

            <main className="chat-content" style={{ zIndex: 1 }}>
                <div className="greeting-container">
                    <h2 style={{ color: 'var(--text-secondary)', marginTop: '10px', fontSize: '3rem' }}>Hi, Hello</h2>
                </div>
            </main>

            <div style={{ zIndex: 1, position: 'relative', width: '100%' }}>
                <InputBar />
            </div>
        </div>
    );
};

export default ChatArea;
