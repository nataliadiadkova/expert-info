$(document).ready(function(){
  $('.single-item').slick({
  	dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
}); 

$(document).ready(function(){
	$('.autoplay').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  // autoplay: true,
	  autoplaySpeed: 1000,
	});
});

$(document).ready(function(){
  $('.feedback').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('.certificate').slick({
  	dots: true,
  	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	vertical:true,
	autoplaySpeed: 3000,
  });
});


function move(root) {
  root = root || document;
  var elem =  $(root).find(".rectangle");
  var procent = $(root).find(".procent");      
  var width = 10;
  var maxWidth =  parseInt($(root).data('value')) || 250;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= maxWidth) {
      clearInterval(id);
    } else {
      width++; 
      elem.css('width', width * 0.4 + '%'); 
      procent.html(width * 1 );
    }
  }
}
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(function() {


  function runProgressIfVisible() {
    $('.pg-bar.untouched').each(function(index, elem) {
      if (isScrolledIntoView(elem)) {
        $(elem).removeClass('untouched')
        move(elem);
      }
    });
  }

  $(window).scroll(runProgressIfVisible);

  runProgressIfVisible();
});

$(document).ready(function(){
  $("#menu").on("click", "a.someclass", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),"top"!=r[0]&&"bottom"!=r[0]&&"left"!=r[1]&&"right"!=r[1]||(r=[r[1],r[0]]),this.positionX!==s&&(r[0]=this.positionX.toLowerCase()),this.positionY!==s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"90%",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"90%",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo(this.mirrorContainer);var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,mirrorContainer:"body",refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t,i=o.winHeight,e=o.docHeight,s=Math.min(this.boxOffsetTop,e-i),h=Math.max(this.boxOffsetTop+this.boxHeight-i,0),r=this.boxHeight+(s-h)*(1-this.speed)|0,a=(this.boxOffsetTop-s)*(1-this.speed)|0;r*this.aspectRatio>=this.boxWidth?(this.imageWidth=r*this.aspectRatio|0,this.imageHeight=r,this.offsetBaseTop=a,t=this.imageWidth-this.boxWidth,"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-t:isNaN(this.positionX)?this.offsetLeft=-t/2|0:this.offsetLeft=Math.max(this.positionX,-t)):(this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0,t=this.imageHeight-r,"top"==this.positionY?this.offsetBaseTop=a:"bottom"==this.positionY?this.offsetBaseTop=a-t:isNaN(this.positionY)?this.offsetBaseTop=a-t/2|0:this.offsetBaseTop=a+Math.max(this.positionY,-t))},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d("+this.mirrorLeft+"px, "+(this.mirrorTop-e)+"px, 0px)",visibility:this.visibility,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d("+this.offsetLeft+"px, "+this.offsetTop+"px, 0px)",position:"absolute",height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){function s(){if(p==i.pageYOffset)return i.requestAnimationFrame(s),!1;p=i.pageYOffset,h.render(),i.requestAnimationFrame(s)}if(!this.isReady){var h=this,r=t(e),a=t(i),n=function(){o.winHeight=a.height(),o.winWidth=a.width(),o.docHeight=r.height(),o.docWidth=r.width()},l=function(){var t=a.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,a.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};a.on("resize.px.parallax load.px.parallax",function(){n(),h.refresh(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){l(),o.requestRender()}),n(),l(),this.isReady=!0;var p=-1;s()}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;t.render(),t.isBusy=!1},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var h=t.fn.parallax;t.fn.parallax=function(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})},t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=h,this},t(function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);


/*
 Revealator jQuery Plugin
 Revealator is a jQuery-based plugin for adding effects to elements that enter the window. It's simple, and easy to use.
 version 1.4, Jan 11th, 2016
 by Ingi P. Jacobsen

 The MIT License (MIT)

 Copyright (c) 2016 Qodio

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */


var Revealator = typeof Revealator !== 'undefined' ? Revealator : {};

$(function () {
	Revealator = $.extend({}, {
		timer:           null,
		busy:            false,
		scroll_padding:  0,
		effects_padding: 0,
		refresh:         function () {}
	}, typeof Revealator !== 'undefined' ? Revealator : {});

	Revealator.refresh = function () {
		var $window = $(window);
		var $document = $(document);
		var $body = $(document.body);
		var i = 0;
		var window_top = Revealator.effects_padding;
		var window_bottom = $window.height() - Revealator.effects_padding;
		var document_top = Revealator.scroll_padding;
		var document_bottom = $document.height() - Revealator.scroll_padding;
		
		if ($window.scrollTop() === 0) {
			if (!$body.hasClass('at-top')) {
				$body.addClass('at-top').removeClass('at-bottom').removeClass('near-top').removeClass('near-bottom');
			}
		} else if ($window.scrollTop() + $window.height() === $document.height()) {
			if (!$body.hasClass('at-bottom')) {
				$body.addClass('at-bottom').removeClass('at-top').removeClass('near-top').removeClass('near-bottom');
			}
		} else if ($window.scrollTop() <= document_top) {
			if (!$body.hasClass('near-top')) {
				$body.addClass('near-top').removeClass('near-bottom').removeClass('at-top').removeClass('at-bottom');
			}
		} else if ($window.scrollTop() + $window.height() >= document_bottom) {
			if (!$body.hasClass('near-bottom')) {
				$body.addClass('near-bottom').removeClass('near-top').removeClass('at-top').removeClass('at-bottom');
			}
		} else {
			if ($body.hasClass('at-top') || $body.hasClass('at-bottom') || $body.hasClass('near-top') || $body.hasClass('near-bottom')) {
				$body.removeClass('at-top').removeClass('at-bottom').removeClass('near-top').removeClass('near-bottom');
			}
		}
		
		$('*[class*="revealator"]').each(function () {
			i++;
			var element = this;
			var $element = $(element);
			var element_bounding = element.getBoundingClientRect();

			var position_class = undefined;
			if (element_bounding.top > window_bottom && element_bounding.bottom > window_bottom) {
				position_class = 'revealator-below';
			} else if (element_bounding.top < window_bottom && element_bounding.bottom > window_bottom) {
				position_class = 'revealator-partially-below'
			} else if (element_bounding.top < window_top && element_bounding.bottom > window_top) {
				position_class = 'revealator-partially-above'
			} else if (element_bounding.top < window_top && element_bounding.bottom < window_top) {
				position_class = 'revealator-above';
			} else {
				position_class = 'revealator-within';
			}

			if ($element.hasClass('revealator-load') && !$element.hasClass('revealator-within')) {
				$element.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above');
				$element.addClass('revealator-within');
			}

			if (!$element.hasClass(position_class) && !$element.hasClass('revealator-load')) {
				if ($element.hasClass('revealator-once')) {
					if (!$element.hasClass('revealator-within')) {
						$element.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above');
						$element.addClass(position_class);
					}
					if ($element.hasClass('revealator-partially-above') || $element.hasClass('revealator-above')) {
						$element.addClass('revealator-within');
					}
				} else {
					$element.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above');
					$element.addClass(position_class);
				}
			}
		});
	};

	$(window).bind('scroll resize load ready', function () {
		if (!Revealator.busy) {
			Revealator.busy = true;
			setTimeout(function () {
				Revealator.busy = false;
				Revealator.refresh();
			}, 150);
		}
	});
});


// $(document).ready(function(){
//     $("#menu").on("click","a", function (event) {
//         event.preventDefault();

//         var id  = $(this).attr('href'),

//             top = $(id).offset().top;
        
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });
// $(document).ready(function(){
//     $(".arrow").on("click","a", function (event) {
//         event.preventDefault();

//         var id  = $(this).attr('href'),

//             top = $(id).offset().top;
        
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });

// $(document).ready(function(){
//  $('.photo-recipes').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//  });
// });
// $( function() {
//     $( "#slider-range" ).slider({
//         range: true,
//         min: 250,
//         max: 9000,
//         values: [ 75, 300 ],
//         slide: function( event, ui ) {
//           $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//         }
//     });
//     $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//         " - $" + $( "#slider-range" ).slider( "values", 1 ) );
// });
// $(function(){
//     var navbar = $('.navbar');
//     $(window).scroll(function(){
//         if($(window).scrollTop() <= 113){
//        		navbar.addClass("header-height");
//         } else {
//        		navbar.removeClass("header-height");
//           	navbar.addClass("header-top"); 
//         }
//     });  
// })