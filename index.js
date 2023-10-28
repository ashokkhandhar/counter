const counter = document.getElementById('c');
var decrease = document.getElementById('d');
var reset = document.getElementById('r');
var increase = document.getElementById('i');

let c = 0;

counter.innerHTML = c;

increase.addEventListener('click', function(){
    counter.textContent = ++c;
    if(c > 0) counter.style.color = "green";
    else if(c == 0) counter.style.color = "black";
});
decrease.addEventListener('click', function(){
    counter.textContent = --c;
    if(c < 0) counter.style.color = "red";
    else if(c == 0) counter.style.color = "black";
});
reset.addEventListener('click', function(){
    c = 0;
    counter.textContent = c;
    counter.style.color = "black";
});
