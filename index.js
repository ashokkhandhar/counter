const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
var count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) count--;
        else if (styles.contains("increase")) count++;
        else count = 0;
        colorStyling(count);
        value.textContent = count;
    });
});
function colorStyling(count){
    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count === 0) value.style.color = "black";
}
document.addEventListener('keyup', (event) => {
    if (event.key === '+'){
        value.textContent = ++count;
        colorStyling(count);
    }
}, false);
document.addEventListener('keyup', (event) => {
    if (event.key === '-'){
        value.textContent = --count;
        colorStyling(count);
    }
 }, false);