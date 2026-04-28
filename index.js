const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// --- 24/7 Keep-Alive Web Server ---
app.get('/', (req, res) => res.send('Minecraft AFK Bot with Movement & Chat is Running!'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Web server running on port ${port}`));

// --- Bot Settings ---
const server_ip = 'YOUR_SERVER_IP_HERE'; // Replace with your actual Server IP
const server_port = 2843; // Your server port
const bot_name = 'Zyqorinx_Bot';

// --- Main Bot Function ---
function createBot() {
    console.log("Bot is trying to connect to the server...");
    
    const bot = mineflayer.createBot({
        host: server_ip,
        port: server_port,
        username: bot_name,
    });

    bot.on('spawn', () => {
        console.log(`[SUCCESS] ${bot_name} has joined the server!`);

        // --- 1. Movement Logic (Walks slightly to avoid AFK kick) ---
        setInterval(() => {
            bot.setControlState('forward', true); // Walks forward
            setTimeout(() => {
                bot.setControlState('forward', false); // Stops walking forward
                
                bot.setControlState('back', true); // Walks backward to return to original spot
                setTimeout(() => {
                    bot.setControlState('back', false); // Stops walking backward
                }, 1000); // Walks backward for 1 second
            }, 1000); // Walks forward for 1 second
        }, 60000); // Triggers every 1 minute (60,000 milliseconds)

        // --- 2. Chat Messages ---
        // Says "Subscribe Zyqorinx" every 10 minutes
        setInterval(() => {
            bot.chat("Subscribe Zyqorinx");
        }, 600000);

        // Says "Hey how are you?" every 15 minutes
        setInterval(() => {
            bot.chat("Hey how are you?");
        }, 900000);
    });

    // --- 3. Welcome New Players ---
    bot.on('playerJoined', (player) => {
        // Checks if the player joining is not the bot itself
        if (player.username !== bot.username) {
            bot.chat(`Hey ${player.username}, welcome to the server!`);
        }
    });

    // --- Error & Reconnect Handling ---
    bot.on('error', (err) => {
        console.log(`[ERROR] An error occurred: ${err.message}`);
    });

    bot.on('end', (reason) => {
        console.log(`[DISCONNECTED] Bot disconnected. Reason: ${reason}`);
        console.log('Attempting to auto-reconnect in 10 seconds...');
        setTimeout(createBot, 10000); // Reconnects after 10 seconds
    });
    
    bot.on('kicked', (reason) => {
        console.log(`[KICKED] The server kicked the bot: ${reason}`);
    });
}

// Starts the bot
createBot();
