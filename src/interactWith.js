window.addEventListener('DOMContentLoaded', bunny, false);
window.addEventListener('DOMContentLoaded', init, false);


function init() {

    highlightFirstPersonCheckbox.addEventListener('change', toggleHighlight, false);
    highlightNameCheckbox.addEventListener('change', toggleHighlight, false);
    }
    
    
    function toggleHighlight() {
        var targetClass;
        switch (this.id) {
            case "highlightFirstPersonCheckbox":
                targetClass = "FirstPerson";
                break;
            case "highlightNameCheckbox":
                targetClass = "name";
                break;
        }
        var elements = document.getElementsByClassName(targetClass);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("highlight");
        }
    } 


function bunny() {
    // alert ('Welcome to my website! Looks like the page loaded...almost! Just click here to continue, please.');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', changeColor2, false);
    buttons[2].addEventListener('click', newFunction, false);
    buttons[3].addEventListener('click', anotherFunction, false);
}


function changeColor() {
    var p1 = document.getElementById("colorToggle")
    { p1.style.backgroundColor = "skyblue";  }
    
    /* here, style is a *property*: the CSS styling of an element: 
     * you can add a CSS property after invoking style. */ 
    // ^I will keep this in mind for the future
}

function changeColor2() {
    var pars = document.getElementsByTagName('p')
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "lightcoral";
        pars[i].style.fontWeight="bold";
    }
}



function newFunction() {
    alert ('Huh? What do you want now?');
    var li = document.getElementsByTagName('li')
    for (var i = 0, length = li.length; i < length; i++) {
        li[i].style.backgroundColor = "MistyRose";
    }
}


function anotherFunction() {
    var anothers = document.getElementsByClassName('power')
    for (var i = 0, length = anothers.length; i < length; i++) {
        anothers[i].style.cssText = "text-decoration: underline; text-decoration-style: wavy;"
    }
}

//Exercise 2 note
function yetAnotherFunction() {
    anothers = document.getElementsByClassName('checkmarked')
    for (var i = 0, length = anothers.length; i < length; i++) {
        anothers[i].style.cssText = "text-decoration: underline; text-decoration-style: bold;"
    }
}

// Makes the shapes react when hovering
document.querySelectorAll('.shape').forEach((shape) => {
    shape.addEventListener('mouseover', () => {
        shape.style.transform = 'translateY(0) scale(2)';
    });
    shape.addEventListener('mouseout', () => {
        shape.style.transform = '';
    });
});

// Function to generate random shapes
function generateShapes() {
    const border = document.querySelector('.floating-border');
    const shapes = ['circle', 'square', 'triangle']; // Shape types
    const numShapes = 30; // Number of shapes to generate

    for (let i = 0; i < numShapes; i++) {
        // Create a new shape element
        const shape = document.createElement('div');
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        shape.classList.add('shape', randomShape);

        // Set random colors
        shape.style.background = `linear-gradient(45deg, 
            ${randomColor()}, ${randomColor()})`;
        shape.style.animationDelay = `${Math.random() * 2}s`;
        border.appendChild(shape);
    }
}

// Function to generate a random color
function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Run the shape generation
generateShapes();