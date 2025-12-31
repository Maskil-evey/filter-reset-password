// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route for password reset action
app.get('/auth/action', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reset-password.html'));
});

// Optional: Route for home page
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Welcome</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 16px;
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                        text-align: center;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Server is Running!</h1>
                    <p>Your Firebase password reset page is ready.</p>
                    <p>To test, trigger a password reset from your app.</p>
                </div>
            </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📧 Password reset URL: http://localhost:${PORT}/auth/action`);
    console.log(`\nMake sure to update your Firebase Console action URL to:`);
    console.log(`   http://localhost:${PORT}/auth/action`);
});