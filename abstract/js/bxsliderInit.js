/**
 * Created by losik on 14.08.17.
 */
$(document).ready(function() {
 $('#slider1').bxSlider({
     video: true,
     useCSS: false,
     pagerCustom: '#bx-pager1',
     //СКРИПТ ЗАПУСКАЕТ ВИДЕО АВТОМАТИЧЕСКИ
     onSliderLoad:function(){
         $("video").trigger("play");
     }
    });

    $('#slider2').bxSlider({
        auto:false,
        pagerCustom: '#bx-pager2'
    });

});

