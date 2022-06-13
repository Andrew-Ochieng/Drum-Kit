//initialize number of drum buttons
var drumBtns = document.querySelectorAll(".drum");


// detect mouseclick event
for (let i = 0; i < drumBtns.length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    //play different sounds for each button
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML)

    btnAnimate(buttonInnerHTML)
        
})
    
}

// keyboard event
document.addEventListener("keypress", (event) => {
    
    makeSound(event.key)

    btnAnimate(event.key)
})


// detect keyboard press
function makeSound(key) {

    switch (key) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();  
            break;

        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();  
            break;

        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();  
            break;

        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();  
            break;

        case 'j':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();  
            break;

        case 'k':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();  
            break;

        case 'l':
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();  
            break;

    
        default: console.log(buttonInnerHTML);
            break;
    }

}


//add animation
function btnAnimate(currentKey) {

    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")

    }, 200);

}


// var audio = new Audio('./sounds/snare.mp3');
//     audio.play();  

// you can also use while loop
// let i = 0
// while (i < drumBtns.length) {
//     i++
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         var audio = new Audio('./sounds/snare.mp3');
//         audio.play();           
//     })
    
// }























