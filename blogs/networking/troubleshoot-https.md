# HTTPS Step by Step  

1. Client Hello:
   - The client (e.g., a web browser) initiates a secure HTTPS connection by sending a "Client Hello" message to the server.
   - The message includes the supported SSL/TLS versions, cipher suites, and a random number for session negotiation.

2. Server Hello:
   - The server receives the "Client Hello" message and responds with a "Server Hello" message.
   - The server selects the SSL/TLS version, cipher suite, and digital certificate to use for the secure connection.

3. Certificate Exchange:
   - The server sends its digital certificate to the client. The certificate contains the server's public key, identification details, and the digital signature from a trusted certificate authority (CA).
   - The client verifies the certificate's validity, including the CA's signature and expiration date.

4. Client Key Exchange:
   - The client generates a pre-master secret key and encrypts it using the server's public key extracted from the received certificate.
   - The encrypted pre-master secret key is sent to the server.

5. Server Key Exchange:
   - If the server requires additional key exchange information (e.g., Diffie-Hellman key exchange), it sends the necessary data to the client.

6. Session Key Generation:
   - Both the client and server independently generate the session keys (encryption and decryption keys) using the exchanged information and the pre-master secret key.
   - The session keys will be used to encrypt and decrypt data during the secure connection.

7. Secure Data Transfer:
   - Using the established session keys, the client and server can now securely exchange data.
   - The client and server encrypt and decrypt the transmitted data using symmetric encryption algorithms, ensuring confidentiality and integrity.

8. Session Termination:
   - Either the client or the server can initiate the session termination by sending a "Close Notify" message.
   - Both sides acknowledge the "Close Notify" message and close the secure connection.

The use of digital certificates, public key encryption, and symmetric encryption ensures secure communication between the client and the server, protecting sensitive data from unauthorized access and tampering.

# HTTPS troubleshoot commands  

1. curl:
   - `curl -I https://<URL>`: Sends an HTTPS HEAD request to the specified URL and displays the response headers.
   - `curl -v https://<URL>`: Performs an HTTPS request to the specified URL and shows detailed information, including request and response headers.

2. openssl:
   - `openssl s_client -connect <host:port>`: Establishes an SSL/TLS connection to a specific host and port, providing detailed information about the SSL/TLS negotiation process.
   - `openssl x509 -in <certificate_file> -text`: Displays detailed information about an SSL/TLS certificate, such as subject, issuer, validity dates, and public key.

3. nmap:
   - `nmap --script ssl-enum-ciphers -p <port> <host>`: Scans for supported SSL/TLS cipher suites on a specific host and port, helping identify potential vulnerabilities.
   - `nmap --script ssl-cert -p <port> <host>`: Retrieves and displays SSL/TLS certificate information for a specific host and port.

4. ss:
   - `ss -ntl`: Displays active TCP connections and listening ports, allowing you to check if the HTTPS service is running and accepting connections.

5. lsof:
   - `lsof -i :443`: Lists open files and processes using port 443, providing information about HTTPS-related processes and connections.

6. tcpdump:
   - `tcpdump -i <interface> port 443`: Captures network traffic on a specific interface (e.g., eth0) for HTTPS communication analysis.
   - `tcpdump -A -s 0 -i <interface> port 443`: Captures and displays HTTPS traffic in ASCII format for easier inspection.

7. wireshark:
   - `wireshark`: Launches the Wireshark network protocol analyzer, allowing you to capture and inspect HTTPS packets in detail.

8. systemd:
   - `systemctl status <service>`: Checks the status of a specific HTTPS-related service (e.g., Apache, Nginx) using the systemd service manager.

9. journalctl:
   - `journalctl -u <service>`: Displays the log entries for a specific HTTPS-related service using the systemd journal, providing insights into service activity and errors.

These commands provide various options for diagnosing and troubleshooting HTTPS-related issues. They can help you check HTTPS response headers, verify connectivity, analyze network traffic, examine SSL/TLS certificates, and monitor service logs, among other tasks.

# Wireshark HTTS filters  

1. Capture HTTPS Traffic:
   - `tcp port 443`: Captures all traffic on port 443, the default port for HTTPS.

2. Filter by SSL/TLS Protocol:
   - `ssl`: Displays all SSL/TLS traffic, including HTTPS.

3. Filter by Server Name:
   - `ssl.handshake.extensions_server_name`: Filters HTTPS traffic based on the server name indication (SNI) field.

4. Filter by HTTP over SSL/TLS:
   - `http`: Displays all HTTP traffic over SSL/TLS.

5. Filter by HTTP Method:
   - `http.request.method == "GET"`: Filters HTTPS traffic for GET requests.
   - `http.request.method == "POST"`: Filters HTTPS traffic for POST requests.

6. Filter by HTTP Status Code:
   - `http.response.code == 200`: Filters HTTPS traffic for responses with a status code of 200 (OK).
   - `http.response.code == 404`: Filters HTTPS traffic for responses with a status code of 404 (Not Found).

7. Filter by HTTP Headers:
   - `http.request.method == "GET" && http.request.uri contains "example.com"`: Filters HTTPS traffic for GET requests to a specific domain (example.com).
   - `http.request.method == "POST" && http contains "Content-Type: application/json"`: Filters HTTPS traffic for POST requests with a JSON content type.

8. Filter by HTTP Response Body:
   - `http.response.code == 200 && http.file_data`: Filters HTTPS traffic for responses with a status code of 200 and displays the response body.

These filters can help you narrow down and focus on specific HTTPS communication within a Wireshark capture. You can combine and customize these filters to match your specific analysis needs.
