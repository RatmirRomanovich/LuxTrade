//*(start)_ БУРГЕР меню.
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("_active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("_active");
	});
}
//*(end);

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

//!Слайдер Start
//SLIDERS
if($('.mainslider').length>0){
	$('.mainslider').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		//asNavFor:'',
		//appendDots:
		//appendArrows:$('.mainslider-arrows .container'),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}
//BildSlider
var sliders = document.querySelectorAll('._swiper');

if (sliders) {
	for (var _index24 = 0; _index24 < sliders.length; _index24++) {
		var slider = sliders[_index24];

		if (!slider.classList.contains('swiper-bild')) {
			var slider_items = slider.children;

			if (slider_items) {
				for (var _index25 = 0; _index25 < slider_items.length; _index25++) {
					var _el12 = slider_items[_index25];

					_el12.classList.add('swiper-slide');
				}
			}

			var slider_content = slider.innerHTML;
			var slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}

		if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
		}
	}

	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

var lots_slider = new Swiper('.slider-lots__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,//сколько слайдов нам показывать
	spaceBetween: 0,
	///autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.control-slider-lots__arrow_next',
		prevEl: '.control-slider-lots__arrow_prev',
	},
	/*
	breakpoints: {
		320: {
			autoHeight: true
		},
		768: {
			autoHeight: false
		}
	},
	*/
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	} // And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},

});
//!Слайдер End