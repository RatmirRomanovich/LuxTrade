//*включение слайдера возможно только при подключенном файле slick.min.js и при подключенной библиотеке jquery
//*вкл slick Start
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,				//*показать стрелки.
		dots: false,             //todo точки выкл.
		adaptiveHeight:true,		//*адаптивная высота слайдера.
		slidesToShow: 3,     		//todo кол-во слайдов которое мы хотим Отобразить за раз.
		//slidesToScroll:3,   		//*кол-во слайдов которое мы хотим Прокручивать за раз.
		//speed:300,          		//todo скорость пролистывания(в Миллисекундах).
		//easing:'linear',   		//*тип анимации при смене слайда(смотреть css переходы свойство[css transition]).
		//infinite:true,      		//todo отвечает за то будет ли слайдер бесконечным.
		//initialSlide:3,     		//*Выбираем стартовый слайд(по умолчанию 0).
		//autoplay:false,     		//todo автоматическое пролистывание слайдов через опр-й период(autoplaySpeed:3000).
		//autoplaySpeed:3000,  	//*скорость ав-ого пролистывания слайдов(период).
		//pauseOnFocus:true,  		//todo пауза при наведении на любую область слайдера.
		//pauseOnDotsHover:true,	//todo при наведении на точки.
		draggable:true,         //*это свайп ПК (возможность листать слайд перетаскивая его зажатием мыши на нем).
		//swipe:true,					//todo это свайп Мобайл (возможность листать слайд перетаскивая его зажатием на нем).
		touchThreshshold:5,     //* момент срабатывания слайда при свайпе(тоесть какую часть картинки надо перетянуть чтобы слайд перелестнулся).
		//	touchMove:true,       	//todo предоставляет возможность тянуть слайд пальцем(если отключить то нельзя тянуть, хотя перелистнуть слайд можно будет).
		//	waitForAnimate:false,  	//* если отключить данную опцию, то появляеться возможность быстро кликая листать слайды не дожидаясь срабатывания анимации(когда много слайдов наверное актуально).
		//	centerMode:false, 		//todo выставляет акцент на центральном слайде и добавляет класс для возможности к нему обратиться (.slider__item.slick-center).
		//	variableWidth:false,		//* данная функция когда включенна дает возможность контенту определять ширину, в итоге отступы между слайдами пропадут скорее всего, удобно когда нужен адаптивный слайд, хорошо работает вместе с centerMode.
		//	rows:1,						//todo кол-во рядов (этажей).
		//	slidesPerRow:1,			//* кол-во слайдов в ряду.
		//	vertical:false,			//todo вертикальный слайдер(есть в нем много огрехов пока, надо дополнительно работать над свойствами).
		//	verticalSwiping:false,	//* вертикальная прокрутка слайдов.
		//	fade:false,					//todo при прокручивании слайд не тянется, а заменяется.
		//asNavFor:'.sliderbig'	//!Cвязываем слайдеры
		//	responsive:[				//*позволяет менять свойства слайдера при различных брекпоинтах.				
		//		{
		//			breakpoint: 768,
		//			settings:{
		//				slidesToShow:2
		//			}
		//		},
		//		{
		//			breakpoint: 480,
		//			settings:{
		//				slidesToShow:1
		//			}
		//		}
		//	],
		//	mobileFirst:false, 			//todo при false значение наших брекпоинтов (max-width) тоесть больше 768px не раб. при true наоборот это (min-width) и при значениях меньше 768px не будет работать.					
		//	appendArrows:$('.newdiv'),	//*переместит наши стрелки в другой div.
		//	appendDots:$('.newdiv'),	//todo переместит наши точки в другой div.
	});
	//!далее следуют события и методы (start)
	/*
	//*событие до смены слайда (beforeChange).
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log('nextSlide');
	});
	//*after
	$('.slider').on('afterChange', function(event, slick, currentSlide){
		console.log('currentSlide');
	});
	*/
	//todo методы
	//todo метод goto при клике на определенную ссылку мы хотим чтобы наш слайдре пролистнулся до определенного места.
	//	$('.link_house').click(function(event) {
	//		$('.slider').slick('goTo',3);
	//	});
	//todo метод позволяет при клике на ссылку листнуть слайдер вправо или лево.
	$('.control-slider-lots__arrow_prev').click(function (event) {
		$('.slider').slick('slickPrev');
	});
	$('.control-slider-lots__arrow_next').click(function (event) {
		$('.slider').slick('slickNext');
	});
	//todo метод позволяет включить авто пркокрутку.
	//	$('.link_autoplay').click(function(event) {
	//		$('.slider').slick('slickPlay');
	//	});
	//todo метод позволяет позволяет поставить на паузу авто прокрутку.
	//	$('.link_pause').click(function(event) {
	//		$('.slider').slick('slickPause');
	//	});
	//todo метод позволяет управлять содержимым слайдера добавить его на лету.
	//	$('.link_add').click(function(event) {
	//		$('.slider').slick('slickAdd','<div class="newslide">new object</div>');
	//		return false;
	//	});
	//todo метод позволяет управлять содержимым слайдера удалить указав индекс.
	//	$('.link_remove').click(function(event) {
	//		$('.slider').slick('slickRemove',0);
	//		return false;
	//	});
	//!события и методы(end)
});
//*вкл slick End






//второй слайдер
/*
$(document).ready(function(){
	$('.sliderbig').slick({
		arrows:false,
		fade:false,					//*при прокручивании слайд не тянется, а заменяется.
		asNavFor:'.slider'		//!Cвязываем слайдеры
	});
});

*/