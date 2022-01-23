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


const header = document.querySelector('.header')

document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {        
		header.style.backgroundColor = 'transparent';
	}
})