# HTML Answers


* What does a `doctype` do?
* How do you serve a page with content in multiple languages?
* What kind of things must you be wary of when designing or developing for multilingual sites?
* What are `data-` attributes good for?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
     - cookies store data that needs to pass requests back to the server. they have a short expiration and must be used to
        send smaller piece of data (<4KB) and can be read server side. these can be made secure so they cannot be accessed
        on the client side. 
     - session storage is stored only for that session, meaning until that browser or tab is closed. data from the session
        is never transferred to the server, and the storage limit is larger than a cookie (at least 5MB). can only be read on 
        the client side.
     - local storage stores data for an unlimited amount of time and can only be cleared intentionally through clearing the 
        cache, or through javascript. this has the largest amount of storage available. can only be read on the client side.

* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? 
Do you know any exceptions?
    - HTML pages render from top to bottom, so because we have spent so much making things look nice, we want to make sure 
    our CSS loads first thing to assure the user isn't exposed to anything unsightly. we also put the script tags at the 
    bottom of the body to make sure all of our DOM elements load before anything starts to execute.
* What is progressive rendering?
* Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the 
content of this attribute.
* Have you used different HTML templating languages before?
* What is the difference between `canvas` and `svg`?
