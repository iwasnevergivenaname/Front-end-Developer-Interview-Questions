# Coding Answers

Question: What is the value of `foo`?
```javascript
var foo = 10 + '20';

// returns '1020'
```

Question: What will be the output of the code below?
```javascript
console.log(0.1 + 0.2 == 0.3);

// returns false
```

Question: How would you make this work?
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Question: What value is returned from the following statement?
```javascript
"i'm a lasagna hog".split("").reverse().join("");

// returns "goh angasal a m'i"
```

Question: What is the value of `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) );
```

Question: What is the outcome of the two alerts below?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Question: What is the value of `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2);

// returns [ 1, 2 ]
```

Question: What is the value of `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

// returns undefined
```

Question: What does the following code print?
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');

// prints one, four, three, two
```

Question: What is the difference between these four promises?
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

Question: What will the code below output to the console and why?
```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// prints a defined? false b defined? true 
// following the logic of the code
// a variable b is declared and assigned the value of 3
// a variable a is declared and assigned the the value of our first placeholder, b
// our bottom console.logs are printing out the output to a conditional 
// does the type of this variable NOT MATCH undefined
// meaning it has an actual value assigned to it and isn't just declared
// b does have a value therefor does NOT match undefined and will print "true"
// a is pointing to b, which is a placeholder for it's own value. meaning as far as the machine can tell, a is undefined 


```

Question: Consider the two functions below. Will they both return the same thing? Why or why not?
```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

// because you have the curly bracket starting on the line after your return statement the function  
// stops executing before reaching the statement that is supposed to be inside the return
// the foo2() function will just return undefined 
// the foo1() function returns "Hello" because it's return statement is correctly structured and  
// the program doesn't stop before "bar" is reached
```
