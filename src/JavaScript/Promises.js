// Callback
function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}

setTimeout(() => {
    myFunction("I love You !!!");
}, 3000);
    

// Promise
let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(() => { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});

// Car promise
let carPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  carPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );