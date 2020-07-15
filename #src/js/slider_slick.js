//*включение слайдера возможно только при подключенном файле slick.min.js и при подключенной библиотеке jquery
//*вкл slick Start
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,				//*показать стрелки.
		dots: false,             //todo точки выкл.
		adaptiveHeight: true,		//*адаптивная высота слайдера.
		slidesToShow: 3,     		//todo кол-во слайдов которое мы хотим Отобразить за раз.
		draggable: true,         //*это свайп ПК (возможность листать слайд перетаскивая его зажатием мыши на нем).
		touchThreshshold: 4,     //* момент срабатывания слайда при свайпе(тоесть какую часть картинки надо перетянуть чтобы слайд перелестнулся).
		touchMove: true,       	//todo предоставляет возможность тянуть слайд пальцем(если отключить то нельзя тянуть, хотя перелистнуть слайд можно будет).
		responsive:[				//*позволяет менять свойства слайдера при различных брекпоинтах.				
			{
				breakpoint: 750,
				settings:{
					slidesToShow:2
				}
			},
			{
				breakpoint: 580,
				settings:{
					slidesToShow:1
				}
			}
		],
	});

	$('.control-slider-lots__arrow_prev').click(function (event) {
		$('.slider').slick('slickPrev');
	});
	$('.control-slider-lots__arrow_next').click(function (event) {
		$('.slider').slick('slickNext');
	});

});
//*вкл slick End






//второй слайдер

$(document).ready(function () {
	$('.main-slider__body').slick({
		arrows: false,
		//fade:false,      	//*при прокручивании слайд не тянется, а заменяется.
		slidesToShow: 1,
		draggable: true,
	});
	$('.control-main-slider__arrow_perv').click(function (event) {
		$('.main-slider__body').slick('slickPrev');
	});
	$('.control-main-slider__arrow_next').click(function (event) {
		$('.main-slider__body').slick('slickNext');
	});
});


//третий

$(document).ready(function () {
	$('.slider-quotes__body').slick({
		arrows: false,
		fade: true,      	//*при прокручивании слайд не тянется, а заменяется.
		slidesToShow: 1,
		draggable: true,
		speed: 1500,
	});
	$('.control-slider-quotes__circle').click(function (event) {
		$('.slider-quotes__body').slick('slickNext');
	});
});

