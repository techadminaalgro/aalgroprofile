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

(function($) {
    "use strict";

        let bgndVideo = document.getElementById('bgndVideo');
        if(bgndVideo) {
            $("#bgndVideo").YTPlayer();
        }


        var scrT=$("a[href='#'].scroll-t");
        scrT.on("click", function(e) {
                e.preventDefault();
                $("body,html").animate( {
                        scrollTop: $(document).height()
                    }
                    , 1200)
            }
        );
        function screenshotSlider() {
            var screenshot=$("#screen-shot,#screen-shot2");
            if(screenshot.length) {
                screenshot.owlCarousel( {
                        loop:!0, margin:0, items:3, nav:!0, dots:!1, autoplay:!0, navContainer:".screenshot_area", smartSpeed:2000, navText:['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'], responsiveClass:!0, responsive: {
                            0: {
                                items: 1,
                            }
                            , 400: {
                                items: 2,
                            }
                            , 500: {
                                items: 3,
                            }
                            , 992: {
                                items: 3,
                            }
                        }
                        ,
                    }
                )
            }
        }
        screenshotSlider();

        // Closes responsive menu when a scroll trigger link is clicked
        $('.main-menu-item:not(.menu-item-has-children) .main-menu-link').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

        function active_dropdown() {
            if ($(window).width() < 992) {
                $('.menu li.menu-item-has-children > a').on('click',function(event){
                    event.preventDefault()
                    $(this).parent().find('ul').first().toggle(700);
                    $(this).parent().siblings().find('ul').hide(700);
                });
            }
        }


        function screenShot() {
            var screenshots_slider=$(".screenshots-slider");
            if(screenshots_slider.length) {
                screenshots_slider.owlCarousel( {
                        loop:!0, margin:30, items:3, autoplay:!0, nav:!1, smartSpeed:700, responsiveClass:!0, responsive: {
                            0: {
                                items: 1,
                            }
                            , 420: {
                                items: 2,
                            }
                            , 500: {
                                items: 3,
                            }
                            , 768: {
                                items: 3,
                            }
                            , 992: {
                                items: 3,
                            }
                        }
                        ,
                    }
                )
            }
        }
        screenShot();
        function testimonialSlider() {
            var testslider=$("#testimonial_carousel");
            if(testslider.length) {
                testslider.owlCarousel( {
                        loop: !0, margin: 30, items: 1, nav: !0, dots: !1, autoplay: !0, autoplayHoverPause: true, navContainer: ".testimonial_carousel", smartSpeed: 2000, navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>']
                    }
                )
            }
        }
        testimonialSlider();
        function testimonialSliderthree() {
            var testsliderthree=$(".test-carousel-three");
            if(testsliderthree.length) {
                testsliderthree.owlCarousel( {
                        loop: !0, margin: 30, items: 1, nav: !1, dots: !0, autoplay: !0, smartSpeed: 2000,
                    }
                )
            }
        }
        testimonialSliderthree();
        function testSlidersix() {
            var testslider_6=$("#test_c_six, #test_c_five");
            if(testslider_6.length) {
                testslider_6.owlCarousel( {
                        loop:!0, margin:0, items:2, nav:!0, autoplay:!0, navContainer:'.testimonial_area_two', smartSpeed:2000, navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsiveClass:!0, responsive: {
                            0: {
                                items: 1,
                            }
                            , 680: {
                                items: 2,
                            }
                            ,
                        }
                        ,
                    }
                )
            }
        }
        testSlidersix();
        function clientsSlider() {
            var clientslg_slider=$(".clients-lg-slider");
            if(clientslg_slider.length) {
                clientslg_slider.owlCarousel( {
                        loop:!0, margin:0, items:4, autoplay:!0, smartSpeed:1000, nav:!1, responsiveClass:!0, responsive: {
                            0: {
                                items: 1,
                            }
                            , 420: {
                                items: 2,
                            }
                            , 550: {
                                items: 3,
                            }
                            , 992: {
                                items: 4,
                            }
                        }
                        ,
                    }
                )
            }
        }
        clientsSlider();
        function teamslider() {
            var teamS=$(".team-carousel");
            if(teamS.length) {
                teamS.owlCarousel( {
                        loop:!0, margin:30, items:3, nav:!1, autoplay:!0, smartSpeed:2000, responsiveClass:!0, responsive: {
                            0: {
                                items: 1,
                            }
                            , 420: {
                                items: 2,
                            }
                            , 768: {
                                items: 3,
                            }
                            , 992: {
                                items: 3,
                            }
                        }
                        ,
                    }
                )
            }
        }
        teamslider();
        function blogslider() {
            var blogS=$("#blog-slider");
            if(blogS.length) {
                blogS.owlCarousel( {
                        loop:!0, margin:30, items:3, nav:!1, autoplay:!0, smartSpeed:2000, responsiveClass:!0, responsive: {
                            0: {
                                items: 1,
                            }
                            , 550: {
                                items: 2,
                            }
                            , 768: {
                                items: 2,
                            }
                            , 992: {
                                items: 3,
                            }
                        }
                        ,
                    }
                )
            }
        }
        blogslider();
        function counting_data() {
            var counter=$(".counter");
            if(counter.length) {
                counter.counterUp( {
                        delay: 10, time: 1000
                    }
                )
            }
        }
        counting_data();
        $('.work-popup,.popup').magnificPopup( {
                type:'image', removalDelay:300, mainClass:'mfp-with-zoom', gallery: {
                    enabled: !0
                }
                , zoom: {
                    enabled:!0, duration:300, easing:'ease-in-out', opener:function(openerElement) {
                        return openerElement.is('img')?openerElement: openerElement.find('img')
                    }
                }
            }
        );
        if($("#video-item,#video-items,.video_icon").length>0) {
            $("#video-item,#video-items,.video_icon").magnificPopup( {
                    type: "iframe"
                }
            )
        }
        $('#feel-the-wave').wavify( {
                height: 60, bones: 7, amplitude: 90, color: 'rgba(255, 255, 255, 0.06)', speed: .21
            }
        );
        $('#feel-the-wave-two').wavify( {
                height: 150, bones: 8, amplitude: 70, color: 'rgba(255, 255, 255, 0.06)', speed: .24
            }
        );
        $('#feel-the-wave-three').wavify( {
                height: 10, bones: 5, amplitude: 80, color: 'rgba(255, 255, 255, 0.06)', speed: 0.26
            }
        );
        $(".js-videoPoster").on('click', function(ev) {
                ev.preventDefault();
                var $poster=$(this);
                var $wrapper=$poster.closest('.js-videoWrapper');
                videoPlay($wrapper)
            }
        );
        function videoPlay($wrapper) {
            var $iframe=$wrapper.find('.js-videoIframe');
            var src=$iframe.data('src');
            $wrapper.addClass('videoWrapperActive');
            $iframe.attr('src', src)
        }
        $(".play-btn").on("click", function(ev) {
                var $wrapper=$('.js-videoWrapper');
                var $iframe=$wrapper.find('.js-videoIframe');
                var src=$iframe.data('src');
                $('.videoWrapper').css('z-index', '99')
                if($wrapper.hasClass('videoWrapperActive')) {
                    $wrapper.removeClass('videoWrapperActive');
                    $iframe.attr('src', '')
                }
                else {
                    $wrapper.addClass('videoWrapperActive');
                    $iframe.attr('src', src)
                }
                return!1
            }
        );
        function blogmasonry() {
            var blogitems=$(".blog-masonry");
            if(blogitems.length) {
                blogitems.imagesLoaded(function() {
                        $(blogitems).isotope( {
                                layoutMode: 'masonry',
                            }
                        )
                    }
                )
            }
        }
        blogmasonry();
        function bodyScrollAnimation() {
            if($(window).width()>768) {
                new WOW( {
                        animateClass: 'animated', offset: 0, mobile: !0, duration: 1000,
                    }
                ).init()
            }
        }
        bodyScrollAnimation()
    }

)(jQuery);

}
/*
     FILE ARCHIVED ON 07:48:29 Dec 02, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:05:41 Sep 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.487
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.013
  esindex: 0.009
  cdx.remote: 5.064
  LoadShardBlock: 58.749 (3)
  PetaboxLoader3.datanode: 69.071 (6)
  PetaboxLoader3.resolve: 71.33 (3)
  load_resource: 97.384 (2)
  loaddict: 24.05
*/