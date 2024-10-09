window.onload = pageLoad;

function pageLoad(){
	var a = new XMLHttpRequest();
    a.open("GET", "cloth.json");
    a.onload = function(){
        var jsdata = JSON.parse(a.responseText);
        console.log(jsdata);
        showData(jsdata);
    };
    a.onerror = function() { alert("ERROR!"); }; 
    a.send();
}

function showData(top){
	console.log(Object.keys(top).length);
    var showdiv = document.getElementById("layer")
    var keys = Object.keys(top);
    // var img = document.createElement("images");
    // img.src = data.pic;
    for(var i = 0; i < keys.length;i++){
        // var img = document.createElement("images");
        // img.src = data[keys[i]].pic;
        var temp = document.createElement("p");
        temp.innerHTML = top[keys[i]].brandname + " price : "+ top[keys[i]].price;
        showdiv.appendChild(temp);
    }
}