 function postFunction(){
    
    var message = document.getElementById("message").value;
    if(document.getElementById("topic").innerText == "")
    {
        document.getElementById("topic").innerText = message;
    }
    else if(document.getElementById("reply1").innerText == "")
    {
        document.getElementById("reply1").innerText = message;
    }
    else if(document.getElementById("reply2").innerText == "")
    {
        document.getElementById("reply2").innerText = message;
    }
    else{
        alert("No more space for replies");
    }
 }

 function clearFunction(){
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
 }