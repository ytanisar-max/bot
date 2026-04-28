# Minecraft 24/7 AFK Bot 🤖⛏️

A simple, smart, and powerful Minecraft AFK bot built with Node.js and Mineflayer. This bot is designed to keep your server online 24/7, prevent AFK kicks, and interact with players automatically!

## ✨ Features

- **24/7 Online:** Includes a built-in Express web server to keep the bot alive using services like UptimeRobot.
- **Anti-AFK System:** Moves slightly every minute (1 step forward, 1 step back) so the server doesn't kick it for being idle.
- **100% Auto-Reconnect:** Automatically rejoins the server in 10 seconds if the server restarts, crashes, or kicks the bot.
- **Automated Chat & Promotion:** Sends chat messages periodically (e.g., "Subscribe Zyqorinx").
- **Player Greeting:** Warmly welcomes new players when they join the server.

---

## 🚀 How to Deploy on Replit (1-Click Setup)

You can easily host this bot for free using Replit. Follow these simple steps:

### Step 1: Import to Replit
1. Go to [Replit](https://replit.com/new).
2. Click on the **"Import from GitHub"** tab.
3. Paste the URL of this repository and click **Import**.

### Step 2: Configure Your Server Details
1. Open the `index.js` file in your Replit project.
2. Find the **Bot Settings** section.
3. Change the `server_ip` to your actual Minecraft server IP (e.g., `play.myserver.net`).
4. Ensure the `server_port` is correct (Default is 2843 for this setup).

### Step 3: Run the Bot
Click the big green **Run** button at the top of Replit. The console will show when the bot successfully joins your server!

---

## 🌐 How to Keep it Online 24/7 (Free)

Replit puts free projects to sleep when you close the tab. To keep your bot awake forever:

1. Once your bot is running on Replit, a small Webview window will open at the top right showing: *"Minecraft AFK Bot with Movement & Chat is Running!"*
2. **Copy the URL (link)** of that Webview window.
3. Go to [UptimeRobot](https://uptimerobot.com/) and create a free account.
4. Click **Add New Monitor**.
5. Select **Monitor Type:** `HTTP(s)`.
6. Give it a name (e.g., `Zyqorinx Bot`) and **paste the copied URL**.
7. Set the monitoring interval to **5 minutes** and click **Create Monitor**.

Done! UptimeRobot will now ping your Replit every 5 minutes, keeping your AFK bot awake and your Minecraft server online 24/7!

---

## 🛠️ Built With
- [Mineflayer](https://github.com/PrismarineJS/mineflayer) - The powerful Minecraft bot API.
- [Express](https://expressjs.com/) - Web framework for the keep-alive server.
- # bot
