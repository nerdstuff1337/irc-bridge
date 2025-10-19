IRC Bridge

A simple and lightweight Node.js IRC bridge that forwards messages between two IRC servers or channels.
Features
<div class="features"> <div class="feature"> <span class="emoji">🔄</span> <strong>Simple Forwarding</strong>: Forwards all messages from source to destination without modification </div> <div class="feature"> <span class="emoji">🔒</span> <strong>SSL Support</strong>: Secure connections with SSL/TLS </div> <div class="feature"> <span class="emoji">⚡</span> <strong>Lightweight</strong>: Minimal dependencies and straightforward configuration </div> <div class="feature"> <span class="emoji">🛠️</span> <strong>Easy Setup</strong>: Simple configuration and easy to run </div> </div>
Installation
html

<div class="installation-steps">
  <div class="step">
    <h3>1. Clone the repository</h3>
    <pre><code>git clone https://github.com/nerdstuff1337/irc-bridge.git
cd irc-bridge</code></pre>
  </div>
  
  <div class="step">
    <h3>2. Install dependencies</h3>
    <pre><code>npm install</code></pre>
  </div>
  
  <div class="step">
    <h3>3. Configure the bridge</h3>
    <p>Edit <code>bridge.js</code> and update the configuration objects:</p>
    <pre><code class="language-javascript">const source = {
  server: "irc.source.org",
  nick: "YourBotNick",
  channels: ["#channel"],
  // ... other settings
};

const destination = {
  server: "irc.destination.to",
  nick: "YourBotNick", 
  channels: ["#channel"],
  // ... other settings
};</code></pre>
  </div>
</div>

Usage
html

<div class="usage">
  <h3>Start the bridge:</h3>
  <pre><code class="language-bash">npm start</code></pre>
  
  <p>Or directly with Node.js:</p>
  <pre><code class="language-bash">node bridge.js</code></pre>
  
  <div class="bridge-info">
    <p>The bridge will:</p>
    <ul>
      <li>Connect to both IRC servers</li>
      <li>Join the specified channels</li>
      <li>Forward all messages from source to destination</li>
      <li>Log connection status and activity to console</li>
    </ul>
  </div>
</div>

Configuration
html

<div class="configuration">
  <table>
    <thead>
      <tr>
        <th>Setting</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>server</code></td>
        <td>IRC server address</td>
      </tr>
      <tr>
        <td><code>nick</code></td>
        <td>Bot nickname</td>
      </tr>
      <tr>
        <td><code>userName</code></td>
        <td>Username for connection</td>
      </tr>
      <tr>
        <td><code>realName</code></td>
        <td>Real name for connection</td>
      </tr>
      <tr>
        <td><code>channels</code></td>
        <td>Array of channels to join</td>
      </tr>
      <tr>
        <td><code>port</code></td>
        <td>Server port (default: 6697 for SSL)</td>
      </tr>
      <tr>
        <td><code>secure</code></td>
        <td>Use SSL/TLS (true/false)</td>
      </tr>
    </tbody>
  </table>
</div>

Example Output
html

<div class="example-output">
  <pre><code class="language-text">[SOURCE] Connected to irc.zenet.org
[DESTINATION] Connected to irc.ngp.re
[FORWARD] User123 -> #channel: Hello everyone!
[FORWARD] Bot -> #channel: New release available!</code></pre>
</div>

Requirements

    Node.js 14.0 or higher

    npm (Node Package Manager)

Dependencies

    irc - IRC client library for Node.js

License

MIT License - see LICENSE file for details.
Contributing
html

<div class="contributing">
  <ol>
    <li>Fork the project</li>
    <li>Create a feature branch</li>
    <li>Commit your changes</li>
    <li>Push to the branch</li>
    <li>Open a Pull Request</li>
  </ol>
</div>

Support

If you encounter any issues:

    Check the console for error messages

    Ensure your IRC server settings are correct

    Verify the bot has permission to join the channels

    Check firewall and network connectivity

Note: Make sure to comply with the terms of service of the IRC networks you're connecting to.
html

<style>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.feature {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #007acc;
}

.emoji {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.installation-steps .step {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}

code {
  background: #f1f3f4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.language-bash, .language-javascript, .language-text {
  display: block;
  padding: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background: #f8f9fa;
  font-weight: 600;
}

.configuration {
  overflow-x: auto;
}

.bridge-info ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.bridge-info li {
  margin-bottom: 0.5rem;
}

.contributing ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.contributing li {
  margin-bottom: 0.5rem;
}

.example-output pre {
  background: #1a1a1a;
}
</style>
