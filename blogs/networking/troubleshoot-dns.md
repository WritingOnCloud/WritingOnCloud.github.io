# DNS step by step:  

1. User Requests a Domain Name:
   - A user enters a domain name (e.g., www.example.com) into a web browser or application.

2. Local DNS Resolution:
   - The user's device checks its local DNS cache to see if it has a recent record of the requested domain name and its corresponding IP address.
   - If a cached record exists and is still valid, the IP address is returned to the user.

3. Recursive DNS Resolution:
   - If the domain name is not found in the local cache, the user's device contacts a DNS resolver (usually provided by the Internet Service Provider) to resolve the domain name.
   - The resolver is responsible for handling DNS requests on behalf of the user.

4. DNS Recursive Query:
   - The resolver sends a recursive query to the root DNS servers, asking for the IP address of the top-level domain (TLD) server responsible for the requested domain extension (e.g., .com).

5. Root DNS Response:
   - The root DNS server responds to the resolver with the IP address of the TLD server for the requested domain extension.

6. TLD DNS Query:
   - The resolver sends another query, this time to the TLD DNS server specified in the root DNS response.
   - The query asks for the IP address of the authoritative DNS server responsible for the requested domain (e.g., example.com).

7. Authoritative DNS Query:
   - The resolver sends a query to the authoritative DNS server for the requested domain.
   - This server is managed by the domain owner or their DNS service provider and holds the DNS records for the domain.

8. DNS Record Lookup:
   - The authoritative DNS server searches its DNS records for the requested domain name.
   - If found, it returns the corresponding IP address(es) associated with the domain.

9. DNS Response:
   - The authoritative DNS server sends the IP address(es) back to the resolver.

10. Caching and Response:
    - The resolver caches the IP address(es) received from the authoritative DNS server.
    - It then sends the IP address(es) back to the user's device, allowing the device to establish a connection to the requested domain.

11. User Accesses the Website:
    - The user's device uses the IP address obtained from the DNS resolution process to establish a connection with the web server hosting the requested domain.
    - The web server responds to the user's request, and the website content is displayed in the user's browser.

DNS is a hierarchical and distributed system that translates domain names into IP addresses, enabling users to access websites and services using human-readable names. The process involves recursive queries, starting from the user's device, through DNS resolvers, root DNS servers, TLD servers, authoritative DNS servers, and back to the user. Caching at various stages helps improve performance and reduce the load on DNS infrastructure.  

# DNS Troubleshooting commands:  

1. dig:
   - `dig <domain>`: Performs DNS lookups and retrieves information about a domain, including IP addresses, DNS records, and name servers.
   - `dig <domain> <record_type>`: Retrieves specific DNS records of a domain (e.g., A, MX, NS, CNAME, TXT).

2. nslookup:
   - `nslookup <domain>`: Performs DNS lookups and provides information about a domain, including IP addresses and name servers.
   - `nslookup <domain> <name_server>`: Performs a DNS lookup using a specific name server.

3. host:
   - `host <domain>`: Performs DNS lookups and displays the IP address(es) associated with a domain.
   - `host -t <record_type> <domain>`: Retrieves specific DNS records of a domain (e.g., A, MX, NS, CNAME, TXT).

4. ping:
   - `ping <domain>`: Sends ICMP echo requests to a domain or IP address to check if it is reachable and measure round-trip time.
   - `ping -c <count> <domain>`: Sends a specified number of ICMP echo requests to a domain.

5. traceroute:
   - `traceroute <domain>`: Traces the route packets take to reach a domain or IP address, displaying the IP addresses of intermediate hops.

6. tcpdump:
   - `tcpdump -i <interface> port 53`: Captures DNS traffic on a specific network interface (e.g., eth0) to analyze DNS packets.

7. ss:
   - `ss -ntl`: Displays active TCP connections and listening ports, allowing you to check if DNS-related services (e.g., DNS resolver, DNS server) are running.

8. systemctl:
   - `systemctl status systemd-resolved`: Checks the status of the systemd-resolved service, which handles DNS resolution in many Linux distributions.

These commands can help you diagnose and troubleshoot DNS issues by providing information about **DNS records, name servers, IP addresses, network connectivity, and DNS resolution**.  

