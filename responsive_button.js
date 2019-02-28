function changeText(){
    var tElement=document.getElementById("change123");
    tElement.innerHTML="This is what happens when button is clicked and js code is in Javascript file.";
}

$("#button123").click(function(){
    var tElementReturns=document.getElementById("change12345");
    tElementReturns.innerHTML="This is what happens when you have jQuery Running."
})