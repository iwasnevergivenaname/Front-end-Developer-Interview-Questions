function doSomething(){
  console.log("oops")
}


doSomething().then(function () {
  console.log("this is the first promise")
  return doSomethingElse();
});

doSomething().then(function () {
  console.log("this is the second promise")
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
