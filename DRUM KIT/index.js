var drums = document.querySelectorAll(".drum");

for (var i = 0; i < 7; i++) {
    drums[i].addEventListener("click", function () {
        MakeSound(this.id);
        CreateAnimation(this.id);
    })
}

document.addEventListener("keypress", function (event) {
    MakeSound(event.key);
    CreateAnimation(event.key);
})

function MakeSound(key) {
    switch (key) {
        case "w":
            var w1 = new Audio("sounds/tom-1.mp3");
            w1.play();
            break;

        case "a":
            var a1 = new Audio("sounds/tom-2.mp3");
            a1.play();
            break;

        case "s":
            var s1 = new Audio("sounds/tom-3.mp3");
            s1.play();
            break;

        case "d":
            var d1 = new Audio("sounds/tom-4.mp3");
            d1.play();
            break;

        case "j":
            var j1 = new Audio("sounds/snare.mp3");
            j1.play();
            break;

        case "k":
            var k1 = new Audio("sounds/crash.mp3");
            k1.play();
            break;

        case "l":
            var l1 = new Audio("sounds/kick-bass.mp3");
            l1.play();
            break;

        default :
            break;
    }
}

function CreateAnimation(key1) {
    var activateButton = document.querySelector("#" + key1);
    activateButton.classList.add("pressed");

    setTimeout(function() {
        activateButton.classList.remove("pressed");
    }, 100);
}