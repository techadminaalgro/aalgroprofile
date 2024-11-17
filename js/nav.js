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

(function($,window,document,undefined){var OnePageNav=function(elem,options){this.elem=elem;this.$elem=$(elem);this.options=options;this.metadata=this.$elem.data('plugin-options');this.$win=$(window);this.sections={};this.didScroll=!1;this.$doc=$(document);this.docHeight=this.$doc.height()};OnePageNav.prototype={defaults:{navItems:'a',currentClass:'active',changeHash:!1,easing:'swing',filter:'',scrollSpeed:750,scrollThreshold:0.5,begin:!1,end:!1,scrollChange:!1},init:function(){this.config=$.extend({},this.defaults,this.options,this.metadata);this.$nav=this.$elem.find(this.config.navItems);if(this.config.filter!==''){this.$nav=this.$nav.filter(this.config.filter)}
        this.$nav.on('click.onePageNav',$.proxy(this.handleClick,this));this.getPositions();this.bindInterval();this.$win.on('resize.onePageNav',$.proxy(this.getPositions,this));return this},adjustNav:function(self,$parent){self.$elem.find('.'+self.config.currentClass).removeClass(self.config.currentClass);$parent.addClass(self.config.currentClass)},bindInterval:function(){var self=this;var docHeight;self.$win.on('scroll.onePageNav',function(){self.didScroll=!0});self.t=setInterval(function(){docHeight=self.$doc.height();if(self.didScroll){self.didScroll=!1;self.scrollChange()}
        if(docHeight!==self.docHeight){self.docHeight=docHeight;self.getPositions()}},250)},getHash:function($link){return $link.attr('href').split('#')[1]},getPositions:function(){var self=this;var linkHref;var topPos;var $target;self.$nav.each(function(){linkHref=self.getHash($(this));$target=$('#'+linkHref);if($target.length){topPos=$target.offset().top;self.sections[linkHref]=Math.round(topPos)}})},getSection:function(windowPos){var returnValue=null;var windowHeight=Math.round(this.$win.height()*this.config.scrollThreshold);for(var section in this.sections){if((this.sections[section]-windowHeight)<windowPos){returnValue=section}}
        return returnValue},handleClick:function(e){var self=this;var $link=$(e.currentTarget);var $parent=$link.parent();var newLoc='#'+self.getHash($link);if(!$parent.hasClass(self.config.currentClass)){if(self.config.begin){self.config.begin()}
        self.adjustNav(self,$parent);self.unbindInterval();self.scrollTo(newLoc,function(){if(self.config.changeHash){window.location.hash=newLoc}
            self.bindInterval();if(self.config.end){self.config.end()}})}
        e.preventDefault()},scrollChange:function(){var windowTop=this.$win.scrollTop();var position=this.getSection(windowTop);var $parent;if(position!==null){$parent=this.$elem.find('a[href$="#'+position+'"]').parent();if(!$parent.hasClass(this.config.currentClass)){this.adjustNav(this,$parent);if(this.config.scrollChange){this.config.scrollChange($parent)}}}},scrollTo:function(target,callback){var offset=$(target).offset().top;$('html, body').animate({scrollTop:offset},this.config.scrollSpeed,this.config.easing,callback)},unbindInterval:function(){clearInterval(this.t);this.$win.unbind('scroll.onePageNav')}};OnePageNav.defaults=OnePageNav.prototype.defaults;$.fn.onePageNav=function(options){return this.each(function(){new OnePageNav(this,options).init()})}})(jQuery,window,document);

}
/*
     FILE ARCHIVED ON 20:31:15 Nov 29, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:05:41 Sep 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.517
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 13.769
  LoadShardBlock: 105.768 (3)
  PetaboxLoader3.datanode: 184.731 (6)
  PetaboxLoader3.resolve: 163.138 (3)
  load_resource: 254.346 (2)
  loaddict: 71.924
*/