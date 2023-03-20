console.log("Hello world, script linked successfully")
console.log(document)

function myAlert(element){
    alert("This is my custom alert message")
    element.innerHTML = "I have been clicked"
}

function changeBg(element){
    console.log(element)
    element.style.backgroundColor = "pink";
}

function over(element){
    element.style.width = "300px";
    // element.style.border = "2px solid red";
}

function out(element){
    element.style.width = "200px";
    // element.style.border = "none";
}

function removeBox(selector){
    var toBeRemoved = document.querySelector(selector)
    toBeRemoved.remove()
}

function oneByOne(){
    var boxesElement = document.querySelector("#boxes")
    boxesElement.firstElementChild.remove()
}

function toggleMode(element){
    var body = document.querySelector("body");
    if (element.value == "dark"){
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
    }
}