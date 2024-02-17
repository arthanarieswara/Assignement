#  **Task 1:**
## **1. Write a blog on the difference between HTTP 1.1 and HTTP 2**

### **Table of Content**
________________________________________________________________________________________

1. HTTP 1.1
2. HTTP 2
3. Difference between HTTP 2 and HTTP 1.1
+ Multiplexing
+ Server Push
+ Header Compression
+ Binary Protocol
+ Server Push
+ Compatibility and Adoption
4. Why is HTTP 2 faster than HTTP 1.1
5. What is prioritization
6. Prioritization in HTTP 2
7. Conclusion


### **HTTP 1.1:**
_______________________________________________________________________________________

HTTP stands for Hypertext Transfer Protocol, and it is the basis for almost all web applications. More specifically, HTTP is the method computers and servers use to request and send information. For instance, when someone navigates to Cloudflare on their laptop, their web browser sends an HTTP request to the Cloudflare servers for the content that appears on the page. Then, Cloudflare servers send HTTP responses with the text, images, and formatting that the browser displays to the user.
### **HTTP 2:**
_______________________________________________________________________________________

In 2015 a new version of HTTP called HTTP 2 was created. HTTP 2 solves several problems that the creators of HTTP 1.1 did not anticipate. In particular, HTTP 2 is much faster and more efficient than HTTP 1.1. One of the ways in which HTTP 2 is faster is in how it prioritizes content during the loading process.
### **Difference between HTTP 2 and HTTP 1.1:**
_______________________________________________________________________________________

+ **_Multiplexing:_** HTTP 1.1 loads resources one after the other, so if one resource cannot be loaded, it blocks all the other resources behind it. In contrast, HTTP 2 can use a single TCP connection to send multiple streams of data at once so that no one resource blocks any other resource. HTTP 2 client knows which stream each binary message belongs to.
+ **_Server Push:_** Typically, a server only serves content to a client device if the client asks for it. However, this approach is not always practical for modern webpages, which often involve several dozen separate resources that the client must request. HTTP 2 solves this problem by allowing a server to "push" content to a client before the client asks for it. The server also sends a message letting the client know what pushed content to expect.
+ **_Header Compression:_** small files load more quickly  than large ones. To speed up web performance, both HTTP 1.1 and HTTP 2 compress HTTP messages to make them smaller. However, HTTP 2 uses a more advanced compression method called HPACK that eliminates redundant information in HTTP header packets. This eliminates a few dytes fromm every HTTPP packets. Given the volume of HTTP packets involved in loading even a single webpage, those bytes add up quickly , resulting in faster loading.
+ **_Binary Protocol:_** While HTTP/1.1 relies on textual representations of data, HTTP/2 employs a binary framing layer. This binary format reduces parsing complexity, leading to faster processing and reduced overhead. Additionally, the binary nature of HTTP/2 facilitates more efficient compression and optimized transmission of data, further enhancing performance.
+ **_Server Push:_** HTTP/2 introduces server push, a mechanism that enables servers to proactively send resources to the client before they are requested. This preemptive delivery of assets, such as images, scripts, and stylesheets, eliminates the need for subsequent requests, thereby reducing latency and improving page load times.
+ **_Compatibility and Adoption:_** HTTP/1.1 enjoys widespread compatibility across web servers, browsers, and networking infrastructure, making it the de facto standard for web communication. However, the adoption of HTTP/2 has been steadily increasing, with major web browsers and servers adding support for the protocol. While HTTP/2 requires secure connections (TLS), it offers backward compatibility through mechanisms like ALPN (Application-Layer Protocol Negotiation), ensuring seamless integration with existing infrastructure.
### **Why is HTTP 2 faster than HTTP 1.1**
_______________________________________________________________________________________

HTTP 2 is faster than HTTP 1.1 because it uses a more advanced compression method to eliminate redundant information in HTTP header packets. This method, called HPACK, eliminates a few bytes from every HTTP packet. Because a single webpage involves many HTTP packets, those bytes add up quickly, resulting in faster loading. HTTP 2 also streamlines communication between the browser and the server. It eliminates redundant headers and compresses the remaining headers to drastically decrease the amount of data repeated during a session
### **What is Prioritization?:**
_______________________________________________________________________________________

Prioritization refers to the order in which pieces of content are loaded. Suppose a user visits a news website and navigates to an article. Should the photo at the top of the article load first or Should the text of the article load first? Or should the banner ads load first?
Prioritization affects a webpage's load time. For example, certain resources, like JavaScript files, may b;=lock the rest of the page from loading if they have to load first. More of the page can load at once if these render-blocking resources load last. In addition, the order in which these page resources load affects how the user perceives page load time. If only behind-the-scenes content (like CSS files) or content the user can't see immediately (like banner ads at the bottom of the page) loads first, the user will think the page is not loading at all. If the content that's most important to the user loads first such as the image at the top of the page, then the user will perceive the page as loading faster.
HTTP 2 offers a feature called **_Weighted Prioritization._** This allows developers to decide which page resources will load first, every time. In HTTP 2, when a client makes a request for a webpage, the server sends several streams of data to the client at once, instead of sending one thing after another. This method of data delivery is known as **_Multiplexing._** Developers can assign each of these data streams a different weighted value, and the value tells the client which data stream to render first.
### **Conclusion:**
_______________________________________________________________________________________

In conclusion, the transition from HTTP/1.1 to HTTP/2 represents a significant advancement in web communication protocols, offering several key benefits over its predecessor.HTTP/2 introduces multiplexing, allowing multiple requests and responses to be sent over a single TCP connection concurrently. This reduces latency and improves overall performance, especially for websites with numerous resources to load. Additionally, HTTP/2 employs a binary framing layer and header compression techniques, resulting in more efficient data transmission and reduced bandwidth usage compared to the textual format used in HTTP/1.1. Moreover, HTTP/2 introduces server push functionality, enabling servers to proactively send resources to clients before they are requested, further optimizing page load times and enhancing user experience. The protocol also supports stream prioritization, allowing clients to assign weights to different resources based on their importance, ensuring critical assets are delivered promptly. Overall, the adoption of HTTP/2 offers improved performance, reduced latency, and enhanced efficiency compared to HTTP/1.1, making it a valuable upgrade for modern web applications and services.
