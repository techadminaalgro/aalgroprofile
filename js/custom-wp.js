var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){
    "use strict";

    $('.videoWrapper .videoPoster:before').on('click', function() {
        $('.videoWrapper').css('z-index', '99')
    })

    $('.priceing-tab .tab-pane:first-child').addClass('active');
    $('.sidebar-widget.widget_twitter').addClass('tweets-widget').removeClass('widget_twitter, widget3');

    $('.ar_top').on('click', function () {
        var getID = $(this).next().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('td.actions button.button').removeAttr('disabled');
        if( !isNaN( qty ) ) {
            result.value++;
        }else{
            return false;
        }
    });

    $('.ar_down').on('click', function () {
        var getID = $(this).prev().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('td.actions button.button').removeAttr('disabled');
        if( !isNaN( qty ) && qty > 0 ) {
            result.value--;
        }else {
            return false;
        }
    });

})(jQuery);

}
/*
     FILE ARCHIVED ON 17:13:28 Dec 03, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:05:42 Sep 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.446
  exclusion.robots: 0.014
  exclusion.robots.policy: 0.006
  esindex: 0.009
  cdx.remote: 66.094
  LoadShardBlock: 127.248 (3)
  PetaboxLoader3.datanode: 166.257 (6)
  load_resource: 174.071 (2)
  PetaboxLoader3.resolve: 115.598 (2)
  loaddict: 18.497
*/