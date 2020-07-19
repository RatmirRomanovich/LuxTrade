//*(start)_ БУРГЕР меню.
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
let menuLinks = document.querySelectorAll('.menu__link'); //*обращаемся к ссылкам чтобы впоследствие при нажатие скрыть меню.
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("_active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("_active");
	});
};
if (window.innerWidth < 800) {                            //*скрываем бургер при переходе по ссылке
	for (i = 0; i < menuLinks.length; i += 1) {
		menuLinks[i].addEventListener('click', () => {
			iconMenu.classList.remove('_active');
			body.classList.remove("lock");
			menuBody.classList.remove('_active');
		});
	};
};
//*(end)