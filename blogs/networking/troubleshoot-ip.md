# IP step by step  

1. Packetization:
   - Data is divided into smaller units called packets or datagrams.
   - Each packet contains a portion of the data, along with source and destination IP addresses.

2. Routing:
   - The sender's device checks its routing table to determine the appropriate next hop or gateway to reach the destination IP address.
   - The routing table contains information about network topology, including routes, subnet masks, and gateway addresses.
   - The packet is then sent to the next hop based on the determined route.

3. Fragmentation and Reassembly:
   - If a packet is too large to be transmitted over the network, it may need to be fragmented into smaller units.
   - The sender checks the Maximum Transmission Unit (MTU) of the network path and breaks the packet into smaller fragments if necessary.
   - At the receiving end, the fragments are reassembled to reconstruct the original packet.

4. Address Resolution:
   - The sender's device determines the MAC (Media Access Control) address of the next hop or gateway.
   - It performs an Address Resolution Protocol (ARP) request to obtain the MAC address associated with the next hop's IP address.
   - The ARP response provides the MAC address mapping, allowing the sender to encapsulate the IP packet into a data link frame with the appropriate destination MAC address.

5. Encapsulation:
   - The IP packet is encapsulated into a data link layer frame, such as an Ethernet frame.
   - The data link layer adds its own header, including source and destination MAC addresses.
   - The frame is then transmitted over the physical network media.

6. Transmission:
   - The data link layer transmits the frame across the network media, such as Ethernet cables or wireless signals.
   - The frame travels from one network device to another based on the MAC address.

7. Reception and Decapsulation:
   - The receiving network device examines the destination MAC address of the incoming frame.
   - If the destination MAC address matches its own, the device accepts the frame and proceeds to process it.
   - The data link layer removes the frame header, exposing the encapsulated IP packet.

8. Routing and Forwarding:
   - The receiving device checks the destination IP address of the IP packet.
   - It consults its routing table to determine the next hop or destination for the packet.
   - If the packet is meant for the device itself, it is delivered to the appropriate network layer protocol (e.g., TCP, UDP) for further processing.
   - If the packet is meant for another destination, the device forwards it to the next hop based on the routing table.

9. Reassembly and Delivery:
   - If the packet was fragmented during transmission, the receiving device reassembles the fragments into the original packet.
   - The packet is then delivered to the appropriate network layer protocol based on the protocol field in the IP header (e.g., TCP, UDP).

10. Destination Processing:
    - The receiving network layer protocol (e.g., TCP, UDP) processes the received packet.
    - If the packet contains data intended for a specific application, it is passed up the protocol stack to the corresponding application.

11. Error Handling:
    - Throughout the process, various error detection mechanisms, such as checksums, are used to ensure data integrity.
    - If errors are detected, the packet may be discarded, and error notifications may be sent to the sender.

IP provides the foundation for communication in the Internet Protocol suite. 
It handles the addressing, routing, fragmentation, and reassembly of packets to ensure the delivery of data between devices across interconnected networks.  

# IP troubleshooting commands  

1. ping:
   - `ping <IP_address>`: Sends ICMP Echo Request packets to the specified IP address to check connectivity and measure response time.

2. traceroute:
   - `traceroute <IP_address>`: Traces the route taken by packets to reach the specified IP address, showing the IP addresses of intermediate hops.

3. ifconfig/ipconfig:
   - `ifconfig`: Displays the IP configuration information of network interfaces on Unix/Linux systems.
   - `ipconfig`: Displays the IP configuration information of network interfaces on Windows systems.

4. netstat:
   - `netstat -rn`: Displays the routing table, showing the IP routes and gateways configured on the system.

5. nslookup/dig:
   - `nslookup <domain_name>`: Performs DNS lookup to retrieve the IP address associated with the specified domain name.
   - `dig <domain_name>`: Performs DNS lookup and provides detailed information about the DNS response.

6. arp:
   - `arp -a`: Displays the ARP (Address Resolution Protocol) cache, showing the MAC address to IP address mappings.

7. iptables:
   - `iptables -L`: Lists the current firewall rules, allowing you to check if there are any rules blocking IP connectivity.

8. tcpdump:
   - `tcpdump -i <interface> host <IP_address>`: Captures network traffic on a specific interface involving the specified IP address for detailed analysis.

9. Wireshark:
   - `wireshark`: Launches the Wireshark network protocol analyzer, allowing you to capture and analyze IP packets in detail.
   - Wireshark filters for IP traffic: Use various filters like `ip`, `ip.addr`, or `ip.src` to focus on specific aspects of IP communication.

10. route:
    - `route -n`: Displays the IP routing table, showing the configured routes and gateways.

11. ip:
    - `ip addr show`: Displays IP address information of network interfaces on Linux systems.
    - `ip route show`: Displays the IP routing table on Linux systems.

# Wireshark Filters  

1. Filter by IP Address:
   - `ip.addr == <IP_address>`: Filters packets based on the specified IP address (source or destination).
   - `ip.src == <source_IP>`: Filters packets based on the source IP address.
   - `ip.dst == <destination_IP>`: Filters packets based on the destination IP address.

2. Filter by IP Protocol:
   - `ip.proto == <protocol_number>`: Filters packets based on the IP protocol number.
   - `ip.proto == tcp`: Filters TCP packets.
   - `ip.proto == udp`: Filters UDP packets.

3. Filter by Fragmentation:
   - `ip.flags.mf == 1`: Filters packets that are fragments (more fragments flag set).
   - `ip.flags.df == 1`: Filters packets with the "do not fragment" flag set.

4. Filter by Time to Live (TTL):
   - `ip.ttl == <ttl_value>`: Filters packets based on the TTL value.

5. Filter by IP Options:
   - `ip.options`: Filters packets with IP options.

6. Filter by IP Version:
   - `ip.version == <version_number>`: Filters packets based on the IP version.

7. Filter by IP Options:
   - `ip.options`: Filters packets with IP options.

8. Filter by IP Identification:
   - `ip.id == <identification_value>`: Filters packets based on the IP identification value.

9. Filter by IP Fragment Offset:
   - `ip.offset == <offset_value>`: Filters packets based on the IP fragment offset value.

10. Filter by IP Flags:
    - `ip.flags == <flags>`: Filters packets based on specific IP flags.

11. Filter by IP Precedence:
    - `ip.dsfield.dscp == <dscp_value>`: Filters packets based on the Differentiated Services Code Point (DSCP) value.

12. Filter by IP Type of Service (ToS):
    - `ip.dsfield == <tos_value>`: Filters packets based on the Type of Service (ToS) value.

13. Filter by IP Packet Length:
    - `ip.len == <packet_length>`: Filters packets based on the IP packet length.

14. Filter by IP Time Exceeded:
    - `icmp.type == 11`: Filters ICMP Time Exceeded messages.

15. Filter by IP Destination Unreachable:
    - `icmp.type == 3`: Filters ICMP Destination Unreachable messages.

16. Filter by IP Source Quench:
    - `icmp.type == 4`: Filters ICMP Source Quench messages.

17. Filter by IP Redirect:
    - `icmp.type == 5`: Filters ICMP Redirect messages.

18. Filter by IP TimeStamp:
    - `icmp.type == 13`: Filters ICMP Timestamp messages.

19. Filter by IP Address Mask Request/Reply:
    - `icmp.type == 17` or `icmp.type == 18`: Filters ICMP Address Mask Request or Reply messages.

20. Filter by IP Router Advertisement:
    - `icmp.type == 9`: Filters ICMP Router Advertisement messages.

21. Filter by IP Router Solicitation:
    - `icmp.type == 10`: Filters ICMP Router Solicitation messages.

22. Filter by IP Bad IP Header:
    - `ip.hdr_checksum_bad == 1`: Filters packets with a bad IP header checksum.

23. Filter by IP Fragmentation Errors:
    - `ip.flags.mf == 1 && ip.frag_offset != 0`: Filters packets with fragmentation errors.

24. Filter by IP Options Errors:
    - `ip.options_error == 1`: Filters packets with IP options errors.
