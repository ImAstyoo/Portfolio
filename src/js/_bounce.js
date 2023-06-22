let bounceID = document.getElementById("bounce");
function hover() {
    document.getElementById("cvicon").classList.add("fa-bounce");
    document.getElementById("cvicon").classList.add('primary-color');
    document.getElementById("cvtxt").classList.add('primary-color');
}

function unhover() {
    document.getElementById("cvicon").classList.remove("fa-bounce");
    document.getElementById("cvicon").classList.remove('primary-color');
    document.getElementById("cvtxt").classList.remove('primary-color');
}