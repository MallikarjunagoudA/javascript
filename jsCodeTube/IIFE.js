//self exe ananymous function
//or immidiate invoked fun expression

var hello =function sayhi() {
    console.log("hi");
    console.log("hello");
}

hello();

//use
(function sayhi() {
    console.log("hi");
    console.log("hello");
})();
