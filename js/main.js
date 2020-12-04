$(document).ready(function(){
    /*--- РіР°РјР±СѓСЂРіРµСЂР° РґР»СЏ РјРѕР±РёР»СЊРЅРѕРіРѕ РјРµРЅСЋ ---*/
    var btnOpen = $(".js-btn-menu"),
        menuOpen = $('.header__menu-mobile');
    
    btnOpen.click(function () {
        if (menuOpen.css('display') == 'none') {
            menuOpen.animate({ height: 'show' }, 500);
            $('.hamburger--slider').addClass('is-active');
        }
        else {
            menuOpen.animate({ height: 'hide' }, 500);
            $('.hamburger--slider').removeClass('is-active');
        }
    
        menuOpen.toggleClass('show')
    });
    
  
     /*--- СЃР»Р°Р№РґРµСЂ ---*/
    var swiper = new Swiper('.slider_theme_1', {
    	spaceBetween: 30,
    	navigation: {
    		nextEl: '.swiper-btn-next',
    		prevEl: '.swiper-btn-prev',
    	},
    	pagination: {
    		el: '.swiper-pagination_theme_1',
    		clickable: true,
    	},
    });
    
    var swiperWork = new Swiper('.slider_theme_2', {
    	slidesPerView: 3,
    	spaceBetween: 25,
    	loop: true,
    	loopFillGroupWithBlank: true,
    	navigation: {
    		nextEl: '.slider__btn-next_theme_2',
    		prevEl: '.slider__btn-prev_theme_2',
    	},
    	pagination: {
    		el: '.swiper-pagination_theme_2',
    		clickable: true,
    	},
    	breakpoints: {
    		991: {
    			slidesPerView: 2,
    		},
    		768: {
    			slidesPerView: 2,
    		},
    		767: {
    			slidesPerView: 1,
    		}
    	}
    });
    
  
     /*--- РџРѕРєР°Р·Р°С‚СЊ РІСЃРµ С†РµРЅС‹---*/
    $('.price_theme_1 .watch-all').on('click', function () {
        var ps = $(this).parent('.price_theme_1 .price-container');
        $(ps).find('.table_theme_1 tbody > tr:nth-of-type(n+9)').show('slow');
        $(this).css({ display: 'none' });
    });
  
       /*--- РџРѕРєР°Р·Р°С‚СЊ РІСЃРµ С†РµРЅС‹---*/
    $('input[type=tel]').mask('+7 (999) 999-99-99', {
    
    });
    
  
    /*--- РљР°Р»СЊРєСѓР»СЏС‚РѕСЂ---*/
    // РІС‹Р±РёСЂР°РµС‚ РЅРµ Р±РѕР»СЊС€Рµ 3С… СЌР»РµРјРµРЅС‚РѕРІ. РџСЂРё РїРµСЂРµРєР»СЋС‡РµРЅРёРё РЅР° РЅРѕРІС‹Р№ С‚Р°Р± СЃР±СЂР°СЃС‹РІР°РµС‚ Р°РєС‚РёРІРЅС‹Рµ СЌР»РµРјРµРЅС‚С‹
    
    var blocks = document.querySelectorAll(".list-types__card");
    var btn = document.querySelectorAll(".list-types__card");
        var total = 0;
    
    for (let i = 0; i < btn.length; i++) {
    
        btn[i].addEventListener("click", function () {
    
            if (blocks[i].classList.contains("active")) {
                blocks[i].classList.remove("active");
                total--;
                
            } else if (total < 3 && !blocks[i].classList.contains("active")) {
                blocks[i].classList.add("active");
                total++;
            }
    
            console.log(total)
        });
    }
    
    $('.list-group__card').on('click', function(){
        $('.list-types__card').removeClass('active');
        total = 0;
    })
    
    
  });