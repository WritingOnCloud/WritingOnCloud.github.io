# HTTP step by step  

1. Client Request:
   - The client (e.g., a web browser) initiates an HTTP request by sending a request message to the server.
   - The request message includes a request line, headers, and optionally a message body.
   - The request line contains the HTTP method (e.g., GET, POST), the requested URI (Uniform Resource Identifier), and the HTTP version.

2. Server Response:
   - The server receives the HTTP request and processes it.
   - The server generates an HTTP response message containing a response line, headers, and optionally a message body.
   - The response line includes the HTTP version, a status code indicating the outcome of the request (e.g., 200 for success, 404 for not found), and a reason phrase.

3. Data Transfer:
   - The server sends the HTTP response message back to the client.
   - The response data is typically sent over a TCP/IP connection.
   - The client receives the response and starts processing it.

4. Handling the Response:
   - The client reads the response line and headers to understand the server's response.
   - The client may perform actions based on the status code and headers received (e.g., follow redirects, handle authentication).
   - If the response includes a message body, the client processes it accordingly (e.g., rendering HTML content, downloading files).

5. Connection Management:
   - By default, HTTP/1.1 supports persistent connections, allowing multiple requests and responses to be sent over the same TCP connection.
   - After the response is fully received and processed, the client may choose to keep the connection open for subsequent requests or close it.

6. Additional Requests:
   - The client may send additional HTTP requests to the server to retrieve additional resources (e.g., images, scripts) referenced in the initial response.
   - These requests follow the same process as described above, with the client sending a new HTTP request and the server responding with an HTTP response.

This basic explanation outlines the fundamental steps involved in the HTTP protocol. HTTP is a stateless protocol, meaning each request-response cycle is independent and does not retain information about previous interactions. The protocol allows clients and servers to communicate and exchange data, forming the foundation of modern web browsing and web application interactions.

# HTTP troubleshooting commands:  
Here are some Linux commands that can be helpful for troubleshooting HTTP issues:

1. curl:
   - `curl -I <URL>`: Sends an HTTP HEAD request to the specified URL and displays the response headers.
   - `curl -v <URL>`: Performs an HTTP request to the specified URL and shows detailed information, including request and response headers.

2. wget:
   - `wget --spider <URL>`: Checks the availability of a URL by sending an HTTP HEAD request and displaying the response status.

3. telnet:
   - `telnet <hostname> <port>`: Establishes a raw TCP connection to the specified hostname and port, allowing manual HTTP request construction.
   - `GET / HTTP/1.1<ENTER>Host: <hostname><ENTER><ENTER>`: Sends an HTTP GET request manually after establishing a telnet connection.

4. tcpdump:
   - `tcpdump -i <interface> port 80`: Captures network traffic on a specific interface (e.g., eth0) for HTTP communication analysis.
   - `tcpdump -A -s 0 -i <interface> port 80`: Captures and displays HTTP traffic in ASCII format for easier inspection.

5. netstat:
   - `netstat -tuln`: Lists all active TCP connections and listening ports, helping identify if a web server is running and accepting connections.

6. iptables:
   - `iptables -L -n`: Displays the current firewall rules, which can help identify if there are any rules blocking HTTP traffic.

7. nmap:
   - `nmap -p 80 <hostname>`: Scans for open HTTP ports on a specific hostname to check if the web server is reachable.

8. tail:
   - `tail -f /var/log/httpd/access_log`: Displays the last lines of the Apache HTTP server access log in real-time for troubleshooting purposes.

These commands provide various ways to diagnose and troubleshoot HTTP-related issues. They can help you check **HTTP response headers, verify connectivity, analyze network traffic, and examine server logs**, among other tasks.  

Few more Linux commands that can be useful for troubleshooting HTTP issues:

1. ss:
   - `ss -ntl`: Displays active TCP connections and listening ports, helping identify if HTTP-related services (e.g., web server) are running.
   - `ss -tnlp 'sport = :80'`: Shows the process and associated PID (Process ID) listening on port 80, useful for identifying the HTTP server process.

2. lsof:
   - `lsof -i :80`: Lists open files and processes using port 80, providing information about HTTP-related processes and connections.

