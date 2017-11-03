
//function countAge(dog){
    //const newAge = dog * 7;
    ////if(newAge > 18 ){
       // console.log('your dog is very old' )
   //// } else if (newAge < 18){
     //   console.log('your dog is very young' )
    //}else{
        //console.log('your dog is ' + newAge + ' years old');
   // }

//}

//countAge(2);

//const typ  = window.getComputedStyle(li).getPropertyValue("opacity");

const input = document.querySelector(".chat");
const buttom = document.querySelector(".btn");
const niceList = document.querySelector(".list")
buttom.addEventListener("click", addMember)
function addMember(e) {
    console.log(input.value) 
    e.preventDefault()
    const item = document.createElement("li");
    item.innerHTML = input.value;
    item.appendChild(newDow());
    niceList.appendChild(item)
    item.classList.add("list-item")
    input.value="";
}

function newDow (){
    const dop = document.createElement('i');
    dop.innerHTML="x";
    dop.onclick = remove;
    return dop;
}

function remove() {
    niceList.removeChild(this.parentNode)
}
