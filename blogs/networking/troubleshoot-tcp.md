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

1. Filter by TCP Traffic:
   - `tcp`: Displays all TCP packets.
   - `tcp.port == <port>`: Filters TCP packets based on the specified port number.
   - `tcp.flags.syn == 1`: Filters TCP packets with the SYN flag set, indicating the start of a connection.
   - `tcp.flags.ack == 1`: Filters TCP packets with the ACK flag set, indicating acknowledgment of a segment.

2. Filter by TCP Flow:
   - `tcp.stream eq <stream_id>`: Filters packets belonging to the specified TCP stream.
   - `tcp.stream eq <stream_id> && ip.addr == <ip_address>`: Filters packets for a specific TCP stream and IP address.

3. Filter by TCP Sequence and Acknowledgment Numbers:
   - `tcp.seq == <sequence_number>`: Filters packets with a specific TCP sequence number.
   - `tcp.ack == <acknowledgment_number>`: Filters packets with a specific TCP acknowledgment number.

4. Filter by TCP Flags:
   - `tcp.flags.fin == 1`: Filters TCP packets with the FIN flag set, indicating the end of a connection.
   - `tcp.flags.rst == 1`: Filters TCP packets with the RST flag set, indicating the reset of a connection.
   - `tcp.flags.push == 1`: Filters TCP packets with the PSH (push) flag set, indicating urgent data.

5. Filter by TCP Options:
   - `tcp.options.mss == <mss_value>`: Filters TCP packets with a specific Maximum Segment Size (MSS) value.
   - `tcp.options.timestamp`: Filters TCP packets with the Timestamp option.

6. Filter by TCP Window Size:
   - `tcp.window_size == <window_size>`: Filters TCP packets with a specific window size value.

7. Filter by TCP Retransmissions:
   - `tcp.analysis.retransmission`: Filters TCP packets identified as retransmissions.

8. Filter by TCP Window Scaling:
   - `tcp.options.ws`: Filters TCP packets with the Window Scaling option.

9. Filter by TCP Selective Acknowledgment (SACK):
   - `tcp.options.sack`: Filters TCP packets with the Selective Acknowledgment (SACK) option.

10. Filter by TCP Urgent Data:
    - `tcp.flags.urg == 1`: Filters TCP packets with the URG (urgent) flag set, indicating the presence of urgent data.

11. Filter by TCP Keep-Alive:
    - `tcp.analysis.keep_alive`: Filters TCP packets identified as keep-alive packets.

12. Filter by TCP Window Update:
    - `tcp.flags.window_update == 1`: Filters TCP packets with the Window Update flag set.

13. Filter by TCP Dupacks:
    - `tcp.analysis.duplicate_ack`: Filters TCP packets identified as duplicate acknowledgments (Dupacks).

14. Filter by TCP Zero Window:
    - `tcp.flags.zero_window == 1`: Filters TCP packets with the Zero Window flag set, indicating a zero window size.

15. Filter by TCP Fast Retransmission:
    - `tcp.analysis.fast_retransmission`: Filters TCP packets identified as fast retransmissions.

16. Filter by TCP Out-of-Order Packets:
    - `tcp.analysis.out_of_order`: Filters TCP packets identified as out-of-order packets.

17. Filter by TCP Window Full:
    - `tcp.analysis.window_full`: Filters TCP packets identified as window full.

18. Filter by TCP Keep-Alive Acknowledgment:
    - `tcp.analysis.keep_alive_ack`: Filters TCP packets identified as keep-alive acknowledgment packets.

We can apply them based on the specific aspects of TCP behavior you want to examine, such as window scaling, selective acknowledgment, urgent data, keep-alive, window updates, duplicate acknowledgments, zero window conditions, fast retransmissions, out-of-order packets, or window full indications.  
