"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const askButton = document.querySelector(".footer_ask");
    askButton.addEventListener("click", () => {
        document.querySelector(".ask_img").classList.toggle("img_active");
        document.querySelector(".ask_text").classList.toggle("text_active");
        document.querySelector(".chat").classList.toggle("active");
    });

    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav_list");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        const targetElement = event.target;
        if (!targetElement.closest(".hamburger") && !targetElement.closest(".nav_list ")) {
            navList.classList.remove("active");
        }
    });
});

// Modal Windows
( function( window ) {

    'use strict';

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

})( window );

var ModalEffects = (function() {

    function init() {

        var overlay = document.querySelector( '.md-overlay' );

        [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

            var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
                close = modal.querySelector( '.md-close' );

            function removeModal( hasPerspective ) {
                classie.remove( modal, 'md-show' );

                if( hasPerspective ) {
                    classie.remove( document.documentElement, 'md-perspective' );
                }
            }

            function removeModalHandler() {
                removeModal( classie.has( el, 'md-setperspective' ) );
            }

            el.addEventListener( 'click', function( ev ) {
                classie.add( modal, 'md-show' );
                overlay.removeEventListener( 'click', removeModalHandler );
                overlay.addEventListener( 'click', removeModalHandler );

                if( classie.has( el, 'md-setperspective' ) ) {
                    setTimeout( function() {
                        classie.add( document.documentElement, 'md-perspective' );
                    }, 25 );
                }
            });

            close.addEventListener( 'click', function( ev ) {
                ev.stopPropagation();
                removeModalHandler();
            });

        } );

    }

    init();

})();




// Slider
let slideIndex = 0;
let imageIndex = 0;

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("carousel__item");
    let images = document.getElementsByClassName("carousel__image");
    let indicators = document.getElementsByClassName("carousel__indicator");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    images[slideIndex].style.display = "block";
    indicators[slideIndex].className += " active";
}

showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}




// Number
let value = 0;
const endValue = 5000;
const duration = 5000;
const increment = endValue / (duration / 10);

const counterElement = document.getElementById('counter');

const timer = setInterval(() => {
    value += increment;

    if (value >= endValue) {
        value = endValue;
        clearInterval(timer);
    }

    counterElement.innerText = Math.round(value);
}, 8);

let value2 = 0;
const endValue2 = 2000;
const duration2 = 5000;
const increment2 = endValue2 / (duration2 / 10);

const counterElement2 = document.getElementById('counter2');

const timer2 = setInterval(() => {
    value2 += increment2;

    if (value2 >= endValue2) {
        value2 = endValue2;
        clearInterval(timer2);
    }

    counterElement2.innerText = Math.round(value2);
}, 8);


let value3 = 0;
const endValue3 = 1000;
const duration3 = 5000;
const increment3 = endValue3 / (duration3 / 10);

const counterElement3 = document.getElementById('counter3');

const timer3 = setInterval(() => {
    value3 += increment3;

    if (value3 >= endValue3) {
        value3 = endValue3;
        clearInterval(timer3);
    }

    counterElement3.innerText = Math.round(value3);
}, 8);

