/* General Styling */
body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* Container */
.container {
    text-align: center;
}

/* Glassmorphism Card */
.card {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s ease-in-out;
    max-width: 300px;
    margin: auto;
}

/* Labels & Prices */
.price-label {
    font-weight: bold;
    margin-top: 10px;
}
.price {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 10px;
}

/* Input */
input {
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    outline: none;
}

/* Footer */
footer {
    margin-top: 15px;
    font-size: 0.9em;
}
footer a {
    color: #ffdd57;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
