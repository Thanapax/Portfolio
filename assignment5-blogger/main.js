
alert("Welcome to the Forum !");

window.onload = idTop;
function idTop(){
    var idTop = document.getElementById("top");
    idTop.innerHTML = "Welcome to the Forum !";
    var topic = document.getElementById("topic");
    topic.innerHTML = "Topic";
    var reply1 = document.getElementById("reply1");
    reply1.innerHTML = "reply1";
    var reply2 = document.getElementById("reply2");
    reply2.innerHTML = "reply2";
}

var post = 0;
function postFunction(){
    let message = document.getElementById("message").value;
    post++;

    if(post == 1){
        var topic = document.getElementById("topic");
        topic.innerHTML = "Topic : " + message;
    } else if (post == 2){
        var reply1 = document.getElementById("reply1");
        reply1.innerHTML = "reply1 : " + message;
    } else if (post == 3){
        var reply2 = document.getElementById("reply2");
        reply2.innerHTML = "reply2 : " + message;
    } 

    document.getElementById("message").value = '';
}

function clearFunction(){
    var topic = document.getElementById("topic");
    topic.innerHTML = "Topic : ";
    var reply1 = document.getElementById("reply1");
    reply1.innerHTML = "reply1 : ";
    var reply2 = document.getElementById("reply2");
    reply2.innerHTML = "reply2 : ";
    post = 0;
}


