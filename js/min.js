


var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var all =[];
function validate( ){
var site =siteName.value
if(site.length<3){
 document.querySelector('.overlay').classList.replace("d-none","d-flex");

}
}
// var nameRegex = /^\w{3,}(\s+\w+)*$/;
// var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

// sName.addEventListener("input",function(){
//     validate(sName, nameRegex)
// })
// sUrl.addEventListener("input",function(){
//     validate(sUrl, urlRegexRegex)
// })
// function validate(element, regex){
//     var testRegex = regex;

//     if(testRegex.test(element.value)){
//         element.classList.add("isValid");
//         element.classList.remove("isInvalid");

//     }else{
//         element.classList.add("isInvalid");
//         element.classList.remove("isValid");
//     }
//     document.querySelector(".cli").addEventListener("click", function(){
//         document.querySelector('.overlay').classList.replace("d-none","d-flex");

//     })

// }
function closeModal() {
 document.querySelector('.overlay').classList.add("d-none");
}


if( localStorage.getItem("save") !=null) {
     all = JSON.parse( localStorage.getItem("save"))
     display(all)
}
function submit() {
var site ={
    sName: siteName.value,
    sUrl: siteUrl.value
}
all.push(site)
display(all)
localStorage.setItem("save" , JSON.stringify( all ))
clear()
validate( )
}
function display(){
    var tBody =""
    for (var i = 0; i < all.length; i++) {
        tBody += `  <tr>
        <td>${i+1} </td>
        <td> ${all [i].sName}  </td>
        <td> <a href=" ${all [i].sUrl}}"><button class="btn btn-outline-danger "> <i class="fa-solid fa-eye pe-2"></i> Visit</button> </a></td>
        <td><button onclick="Delete(${i})" class="btn btn-outline-success "> <i class="fa-solid fa-trash-can"></i> Delete </button></td>

    </tr>`
    }
    document.getElementById("table-body").innerHTML = tBody;
}
function clear(){
    sName: siteName.value = ""
    sUrl: siteUrl.value = ""
}
function Delete(productsDelete) {
    all.splice(productsDelete,1)
    display(all)
}
// ================================================


