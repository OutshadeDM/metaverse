var selectField = document.getElementById('selectField');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName('options');


const handleClick = selectField.addEventListener("click", function () {
    list.classList.toggle("hide")

})

var list = document.getElementById('list');
selectField.onClick = function () {

}
console.log(selectText);
for (option of options) {
    option.addEventListener("click", function () {
        console.log(this.innerHTML)
        selectText.innerHTML = this.innerHTML;
        list.classList.toggle("hide")
    })

}