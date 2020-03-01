// creating the close buttons 
var myList = document.getElementsByTagName("li");
var index;
for(index =0; index< myList.length; index ++){
  var aSpanTag = document.createElement("SPAN");
  var sometxt = document.createTextNode("\u00D7");
  aSpanTag.className = "close";
  aSpanTag.appendChild(sometxt);
  myList[index].appendChild(aSpanTag);


}
// close Button
var closeButton = document.getElementsByClassName("close");

for(i=0 ; i< closeButton.length; i++){
    closeButton[i].onclick = function(){
        var theDiv = this.parentElement;
        theDiv.style.display = none ;
    }
}





// creating todo

var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
    console.log ();
    if (event.target.tagName === "li"){
        event.target.classList.toggle('checked');

    }

});
function createNewElement(){
    var li=document.createElement('li');
    var theinput =document.getElementById("the-input").Value;
    var textnode=document.createTextNode("the-input");
    li.appendChild(textnode);
    
   

    if("the-input" ===''){
         alert("Hey this cannot be empty")
    } else {
        document.getElementById("the-ul").appendChild(li);
    }  
   
    document.getElementById("the-input").Value="";

    var thePanTag = document.createElement("span");
    var txt = document.createTextNode("\u00d7");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag);
   
    // removing items click button

}

