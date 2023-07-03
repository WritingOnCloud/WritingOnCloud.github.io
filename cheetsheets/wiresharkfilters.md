## Ethernet Filters:  

eth.addr: Ethernet address filter.  
eth.dst: Destination Ethernet address filter.  
eth.src: Source Ethernet address filter.  

## IP Address Filters:  

ip.addr: IP address filter.  
ip.src: Source IP address filter.  
ip.dst: Destination IP address filter.  

## Protocol Filters:  

tcp: TCP protocol filter.  
udp: UDP protocol filter.  
icmp: ICMP protocol filter.  
arp: ARP protocol filter.  
dns: DNS protocol filter.  
http: HTTP protocol filter.  
smtp: SMTP protocol filter.  
ftp: FTP protocol filter.  
ssh: SSH protocol filter.  
telnet: Telnet protocol filter.  

## Port Filters:  

tcp.port: TCP port filter.  
udp.port: UDP port filter.  
dns.qry.name: DNS query name filter.  
http.host: HTTP host filter.  
http.request.method: HTTP request method filter.  
smtp.rcpt_to: SMTP recipient filter.  
ftp.request.command: FTP command filter.  
ssh.version: SSH version filter.  
telnet.data: Telnet data filter.  

## ICMP Filters:  

icmp.type: ICMP type filter.  
icmp.code: ICMP code filter.  

## VLAN Filters:

vlan.id: VLAN ID filter.  

## MAC Filters:  

wlan.sa: WLAN source MAC address filter.  
wlan.da: WLAN destination MAC address filter.  
wlan.ta: WLAN transmitter MAC address filter.  
wlan.ra: WLAN receiver MAC address filter.  

## SSL/TLS Filters:  

ssl: SSL/TLS filter.  
ssl.handshake.type: SSL/TLS handshake type filter.  
ssl.record.version: SSL/TLS record version filter.  
ssl.app_data: SSL/TLS application data filter.  

## Wi-Fi Filters:   

wlan.ssid: WLAN SSID filter.  
wlan.fc.type_subtype: WLAN frame control type and subtype filter.  
wlan.fc.retry: WLAN frame control retry filter.  
wlan.fc.type: WLAN frame control type filter.  

## Frame Filters:  

frame.len: Frame length filter.  
frame.time: Frame timestamp filter.  
frame.protocols: Frame protocols filter.  

These filters can be combined using logical operators (e.g., && for AND, || for OR) to create more complex filter expressions.   
