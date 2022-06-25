function changecolor(color) {
    document.body.style.background = color;
}

function changefontstyle(font) {
    document.body.style.fontFamily = font;
}

var el = document.querySelectorAll('.color-switcher li');
var classesList = [];
//Loops For Element
for (var i = 0; i < el.length; i++) {
    //Get ClassesList
    classesList.push(el[i].getAttribute('data-color'));
    el[i].addEventListener(
        'click',
        function () {
            //Remove All Old Classes
            document.body.classList.remove(...classesList);
            //Add Current Class From Li Data Attribute
            document.body.classList.add(this.getAttribute('data-color'));
            //Add Data To Local Storage
            localStorage.setItem('pageColor', this.getAttribute('data-color'));
        },
        false
    );
}
