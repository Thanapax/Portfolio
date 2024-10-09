function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancle() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-400px)";
}

function changeText(section) {
    var contents = document.querySelectorAll('.content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var selectedContent = document.getElementById('content' + section);
    if(selectedContent){
        selectedContent.style.display = 'block';
    }
}

window.onload = function() {
    changeText(1);
};
//ตัว ChangeText ทำตาม https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp + chatGPTค่ะ
