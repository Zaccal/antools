new WOW().init()

$(document).ready(function() {
})

const arrow = document.querySelector('.menu__link_fall span')

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})

const arrowFall = document.querySelector('.arrow-fall')
const innerMenu = document.querySelector('.menu__inner-list')

arrowFall.addEventListener('click', () => {
    arrowFall.classList.toggle('active')
    innerMenu.classList.toggle('active')
})


