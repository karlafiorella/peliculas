function registro (){
   
   var ajaxRequest = new XMLHttpRequest();
     ajaxRequest.onreadystatechange = function(){
       if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
         document.getElementById("sendmessage").innerHTML = "Tus datos han sido enviados! Pronto te contactaremos.";
       }
     }

    // ajaxRequest.open("GET", "documento.txt", true);
     ajaxRequest.send();

}