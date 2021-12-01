// JavaScript Document


function shuffleContent(container) {
    var content = container.find("> *");
    var total = content.length;
    content.each(function() {
        content.eq(Math.floor(Math.random() * total)).prependTo(container);
    });
}

//色の切り替え
let fileName_rotation = [
  "video/rotation_circle_blue.mp4",
  "video/rotation_circle_green.mp4",
  "video/rotation_circle.mp4"
]
let fileName_border = [
  "video/Diagonal_border_green.mp4",
  "video/Diagonal_border_yellow.mp4",
  "video/Diagonal_border.mp4"
]
let fileName_marni = [
  "video/MARNI_blue.mp4",
  "video/MARNI_red.mp4",
  "video/MARNI.mp4"
]
let fileName_triangle = [
  "video/triangle_3_red.mp4",
  "video/triangle_3_yellow.mp4",
  "video/triangle_3.mp4"
]


var day = true;

$(function(){
  //リロード時シャッフル
  $(".reload").on('click', function() {
    shuffleContent($("#canvas"));
  });

	//CSSメソッド
 $(".n-d").on('click', function() {

    if(day == true){
      $( '#wrap' ).css( {
         'filter': 'invert(100%)'
      });
      
      $( '.light-blue' ).css( {
         'color': '#947835'
      });
	　$( '.border-line' ).css( {
         'background': 'linear-gradient(transparent 30%, #000 30%)'
      });
	  $( '.fab' ).css( {
         'background': '#000'
      });
	  $( '.blue' ).css( {
         'background': '#947835'
      });
	  $( '.fabimgcor' ).css( {
         'fill': '#947835'
      });
      
      day = false;
    } else {
      $( '#wrap' ).css( {
         'filter': 'invert(0%)'
      });
      
      $( '.light-blue' ).css( {
         'color': '#8AA3D2'
      });
	　$( '.border-line' ).css( {
         'background': 'linear-gradient(transparent 30%, #fff 30%)'
      });
	  $( '.fab' ).css( {
         'background': '#fff'
      });
	  $( '.blue' ).css( {
         'background': '#8AA3D2'
      });
	  $( '.fabimgcor' ).css( {
         'fill': '#8AA3D2'
      });
      
      day=true;
   }
  });
//トグル
//$(".n_d").click(function(){
	//$("body").toggleClass(".night");
//});

 $(".change4").on('click', function() {
    $( '#canvas video' ).css( {
       'width': '25%',
    });
  });

$(".change5").on('click', function() {
    $( '#canvas video' ).css( {
       'width': '20%',
    });
  });

$(".change6").on('click', function() {
    $( '#canvas video' ).css( {
       'width': '16%',
    });
  });


 //並べ替え

  $(".rotation").click(function(){
    let i = Math.floor(Math.random() * 4);
    $(this).attr("src",fileName_rotation[i]);
	return false;
  });

   $(".border").click(function(){
     let i = Math.floor(Math.random() * 4);
     $(this).attr("src",fileName_border[i]);
   return false;
   });

  $(".marni").click(function(){
     let i = Math.floor(Math.random() * 4);
     $(this).attr("src",fileName_marni[i]);
   return false;
   });

  $(".triangle").click(function(){
     let i = Math.floor(Math.random() * 4);
     $(this).attr("src",fileName_triangle[i]);
   return false;
   });

  //ナビ非表示
  var startPos = 0,winScrollTop = 0;
  $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos) {
	    if(winScrollTop >= 200){
          $('.nav-move').addClass('hide');
		}
     } else {
        $('.nav-move').removeClass('hide');
    }
    startPos = winScrollTop;
 });

});


// Rotation
$(function() {
 var rotate = function(logo, angle) {
  logo.css({
  "transform" : "rotate("+angle+"deg)"
  });
 }
 $(window).scroll(function(){
  rotate($(".logo"), $(window).scrollTop()*1.0);
 })
});


//screen full
$(function () {
			$('#canvas').dblclick(function () {
				screenfull.toggle(this);
			});

			function fullscreenchange() {
				var elem = screenfull.element;

				$('#status').text('Is fullscreen: ' + screenfull.isFullscreen);

				if (elem) {
					$('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
				}

				if (!screenfull.isFullscreen) {
					$('#external-iframe').remove();
					document.body.style.overflow = 'auto';
				}
			}

			screenfull.on('change', fullscreenchange);

			// Set the initial values
			fullscreenchange();
});
