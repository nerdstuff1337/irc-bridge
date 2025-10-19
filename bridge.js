import * as irc from "irc";

// === CONFIGURATION =======================================
const source = {
  server: "irc.source.org",
  nick: "YourBotNick",
  userName: "username",
  realName: "IRC Bridge Bot",
  channels: ["#channel"],
  port: 6697,
  secure: true,
  stripColors: true,
  showErrors: true,
  autoRejoin: true,
  autoConnect: true
};

const destination = {
  server: "irc.destination.com", 
  nick: "YourBotNick",
  userName: "username",
  realName: "IRC Bridge Bot",
  channels: ["#channel"],
  port: 6697,
  secure: true,
  stripColors: true,
  showErrors: true,
  autoRejoin: true,
  autoConnect: true
};

// === IRC CLIENT SETUP ===================================
const srcClient = new irc.Client(source.server, source.nick, source);
const dstClient = new irc.Client(destination.server, destination.nick, destination);

// Connection event handlers
srcClient.addListener("registered", () =>
  console.log(`[SOURCE] Connected to ${source.server}`)
);
dstClient.addListener("registered", () =>
  console.log(`[DESTINATION] Connected to ${destination.server}`)
);

// === SIMPLE MESSAGE FORWARDING ===========================
srcClient.addListener("message", (from, to, text) => {
  if (to.startsWith("#")) {
    console.log(`[FORWARD] ${from} -> ${to}: ${text}`);
    dstClient.say(destination.channels[0], text);
  }
});

// === ERROR HANDLING =====================================
[srcClient, dstClient].forEach((client, index) => {
  const label = index === 0 ? "SOURCE" : "DESTINATION";
  client.addListener("error", (error) => console.error(`[${label}] Error:`, error));
});