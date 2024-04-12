//initialize count as 0
//listen for clicks
//increase count to variable
//change count in html element
let counter = document.getElementById('counter')
console.log(counter);
let count = 0;
function Increment() { 
    count++
    
  counter.innerHTML = count;
 
}

Increment()