Few more Linux commands that can be useful for troubleshooting DNS issues:

1. tcpdump:
   - `tcpdump -n -i <interface> port 53`: Captures DNS traffic on a specific network interface (e.g., eth0) and displays the raw packet data.

2. resolvectl:
   - `resolvectl status`: Shows the current DNS configuration and status, including the DNS server, domain, and DNSSEC (DNS Security Extensions) information.
   - `resolvectl query <domain>`: Performs a DNS query for a specific domain and displays the response.

3. host:
   - `host -a <domain>`: Performs a comprehensive DNS lookup for a domain, including all available DNS records and additional information.

4. nmcli:
   - `nmcli device show <interface>`: Displays detailed information about a specific network interface, including DNS configuration.

5. named-checkzone:
   - `named-checkzone <domain> <zone_file>`: Checks the syntax and integrity of a DNS zone file for a particular domain.

6. rndc:
   - `rndc reload`: Reloads the configuration of the BIND DNS server, which can be useful after making changes to DNS zone files.

7. nmap:
   - `nmap -p 53 <domain>`: Scans for open DNS ports on a domain to check if the DNS server is reachable.

8. iptables:
   - `iptables -L -n`: Displays the current firewall rules, which can help identify if there are any rules blocking DNS traffic.

These additional commands provide more options for diagnosing and troubleshooting DNS issues. **They can help you gather more detailed information, check DNS configurations, analyze DNS traffic, and verify network connectivity**.

# Wireshark Filters for DNS
**DNS Filters:**  

dns: Filters DNS packets.  
dns.qry.name: Filters packets based on the queried domain name.  
dns.resp.name: Filters packets based on the response domain name.  
dns.flags.response: Filters packets based on DNS response packets.  
dns.flags.response == 0: Filters packets based on DNS query packets.  
dns.flags.response == 1: Filters packets based on DNS response packets.  

**DNS Record Type Filters:**  

dns.qry.type: Filters packets based on the DNS query type (e.g., A, AAAA, NS, MX, CNAME).  
dns.resp.type: Filters packets based on the DNS response type.  

**DNS Response Code Filters:**   

dns.flags.rcode: Filters packets based on the DNS response code.  
dns.flags.rcode == <code>: Filters packets based on a specific DNS response code (e.g., 0 for No Error, 3 for Name Error).  

**DNS Time to Live (TTL) Filters:**  

dns.a.ttl: Filters packets based on the TTL value of DNS A records.  
dns.cname.ttl: Filters packets based on the TTL value of DNS CNAME records.  

**DNS Flags Filters:**  

dns.flags: Filters packets based on DNS flags.  
dns.flags.response_ip: Filters packets based on the DNS response IP address.  

**DNS EDNS Options Filters:**  

dns.opt: Filters packets based on DNS EDNS (Extension Mechanisms for DNS) options.  

**DNS Response Size Filters:**  

dns.len: Filters packets based on the length of the DNS response.  

**DNS Server Filters:**  

dns.flags.response_ip == <server_ip>: Filters packets based on the DNS response IP address of a specific DNS server.  

**DNS Response Time Filters:**  

dns.time: Filters packets based on the time taken for DNS queries or responses.  
dns.time >= <time_in_seconds>: Filters packets based on a specific DNS response time threshold.  

**DNS Authoritative Answer Filters:**  

dns.flags.auth: Filters packets based on whether the DNS response is authoritative.  

**DNS Response Size Filters:**  

dns.len: Filters packets based on the length of the DNS response.  

**DNS Name Server Filters:**  

dns.ns: Filters packets based on the name server specified in DNS responses.  

**DNS Transaction ID Filters:**  

dns.id: Filters packets based on the DNS transaction ID.  

**DNS Response TTL Filters:**  

dns.a.ttl: Filters packets based on the TTL (Time to Live) value of DNS A records.  
dns.cname.ttl: Filters packets based on the TTL value of DNS CNAME records.  
dns.soa.ttl: Filters packets based on the TTL value of DNS SOA (Start of Authority) records.  

**DNS Zone Transfer Filters:**  

dns.flags.response == 0 && dns.flags.opcode == 5: Filters packets for DNS zone transfer requests.  
