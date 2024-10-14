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

    var div = document.querySelectorAll("#layer div");
    var keys = Object.keys(top);

    for(var i = 0; i < keys.length;i++){
        var showClothInDiv = div[i];

        var img = document.createElement("img");
        img.src = top[keys[i]].pic;

        var temp = document.createElement("p");
        temp.innerHTML = top[keys[i]].brandname + "<br>" + "price : "+ top[keys[i]].price;
        
        showClothInDiv.appendChild(img);
        showClothInDiv.appendChild(temp);
    }

	/*console.log(Object.keys(top).length);
    var showdiv = document.getElementById("#layer div");
    var keys = Object.keys(top);
    // var img = document.createElement("images");
    // img.src = data.pic;
    for(var i = 0; i < keys.length;i++){
        // var img = document.createElement("images");
        // img.src = data[keys[i]].pic;
        var temp = document.createElement("p");
        temp.innerHTML = top[keys[i]].brandname + " price : "+ top[keys[i]].price;
        showdiv.appendChild(temp);
        // showdiv.innerHTML += temp.innerHTML;
    }*/
}

// window.onload = pageLoad;

// function pageLoad() {
//     var a = new XMLHttpRequest();
//     a.open("GET", "cloth.json");
//     a.onload = function() {
//         var jsdata = JSON.parse(a.responseText);
//         console.log(jsdata);
//         showData(jsdata);
//     };
//     a.onerror = function() {
//         alert("ERROR!");
//     };
//     a.send();
// }

// function showData(top) {
//     var divs = document.querySelectorAll("#layer div");  // เลือก div ที่อยู่ใน #layer ทั้งหมด
//     var keys = Object.keys(top);

//     for (var i = 0; i < keys.length; i++) {
//         var currentDiv = divs[i];  // เลือก div ที่จะเพิ่มข้อมูลในแต่ละรอบ

//         // เพิ่มรูปภาพ
//         var img = document.createElement("img");
//         img.src = top[keys[i]].pic;
//         img.alt = top[keys[i]].brandname;
//         img.width = 100;  // ปรับขนาดรูปตามความเหมาะสม

//         // เพิ่มแบรนด์และราคา
//         var temp = document.createElement("p");
//         temp.innerHTML = top[keys[i]].brandname + "<br>Price: " + top[keys[i]].price + " บาท";

//         // แทรกรูปภาพและข้อมูลลงใน div ที่มีอยู่แล้ว
//         currentDiv.appendChild(img);
//         currentDiv.appendChild(temp);
//     }
// }


// window.onload = pageLoad;

// function pageLoad() {
//     var a = new XMLHttpRequest();
//     a.open("GET", "cloth.json");
//     a.onload = function() {
//         if (a.status === 200) {  // ตรวจสอบว่าการตอบสนองจาก server ถูกต้อง
//             var jsdata = JSON.parse(a.responseText);
//             console.log(jsdata);
//             showData(jsdata);
//         } else {
//             alert("Failed to load data: " + a.status);
//         }
//     };
//     a.onerror = function() { 
//         alert("ERROR!"); 
//     }; 
//     a.send();
// }

// function showData(top) {
//     console.log(Object.keys(top).length);
//     var showdiv = document.getElementById("layer");  // ใช้ div ที่มีอยู่แล้วใน HTML
//     var keys = Object.keys(top);

//     for (var i = 0; i < keys.length; i++) {
//         // ใช้กรอบที่มีอยู่แล้วใน HTML และเพิ่มข้อมูลลงในกรอบนั้น
//         // สร้าง HTML เพื่อแสดงข้อมูลสินค้าแต่ละชิ้น
//         var content = `
//             <div class="product">
//                 <img src="${top[keys[i]].pic}" alt="${top[keys[i]].brandname}" width="100">
//                 <p>${top[keys[i]].brandname} - price: ${top[keys[i]].price} บาท</p>
//             </div>
//         `;

//         // เพิ่มข้อมูลเข้าไปใน div ที่มี id="layer"
//         showdiv.innerHTML += content;  // แทรกข้อมูลในกรอบที่มีอยู่แล้ว
//     }
// }
