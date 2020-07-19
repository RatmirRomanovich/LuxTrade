//*(start)_ реализация ВЫПАДАЮЩЕГО МЕНЮ.
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener('click', function (e) {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});
//*(end)

//*(start)_ скрытие ВЫПАДАЮЩЕГО МЕНЮ при клике на любую область вне его.
document.addEventListener('click', function (e) {
	if (!e.target.closest('.user-header')) {
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
});
//*(end)