3. tcpflow:
   - `tcpflow -c -i <interface> port 80`: Captures and displays HTTP traffic on a specific interface for more detailed analysis.

4. ngrep:
   - `ngrep -q -d <interface> 'GET|POST' 'port 80'`: Captures HTTP GET and POST requests on a specific interface, useful for monitoring specific HTTP traffic.

5. wireshark:
   - `wireshark`: Launches the Wireshark network protocol analyzer, allowing you to capture and inspect HTTP packets in detail.

6. systemd:
   - `systemctl status <service>`: Checks the status of a specific HTTP-related service (e.g., Apache, Nginx) using the systemd service manager.

7. journalctl:
   - `journalctl -u <service>`: Displays the log entries for a specific HTTP-related service using the systemd journal, providing insights into service activity and errors.

# Wireshark Filters for HTTP
**HTTP Filters :**

http: Filters all HTTP packets.  
http.host: Filters packets based on the host header value.  
http.request.method: Filters packets based on the HTTP request method (e.g., GET, POST).  
http.response.code: Filters packets based on the HTTP response status code.  
http.cookie: Filters packets based on the presence of specific HTTP cookies.  
http.request.uri: Filters packets based on the requested URI.  

**Content Filters:**  

http.request: Filters packets containing HTTP request messages.  
http.response: Filters packets containing HTTP response messages.  
http.content_type: Filters packets based on the HTTP Content-Type header value.  

**Header Filters:**  

http.request.header: Filters packets based on specific HTTP request headers.  
http.response.header: Filters packets based on specific HTTP response headers.  

**Status Code Filters:**  

http.response.code == <status_code>: Filters packets based on a specific HTTP response status code.  

**Authentication Filters:**  

http.auth: Filters packets containing HTTP authentication headers.  
http.authbasic: Filters packets containing Basic HTTP authentication headers.  
http.authdigest: Filters packets containing Digest HTTP authentication headers.  

**Cache Filters:**  

http.cache_control: Filters packets based on the HTTP Cache-Control header value.  
http.expires: Filters packets based on the HTTP Expires header value.  

**Redirection Filters:**  

http.location: Filters packets based on the HTTP Location header value.  

**Response Size Filters:**  

http.response.code >= 200 && http.response.code < 300 && frame.len > 0: Filters successful HTTP responses with non-empty content.     

**Request Method Filters:**  

http.request.method == <method>: Filters packets based on a specific HTTP request method (e.g., GET, POST, PUT).  

**Response Headers Filters:**  

http.response.header: Filters packets based on specific HTTP response headers.  
http.response.header.name == <header_name>: Filters packets based on a specific HTTP response header name.  

**Request Headers Filters:**  

http.request.header: Filters packets based on specific HTTP request headers.  
http.request.header.name == <header_name>: Filters packets based on a specific HTTP request header name.  

**Content-Length Filters:**  

http.content_length: Filters packets based on the HTTP Content-Length header value.  
http.content_length == <length>: Filters packets based on a specific Content-Length value.  

**HTTP Versions Filters:**  

http.version: Filters packets based on the HTTP version.  
http.version == <version>: Filters packets based on a specific HTTP version (e.g., 1.0, 1.1, 2.0).  

**GZIP Compression Filters:**  

http.accept_encoding: Filters packets based on the HTTP Accept-Encoding header value, which indicates support for gzip compression.  

**Request URI Filters:**  

http.request.uri contains <string>: Filters packets based on a specific string present in the HTTP request URI.  

**Referrer Filters:**  

http.referer: Filters packets based on the HTTP Referer header, which specifies the URL of the referring page.  

**User-Agent Filters:**  

http.user_agent: Filters packets based on the User-Agent header, which provides information about the client application or browser.  

**Request/Response Time Filters:**  

http.time: Filters packets based on the time taken for the HTTP request/response.  
http.time >= <time_in_seconds>: Filters packets based on a specific request/response time threshold.  


These filters can help you focus on specific aspects of HTTP traffic, such as specific requests, responses, headers, authentication, caching, and more.   
They allow you to analyze and troubleshoot HTTP-related issues more effectively in Wireshark.  
