# TCP step by step  

1. Connection Establishment:
   - The client initiates a TCP connection by sending a TCP segment with the SYN (synchronize) flag set to the server.
   - The server receives the SYN segment and sends back a TCP segment with both the SYN and ACK (acknowledge) flags set to acknowledge the client's request.
   - The client receives the SYN+ACK segment and sends an ACK segment to confirm the connection establishment.
   - At this point, a TCP connection is established between the client and server.

2. Reliable Data Transfer:
   - Data is divided into TCP segments for transmission.
   - The sender assigns a sequence number to each segment to ensure correct ordering upon arrival.
   - The sender sends the segments and waits for acknowledgment (ACK) from the receiver.
   - The receiver acknowledges the received segments by sending back ACK segments.
   - If the sender does not receive an ACK within a specified time (timeout), it retransmits the unacknowledged segments.

3. Flow Control:
   - TCP uses a sliding window mechanism for flow control.
   - The receiver advertises its receive window size to the sender.
   - The sender adjusts the rate of data transmission based on the receiver's advertised window size, ensuring that the receiver does not become overwhelmed with data.

4. Congestion Control:
   - TCP employs congestion control mechanisms to prevent network congestion.
   - The sender monitors network conditions and adjusts its sending rate accordingly to avoid overloading the network.
   - If congestion is detected, the sender reduces the transmission rate to alleviate congestion.

5. Connection Termination:
   - Either the client or server can initiate the connection termination.
   - The initiating party sends a TCP segment with the FIN (finish) flag set to signal the intent to terminate the connection.
   - The other party acknowledges the termination request by sending an ACK segment.
   - The initiating party sends a final ACK segment to confirm the connection closure.
   - At this point, the TCP connection is closed.

TCP provides reliable, ordered, and error-checked delivery of data between two endpoints. It ensures that data is transmitted correctly, retransmits lost or corrupted segments, and adjusts its behavior based on network conditions. Through connection establishment, data transfer, flow control, congestion control, and connection termination, TCP enables robust and efficient communication over IP networks.

# TCP troubleshooting commands  

1. netstat:
   - `netstat -t`: Displays active TCP connections and associated details, such as local and remote IP addresses and port numbers.
   - `netstat -s`: Provides statistics and information about various TCP parameters, including segments sent, received, and retransmitted.

2. tcpdump:
   - `tcpdump -i <interface> tcp`: Captures TCP traffic on a specific network interface for detailed analysis.
   - `tcpdump -nnvvXSs 0 -i <interface> tcp port <port>`: Captures TCP traffic on a specific port for in-depth inspection of packets.

3. ss:
   - `ss -t`: Lists TCP sockets, including listening and established connections.
   - `ss -s`: Provides socket statistics, including TCP connections and various metrics.

4. telnet:
   - `telnet <host> <port>`: Initiates a TCP connection to a specific host and port for testing connectivity.

5. nmap:
   - `nmap -p <port> <host>`: Scans for open TCP ports on a specific host.

6. iptables:
   - `iptables -L -n`: Displays the current firewall rules, allowing you to check if there are any rules blocking TCP traffic.

7. Wireshark:
   - `wireshark`: Launches the Wireshark network protocol analyzer, allowing you to capture and analyze TCP packets in detail.
   - Wireshark filters for TCP traffic: Use various filters like `tcp`, `tcp.port`, or `tcp.analysis` to focus on specific aspects of TCP communication.

8. tcpflow:
   - `tcpflow -c -i <interface> port <port>`: Captures and saves TCP sessions to separate files for further analysis.

# Wireshark Filters for TCP


