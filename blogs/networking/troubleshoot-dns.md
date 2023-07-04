# DNS Protocol:  
* Domain Name Resolution Request:

  - A client application (such as a web browser) initiates a DNS resolution request to resolve a domain name (e.g., www.example.com) into an IP address.
  - If the client has previously resolved the domain and has the corresponding IP address cached, it can skip the DNS resolution process and use the cached value.  
* Recursive DNS Resolution:  

  - If the IP address is not cached, the client sends the DNS resolution request to a recursive resolver (typically provided by the ISP or a DNS service).
  - The recursive resolver acts as an intermediary and takes responsibility for resolving the domain name.  
* Iterative DNS Resolution:  

  - The recursive resolver starts the iterative resolution process by sending the DNS request to the root nameservers.
  - The root nameservers respond with a referral to the appropriate Top-Level Domain (TLD) nameservers based on the requested domain extension (e.g., .com, .org).  
* TLD Nameservers:    

  - The recursive resolver sends a new DNS request to the TLD nameservers specified in the referral.  
  - The TLD nameservers respond with a referral to the authoritative nameservers responsible for the requested domain.  
* Authoritative Nameservers:  

  - The recursive resolver sends a DNS request to the authoritative nameservers for the requested domain.  
  - The authoritative nameservers respond with the IP address associated with the requested domain name.  
* Response Propagation:  

  - The recursive resolver receives the IP address from the authoritative nameservers and stores it in its cache.  
  - The recursive resolver sends the IP address back to the client that initiated the DNS resolution request.  
* Caching:  

  - The client application receives the IP address from the recursive resolver and can now establish a connection with the corresponding server.  
  - The recursive resolver also caches the IP address along with the associated domain name for future use, reducing the need for repeated DNS resolution requests.  
* Time-to-Live (TTL):  

  - DNS records have a Time-to-Live (TTL) value that specifies how long the record can be cached before it expires.  
  - When the TTL expires, the recursive resolver needs to perform DNS resolution again to obtain the updated IP address.  

This step-by-step explanation provides an overview of the DNS resolution process, which involves multiple levels of DNS servers working together to translate domain names into IP addresses. DNS plays a crucial role in translating human-readable domain names into the numerical IP addresses required for communication over the Internet.

# DNS Troubleshooting commands:  
Here are some Linux commands that can be helpful for troubleshooting DNS issues:

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
