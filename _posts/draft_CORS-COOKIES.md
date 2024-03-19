---
layout: post
custom_excerpt: A reference for setting up cross-domain (CORS) cookies
excerpt_image: 
---
# Requirements
## Server-Side
### CORS Headers
On the server side, these CORS headers must be set.

- Access-Control-Allow-Origin: http://localhost:port

This <b>must</b> be set to localhost, because [cookies with the secure attribute are only sent on https or localhost](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies). It also <b>cannot</b> be set to Any(*), as then the [cookies will not be included with the client-side request](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials).

- Access-Control-Allow-Headers: Example, Etc, Etc2

This <b>must</b> be set to an explicit list and <b>not</b> a wildcard (*).

- Access-Control-Allow-Methods: POST, GET, ETC

Once again, this <b>must</b> be set to an explicit link and not a wildcard (*).

- Access-Control-Allow-Credentials: true

This tells the client that they can send cookies with their request.

[This link](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#credentialed_requests_and_wildcards) shows the guidelines on wildcards and credentialed requests, for reference.

### Cookie Settings
These are the attributes that must be supplied by the server along with the Set-Cookie Response.

- SameSite=None;

This indicates whether the cookie can be sent to different sites. Because we're setting up Cross-Origin cookies, this must be set to "None", indicating that they can be sent cross-site. [See this link for more info.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#samesite_attribute)

- Secure;

This is required because SameSite is set to None. When this option is set, cookies are sent in https contexts, except for localhost. So it's no problem when doing local development, but when deploying remember to serve to https and set SSL certs.

This is all you need. <b>Don't</b> set the Domain attribute, because localhost does not qualify as a proper domain.

## Client Side
For the client side, you have to explicitly set that you want to include credentials with your request. For JavaScript, this is easy for fetch and [xmlHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials). However, if you're using a different language and libraries, you have to find the appropriate flag or setting or whatever to enable cookie functionality

# End
This should be all you need. If you're encountering any issues, Chrome DevTools has a nicer interface for cookies as compared to Firefox DevTools. Good luck.

I wrote this because I've been wrangling with CORS cookies again, and probably will wrangle with them in the future as well. Writing this allows me to internalize these concepts. This is heavily based on [this stackoverflow post](https://stackoverflow.com/questions/46288437/set-cookies-for-cross-origin-requests#46412839), but I added some more explanations and links for reference.



