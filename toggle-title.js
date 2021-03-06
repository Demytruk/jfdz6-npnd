var features = document.getElementById('features');
var contact = document.getElementById('contact');
var authors = document.getElementById('authors');


function toggleTitle() {

    if (isAbove(features)){
        setTitle('Analizator finansowy');
    } else if (isBelow(features) && isAbove(contact)) {
        setTitle('Funkcje - Analizator finansowy');
    } else if (isBelow(contact) && isAbove(authors)) {
        setTitle('Kontakt - Analizator finansowy');
    } else {
        setTitle('O nas');
    }
}

function isAbove(node) {
    return document.documentElement.scrollTop <= node.offsetTop - 40
}

function isBelow(node) {
    return document.documentElement.scrollTop > node.offsetTop - 40
}

function setTitle(title) {
    document.title = title;
}

