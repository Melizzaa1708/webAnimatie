/***** Lizz Moraal - 22 mei 2020 - Web animatie   ********************************************/

/*********************************************************************************************/
/********************************   PHONE   **************************************************/
/*********************************************************************************************/

/******************************   Boot varen    **********************************************/

var geent = document.getElementById("Een_schrijfmachine");

geent.addEventListener("touchstart", function () {
    console.log('hellow');
    document.getElementById("Boot").style.animation = "wobble-hor-bottom 4s ease infinite";
});

/****************************   Lamp aan/uit   *************************************************/

var lamp2 = document.getElementById("Lamp");

lamp2.addEventListener("touchstart", function () {
    console.log('hellow');
    document.getElementById("Lichtstraal").style.display = "inline";
});

lamp2.addEventListener("touchend", function () {
    console.log('hellow');
    document.getElementById("Lichtstraal").style.display = "none";
});

/********************************   animeren zwart blad   **************************************************/

var zwart = document.getElementById("Zwart_blad");

zwart.addEventListener("touchstart", function () {
    console.log('test');
    document.getElementById("Zwart_blad").style.animation = "1s rotate reverse";
});

zwart.addEventListener("touchend", function () {
    console.log('test');
    document.getElementById("Zwart_blad").style.animation = "none";
});

/********************************   animeren rode vlak   **************************************************/

var roz = document.getElementById("Roze_vissenkom");

roz.addEventListener("touchstart", function () {
    console.log('test');
    document.getElementById("Roze_vissenkom").style.animation = "1s circle reverse";
});

roz.addEventListener("touchend", function () {
    console.log('test');
    document.getElementById("Roze_vissenkom").style.animation = "none";
});

/********************************   animeren groen vierkant   **************************************************/

var gro = document.getElementById("Groen_vissenk");

gro.addEventListener("touchstart", function () {
    console.log('test');
    document.getElementById("Groen_vissenk").style.animation = "1s rotate reverse";
});

gro.addEventListener("touchend", function () {
    console.log('test');
    document.getElementById("Groen_vissenk").style.animation = "none";
});

/********************************   animeren blauw vierkant   **************************************************/

var bl = document.getElementById("Blauw_typem");

bl.addEventListener("touchstart", function () {
    console.log('test');
    document.getElementById("Blauw_typem").style.animation = "rainbow 5s 0.9s infinite";
});

bl.addEventListener("touchend", function () {
    console.log('test');
    document.getElementById("Blauw_typem").style.animation = "none";
});

/********************************   animeren oranje vierkant   **************************************************/

var or = document.getElementById("Oranje_gebouw");

or.addEventListener("touchstart", function () {
    console.log('test');
    document.getElementById("Oranje_gebouw").style.animation = "1s spiral reverse";
});

or.addEventListener("touchend", function () {
    console.log('test');
    document.getElementById("Oranje_gebouw").style.animation = "none";
});


/*********************************************************************************************/
/********************************    PC     **************************************************/
/*********************************************************************************************/

/********************************   test   **************************************************/

console.log('hellow');

/***************************   lamp aan uit zetten   ****************************************/

var lamp = document.getElementById("Lamp");

lamp.addEventListener("mouseover", function () {
    document.getElementById("Lichtstraal").style.display = "inline";
});

lamp.addEventListener("mouseout", function () {
    document.getElementById("Lichtstraal").style.display = "none";
});

/***************************   auto's rijden   *********************************************/

var auto1 = document.getElementById("Auto_1");

auto1.addEventListener("click", function () {
    console.log('test');
    document.getElementById("Auto_1").style.animation = "rijden 5s ease";
    document.getElementById("Auto_2").style.animation = "rijden 5s 0.8s ease";
    document.getElementById("Auto_3").style.animation = "rijden 5s 0.9s ease";
});

var auto2 = document.getElementById("Auto_2");

auto2.addEventListener("click", function () {
    document.getElementById("Auto_1").style.animation = "rijden 5s ease";
    document.getElementById("Auto_2").style.animation = "rijden 5s 0.8s ease";
    document.getElementById("Auto_3").style.animation = "rijden 5s 0.9s ease";
});

var auto3 = document.getElementById("Auto_3");

auto3.addEventListener("click", function () {
    document.getElementById("Auto_1").style.animation = "rijden 5s ease";
    document.getElementById("Auto_2").style.animation = "rijden 5s 0.8s ease";
    document.getElementById("Auto_3").style.animation = "rijden 5s 0.9s ease";
});

var auto4 = document.getElementById("Auto_4");

auto4.addEventListener("click", function () {
    console.log('test');
    document.getElementById("Auto_4").style.animation = "rijden 5s ease";
    document.getElementById("Auto_5").style.animation = "rijden 5s 0.8s ease";
});

var auto5 = document.getElementById("Auto_5");

auto5.addEventListener("click", function () {
    console.log('test');
    document.getElementById("Auto_4").style.animation = "rijden 5s ease";
    document.getElementById("Auto_5").style.animation = "rijden 5s 0.8s ease";
});

/***************************   1 of meer vis  *********************************************/

var visse = document.getElementById("Vissenkom");

visse.addEventListener("mouseover", function () {
    document.getElementById("Vis").style.visibility = "hidden";
    document.getElementById("Vis2").style.visibility = "visible";
});

visse.addEventListener("mouseout", function () {
    document.getElementById("Vis").style.visibility = "visible";
    document.getElementById("Vis2").style.visibility = "hidden";
});

/***********************   Nieuwe tekst schrijfmachine   *******************************/

var typen = document.getElementById("Een_schrijfmachine");

typen.addEventListener("mouseover", function () {
    document.getElementById("Een_schrijfmachine").style.visibility = "hidden";
    document.getElementById("Gebruik").style.visibility = "visible";
});

/********************************   regenboog   **************************************************/

var rainbow = document.getElementById("Olivetti_Lettera_22");

rainbow.addEventListener("mouseover", function () {
    document.getElementById("Olivetti_Lettera_22").style.animation = "rainbow 5s 0.9s infinite";
});

rainbow.addEventListener("mouseout", function () {
    document.getElementById("Olivetti_Lettera_22").style.animation = "none";
});

/********************************   keyboard shizzle   *******************************************/

var body = document.querySelector("body");

body.onkeydown = getKeyAndMove;

function getKeyAndMove(e){
        var key_code=e.which||e.keyCode;
        switch(key_code){
            case 40: //down arrow kew
        console.log("keyboard werkt");
                voerfunctieuit();
        }
        switch(key_code){
            case 38: //up arrow kew
                voerfunctie2uit();
        }
        switch(key_code){
            case 37: //left kew
                voerfunctie3uit();
        }
        switch(key_code){
            case 39: //right kew
                voerfunctie4uit();
        }
}

function voerfunctieuit() {
             document.getElementById("Boot").style.animation = "wobble-hor-bottom2 4s ease ";

}

function voerfunctie2uit() {
             document.getElementById("Boot").style.animation = "wobble-hor-bottom 4s ease ";

}

function voerfunctie3uit() {
             document.getElementById("Wata").style.visibility = "visible";

}

function voerfunctie4uit() {
             document.getElementById("Wata").style.visibility = "hidden";

}
