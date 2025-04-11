var inp = document.getElementById('inp');
var sub = document.getElementById('sub');
var ul = document.getElementById('ul')


function clr(){
    ul.innerHTML = "";
}

function edit(e){
console.log(e)
    var getValue = prompt("Enter Your Value");

}

function submit(){
    if(inp.value == ""){
        alert("Enter Your Value")
    }else{
        ul.innerHTML += `<li> ${inp.value} <span> <button class=" btn btn-primary onclick="edit(this)" >Edit</button> <button class="btn btn-secondary" onclick="this.parentNode.parentNode.remove()">Delete</button></span> </li>`;

        inp.value = "";
    }
   



}
