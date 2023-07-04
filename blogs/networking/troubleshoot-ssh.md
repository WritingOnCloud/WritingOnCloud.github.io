# SSH step by step  

1. Client Initiation:
   - The client (e.g., a terminal or SSH client software) initiates an SSH connection to the server.
   - The client sends an SSH version and identification message to the server.

2. Server Identification:
   - The server responds with its SSH version and identification message, confirming the SSH protocol compatibility.

3. Key Exchange:
   - The client and server perform a key exchange to establish a secure connection.
   - They negotiate encryption algorithms, generate session keys, and authenticate each other.

4. User Authentication:
   - The server requests authentication from the client.
   - The client provides its identity (e.g., username) to the server.
   - The client and server use various authentication methods, such as password-based authentication, public key authentication, or other mechanisms.

5. Secure Channel Establishment:
   - Once the client is successfully authenticated, a secure channel is established between the client and server.
   - The secure channel is used for encrypted communication and data exchange.

6. Secure Shell Session:
   - The client can start an interactive shell session or execute a specific command on the server.
   - The client sends the commands to the server through the secure channel.
   - The server executes the commands and sends the output back to the client.

7. Data Encryption and Integrity:
   - All data transmitted between the client and server, including commands, responses, and file transfers, is encrypted using the negotiated encryption algorithms.
   - Data integrity is ensured by using cryptographic techniques to detect tampering or modification during transmission.

8. Session Termination:
   - Either the client or the server can initiate the termination of the SSH session.
   - The termination can be initiated through explicit client or server actions, or through inactivity timeouts.

SSH provides a secure and encrypted communication channel between the client and server, allowing remote login, command execution, and secure file transfers. The key exchange, user authentication, and secure channel establishment steps ensure confidentiality, integrity, and authentication of the SSH connection.  

# SSH troubleshoot commands  

1. ssh:
   - `ssh <user>@<host>`: Initiates an SSH connection to the specified host using the specified user account.
   - `ssh -v <user>@<host>`: Enables verbose mode, providing detailed debugging information during the SSH connection process.
   - `ssh -p <port> <user>@<host>`: Connects to a specific SSH port on the remote host.

2. ssh-keygen:
   - `ssh-keygen`: Generates SSH key pairs for public key authentication.
   - `ssh-keygen -l -f <public_key_file>`: Displays the fingerprint of an SSH public key.

3. ssh-copy-id:
   - `ssh-copy-id <user>@<host>`: Copies the user's SSH public key to the specified host, allowing passwordless SSH authentication.

4. sshd:
   - `sudo systemctl status sshd`: Checks the status of the SSH server (sshd) using the systemd service manager.
   - `sudo tail -f /var/log/auth.log`: Monitors the SSH server log for authentication-related information.

5. netstat:
   - `netstat -tuln | grep ssh`: Lists all active SSH server listening ports, helping verify if the SSH server is running.

6. iptables:
   - `sudo iptables -L -n`: Displays the current firewall rules, allowing you to check if there are any rules blocking SSH traffic.

7. tcpdump:
   - `sudo tcpdump -i <interface> port 22`: Captures network traffic on a specific interface (e.g., eth0) for SSH communication analysis.
   - `sudo tcpdump -A -s 0 -i <interface> port 22`: Captures and displays SSH traffic in ASCII format for easier inspection.

8. journalctl:
   - `sudo journalctl -u sshd`: Displays the SSH server (sshd) log entries using the systemd journal, providing insights into SSH service activity and errors.

They can help you check SSH connectivity, diagnose authentication problems, monitor SSH server logs, analyze network traffic, and manage SSH key pairs.  

# Wireshark Filters  

1. Capture SSH Traffic:
   - `tcp port 22`: Captures all traffic on port 22, the default port for SSH.

2. Filter by SSH Protocol:
   - `ssh`: Displays all SSH traffic.

3. Filter by SSH Client or Server:
   - `ssh.version`: Filters SSH traffic based on the SSH version.
   - `ssh.srcport`: Filters SSH traffic based on the source port (client).
   - `ssh.dstport`: Filters SSH traffic based on the destination port (server).

4. Filter by SSH Authentication:
   - `ssh.auth`: Filters SSH traffic related to authentication.
   - `ssh.auth.method`: Filters SSH traffic based on the authentication method used.

5. Filter by SSH User:
   - `ssh.user`: Filters SSH traffic based on the username.

6. Filter by SSH Commands:
   - `ssh.request.command`: Filters SSH traffic for specific commands sent by the client.
   - `ssh.response.command`: Filters SSH traffic for specific commands sent by the server.


