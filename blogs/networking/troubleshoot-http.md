## HTTP Filters:

http: Filters all HTTP packets.  
http.host: Filters packets based on the host header value.  
http.request.method: Filters packets based on the HTTP request method (e.g., GET, POST).  
http.response.code: Filters packets based on the HTTP response status code.  
http.cookie: Filters packets based on the presence of specific HTTP cookies.  
http.request.uri: Filters packets based on the requested URI.  

## Content Filters:  

http.request: Filters packets containing HTTP request messages.  
http.response: Filters packets containing HTTP response messages.  
http.content_type: Filters packets based on the HTTP Content-Type header value.  

## Header Filters:  

http.request.header: Filters packets based on specific HTTP request headers.  
http.response.header: Filters packets based on specific HTTP response headers.  

## Status Code Filters:  

http.response.code == <status_code>: Filters packets based on a specific HTTP response status code.  

## Authentication Filters:  

http.auth: Filters packets containing HTTP authentication headers.  
http.authbasic: Filters packets containing Basic HTTP authentication headers.  
http.authdigest: Filters packets containing Digest HTTP authentication headers.  

## Cache Filters:  

http.cache_control: Filters packets based on the HTTP Cache-Control header value.  
http.expires: Filters packets based on the HTTP Expires header value.  

## Redirection Filters:  

http.location: Filters packets based on the HTTP Location header value.  

## Response Size Filters:  

http.response.code >= 200 && http.response.code < 300 && frame.len > 0: Filters successful HTTP responses with non-empty content.     

## Request Method Filters:  

http.request.method == <method>: Filters packets based on a specific HTTP request method (e.g., GET, POST, PUT).  

## Response Headers Filters:  

http.response.header: Filters packets based on specific HTTP response headers.  
http.response.header.name == <header_name>: Filters packets based on a specific HTTP response header name.  

## Request Headers Filters:  

http.request.header: Filters packets based on specific HTTP request headers.  
http.request.header.name == <header_name>: Filters packets based on a specific HTTP request header name.  

## Content-Length Filters:  

http.content_length: Filters packets based on the HTTP Content-Length header value.  
http.content_length == <length>: Filters packets based on a specific Content-Length value.  

## HTTP Versions Filters:  

http.version: Filters packets based on the HTTP version.  
http.version == <version>: Filters packets based on a specific HTTP version (e.g., 1.0, 1.1, 2.0).  

## GZIP Compression Filters:  

http.accept_encoding: Filters packets based on the HTTP Accept-Encoding header value, which indicates support for gzip compression.  

## Request URI Filters:  

http.request.uri contains <string>: Filters packets based on a specific string present in the HTTP request URI.  

## Referrer Filters:  

http.referer: Filters packets based on the HTTP Referer header, which specifies the URL of the referring page.  

## User-Agent Filters:  

http.user_agent: Filters packets based on the User-Agent header, which provides information about the client application or browser.  

## Request/Response Time Filters:  

http.time: Filters packets based on the time taken for the HTTP request/response.  
http.time >= <time_in_seconds>: Filters packets based on a specific request/response time threshold.  


These filters can help you focus on specific aspects of HTTP traffic, such as specific requests, responses, headers, authentication, caching, and more.   
They allow you to analyze and troubleshoot HTTP-related issues more effectively in Wireshark.  
