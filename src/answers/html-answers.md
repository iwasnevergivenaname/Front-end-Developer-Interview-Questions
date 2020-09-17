# HTML Answers


* What does a `doctype` do?
    - short for Document Type Declaration, it informs the web browser about the type and version of HTML being used, and
    therefore can display it correctly
* How do you serve a page with content in multiple languages?
* What kind of things must you be wary of when designing or developing for multilingual sites?
* What are `data-` attributes good for?
    - they are used to store custom private data to the page or application while giving us the ability to 
    embed custom data attributes onto HTML elements
        - the attribute name shouldn't possess upper case letters, and must start with the `data-` prefix
        - the attribute value can be any string
        - `<h2 data-animal-type="sloth">sloth</h2>`
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
    - `<script>` defines the client side script and runs after the DOM is loaded
    - `<script async>` will execute at its opportunity, after it downloads it runs asynchronously while the page is parsing
    - `<script defer>` will only execute in the order of occupancy on the actual page, and after the page has been parsed
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? 
Do you know any exceptions?
    - HTML pages render from top to bottom, so because we have spent so much making things look nice, we want to make sure 
    our CSS loads first thing to assure the user isn't exposed to anything unsightly. we also put the script tags at the 
    bottom of the body to make sure all of our DOM elements load before anything starts to execute.
* What is progressive rendering?
    - this renders the webpage from the server and streams to the client at once, instead of waiting for the whole
    page to be rendered
* Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the 
content of this attribute.
* Have you used different HTML templating languages before?
* What is the difference between `canvas` and `svg`?
    - both are associated with 2d graphics but 
    - svg is a language for describing graphics in xml which means every element is DOM accessible, and it gives a 
    better output with a number of objects or a larger surface. it produces vector based images composed of shapes.
    - canvas can draw 2d graphics in javascript, it does not store the drawn graphics in the browser. this performs 
    better with a larger object or smaller space, and is composed of pixels.
