@@include('burger.js', {});

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

//!(start)_ Динамический адаптив(автоматическая перестановка классов и расположения тегов в html при изменении ширины экрана, по сути перемещаем элеммент на страницы из одного места в другое)
/*<a data-move="№_1 menu__body,№_2 1,№_3 767 " href="" class="actions-header__region">
		<span>Выбор Региона</span>
	</a> 
	№_1- куда отправляем элемент
	№_2- каким по счету он должен там быть(начиная с 0)
	№_3- при каком разрешении*/
//!(end)
