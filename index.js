const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
var count = 0;

btns.forEach((btn) => {
    btn.addEventListener('mousedown', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) count--;
        else if (styles.contains("increase")) count++;
        else count = 0;
        value.textContent = count;
        colorStyling(count);
    });
});

function colorStyling(count){
    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "#fff";
}

document.addEventListener('keydown', (event) => {
    if (event.key === '+'){
        value.textContent = ++count;
        colorStyling(count);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '-'){
        value.textContent = --count;
        colorStyling(count);
    }
});