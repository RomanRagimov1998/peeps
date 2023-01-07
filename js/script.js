const headerBurger = document.querySelector('.header__burger');
const spollers = document.querySelectorAll('.question__spoller-section');

function burgerActive() {
	headerBurger.classList.toggle('header__burger-active');
	document.querySelector('header').classList.toggle('header-active');
	document.querySelector('.menu__body').classList.toggle('header-menu-active');
};

let spollerTargetIndex = 0
let spollerselectedindex = 0
document.addEventListener('click', function (e) {
	const target = e.target;
	if (target == headerBurger) {
		burgerActive();
	}
	if (target.classList.contains('question__spoller-section')) {
		for (index = 0; index < spollers.length; index++) {
			if (target == spollers[index]) {
				spollerTargetIndex = index;
			}
			//console.log(spollerindex + ' ' + spollerselectedindex)
		}
		document.querySelectorAll('.question__spoller-icon')[spollerTargetIndex].classList.toggle('_spoller-icon-active');
		document.querySelectorAll('.question__content')[spollerTargetIndex].classList.toggle('_spoller-active');
		document.querySelectorAll('.question__spoller-section');
	}
});




