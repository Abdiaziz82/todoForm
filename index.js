const form = document.getElementById("form1");
// const inputText = document.getElementById("input");
// const input = document.getElementById("submit")
const ol = document.getElementById("list")

form.addEventListener("submit",function(e){

    if(e.target.input.value === ""){
        alert("your input is empty")
 }
 else {
     let list = document.createElement("li");
     list.textContent = e.target.input.value;
     list.classList.add("list-group-item","category");
     ol.appendChild(list)
    
 } 
 e.target.input.value=""
save()

})

list.addEventListener("click" ,function(e){
    e.target.remove()
   
save()
    
} )





function save() {
    localStorage.setItem("data", ol.innerHTML);
}
function read() {
  ol.innerHTML=localStorage.getItem("data")
}
read()