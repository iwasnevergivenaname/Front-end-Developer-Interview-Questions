# JavaScript Answers


* Explain event delegation.
    - this is used to create multiple listening events on a single event listener. this action is acheived through
    event propagation. 
* Explain how `this` works in JavaScript.
    - `this` creates and binds an object to the current execution context.
* Can you give an example of one of the ways that working with `this` has changed in ES6?
    - `this` became a bit smarter and doesn't require binding anymore in as many cases anymore
* Explain how prototypal inheritance works.
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
    - `null` means there, is a variable 
    - `undefined` means there is a variable declared but no value that can be found for it
    - undeclared is a variable that has not been declared before it an initialization was attempted 
* How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* What language constructions do you use for iterating over object properties and array items?
* Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?
* What's a typical use case for anonymous functions?
* What's the difference between host objects and native objects?
    - host objects are supplied by their environment, likes node.js supplies NodeList, and they are not always the same
    - native objects are built in javascript objects and do not require any package installation to use
* Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
    - `function Person(){}` is declaring an empty function named Person
    - `var person = Person()` is declaring the variable person to have the value of the function Person
    - `var person = new Person()` is declaring the person to be the new instance of the function Person and therefor 
    giving it it's own allocated space in the memory
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
    - `function foo(){}` is an empty function named foo and can be accessed through it's name, foo
    - `var foo = function(){}` is a variable assigned the value of an anonymous empty function, this function cannot be 
    accessed outside the variable foo because it is anonymous
* Can you explain what `Function.call` and `Function.apply` do? What's the notable difference between the two?
* Explain `Function.prototype.bind`.
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain "hoisting".
    - a program runs top to bottom, which means things cannot be used before they are created. when something is hoisted,
    however, it *can* be used before it's creation. functions are hoisted. 
* Describe event bubbling.
* Describe event capturing.
* What's the difference between an "attribute" and a "property"?
    - attributes refer to additional information of an object
    - properties describe the characteristics of an object
* What are the pros and cons of extending built-in JavaScript objects?
* What is the difference between `==` and `===`?
    - `==` tests for equality abstractly, it quietly performs automatic type conversion if needed to asses equality 
    of value. `'1' == 1 // return true` because when both converted to strings, they do match perfectly.
    - `===` is a much more strict type of comparision and does not alter the types, because it is assessing equality by 
    **and** data type.
* Explain the same-origin policy with regards to JavaScript.
* Why is it called a Ternary operator, what does the word "Ternary" indicate?
* What is strict mode? What are some of the advantages/disadvantages of using it?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* Explain the difference between mutable and immutable objects.
* What is an example of an immutable object in JavaScript?
* What are the pros and cons of immutability?
* How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* What is event loop?
* What is the difference between call stack and task queue?
    - a call stack has a Last In, First Out flow, this becomes useful when you want to utilize functions that "remember"
    previous operations, like the undo option.
    - a queue has a First In, First Out flow, this functionality is useful for keeping a certain order of information, 
    like pages sent to the printer.
* What are the differences between variables created using `let`, `var` or `const`?
    - `var` used to be the only way to create a variable, until ES6. it shares mutability with `let` but it has a function
    available scope.
    - `let` is a declaration introduced in ES6, it allows for mutability of variables. this is block scoped.
    - `const` is also a new declaration from ES6, and this creates immutability of variables.
    
* What are the differences between ES6 class and ES5 function constructors?
* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
* What advantage is there for using the arrow syntax for a method in a constructor?
* What is the definition of a higher-order function?
* Can you give an example for destructuring an object or an array?
* Can you give an example of generating a string with ES6 Template Literals?
    - string interpolation - backticks => `i want to insert ${this}`  <= backticks
* Can you give an example of a curry function and why this syntax offers an advantage?
* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
* How can you share code between files?
    - you can export code that you have written by writing `export default [functionName]` at the bottom of the file 
    with the code in it.
    - in the files you want to access the code you can import it at the top of your file by writing `import 
    functionName from '../extraCode.js'`, you can then use it as if it were declared and defined in that very file.
* Why you might want to create static class members?
* What is the difference between `while` and `do-while` loops in JavaScript?
    - `do-while` will always complete it's loop one time before checking on it's stopping condition (the `while` statement).
    - `while` loop will only run if it's stopping condition has not been met yet.
* What is a promise? Where and how would you use promise?
