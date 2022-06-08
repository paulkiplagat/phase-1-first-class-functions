function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log("my named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("my anonymous function");
  }