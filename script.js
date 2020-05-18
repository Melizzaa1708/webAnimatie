console.log('hellow');

var lamp = document.getElementById("Lamp");

lamp.addEventListener("mouseover", function () {
    document.getElementById("Lichtstraal").style.display = "inline";
});

lamp.addEventListener("mouseout", function () {
    document.getElementById("Lichtstraal").style.display = "none";
});

//

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

//

var roze = document.getElementById("Roze_vissenkom");

roze.addEventListener("click", function () {
    document.getElementById("Roze_vissenkom").style.animation = "1s circle reverse";
});


//

var witboot = document.getElementById("Wit_boot");

witboot.addEventListener("mouseover", function () {
    document.getElementById("Boot").style.animation = "kaboom 4s 0s infinite";
});

witboot.addEventListener("mouseout", function () {
    document.getElementById("Boot").style.animation = "0s ease 0s 1 normal none running none";
});




