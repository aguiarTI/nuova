/** ========================
============================
@project    : Nuova
@version    : 1.0
@author     : Front-end Developer - Thiago Aguiar - thiago.aguiar86@gmail.com
@copyright  : 2016
============================
@begin
=========================**/

// funcao que manipula o menu em versões para device e tablet
var openMenu = {
	init: function() {		
		this.engine();
	},
	engine: function() {		
		var button = $('header a.btn-menu');
		var menu = $('header nav');
		var screen	= $(window);

		button.on({
			click: function() {
				if($(this).hasClass('open') == true) {
					$(this).removeClass('open');
					menu.css('top', '-247px');
				
				} else {
					$(this).addClass('open');
					menu.css('top','94px');
				}
			}
		});

		screen.on({
			resize: function() {				
				var getPos = $(this).width();

				if(getPos > 550) {
					button.removeClass('open');
					menu.removeAttr('style');
				}
			}
		}).resize();
	}
}

// função da galeria de fotos
var swiper = new Swiper('.swiper-container', {
    pagination: '.navigation',
    paginationClickable: true,
    spaceBetween: 0,
    loop: true,
    keyboardControl: true
});

// inicializando funções
openMenu.init();

/** ========================
end
=========================**/