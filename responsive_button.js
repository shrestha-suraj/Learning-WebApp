function changeText(){
    var tElement=document.getElementById("change123");
    tElement.innerHTML="This is what happens when button is clicked and js code is in Javascript file.";
}

$("#button123").click(function(){
    var tElementReturns=document.getElementById("change12345");
    tElementReturns.innerHTML="This is what happens when you have jQuery Running."
})

$("#add_texts").click(function(){
    var text1=documnet.getElementById("text111").value;
    var text2=document.getElementById("text222").value;
    var textAdd=text1+text2;
    var dispalyHere=document.getElementById("display_add_text");
    dispalyHere.innerHTML=textAdd;
})