
/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function(){"use strict";var e,a=function(t,s){function r(e){return Math.floor(e)}function i(){var e=x.params.autoplay,a=x.slides.eq(x.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?s.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}function n(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),x.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===a||!x.isHorizontal()&&40===a))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===a||!x.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(x.container.parents("."+x.params.slideClass).length>0&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=x.container.offset();x.rtl&&(n.left=n.left-x.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+x.width,n.top],[n.left,n.top+x.height],[n.left+x.width,n.top+x.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}x.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!x.rtl||37===a&&x.rtl)&&x.slideNext(),(37===a&&!x.rtl||39===a&&x.rtl)&&x.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&x.slideNext(),38===a&&x.slidePrev()),x.emit("onKeyPress",x,a)}}function p(e){var a=0,t=0,s=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||r)&&e.deltaMode&&(1===e.deltaMode?(s*=40,r*=40):(s*=800,r*=800)),s&&!a&&(a=s<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:r}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=x.rtl?-1:1,s=p(e);if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(x.params.mousewheelInvert&&(a=-a),x.params.freeMode){var r=x.getWrapperTranslate()+a*x.params.mousewheelSensitivity,i=x.isBeginning,n=x.isEnd;if(r>=x.minTranslate()&&(r=x.minTranslate()),r<=x.maxTranslate()&&(r=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(r),x.updateProgress(),x.updateActiveIndex(),(!i&&x.isBeginning||!n&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),x.emit("onScroll",x,e),x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===r||r===x.maxTranslate())return}else{if((new window.Date).getTime()-x.mousewheel.lastScrollTime>60)if(a<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(a,t){a=e(a);var s,r,i,n=x.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",r=a.attr("data-swiper-parallax-x"),i=a.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):x.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",a.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=s&&s.virtualTranslate;s=s||{};var h={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))h[v]=s[v];else{h[v]={};for(var f in s[v])h[v][f]=s[v][f]}for(var w in c)if(void 0===s[w])s[w]=c[w];else if("object"==typeof s[w])for(var y in c[w])void 0===s[w][y]&&(s[w][y]=c[w][y]);var x=this;if(x.params=s,x.originalParams=h,x.classNames=[],void 0!==e&&"undefined"!=typeof Dom7&&(e=Dom7),(void 0!==e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(x.$=e,x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){if(!x.params.breakpoints)return!1;var e,a=!1,t=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},x.setBreakpoint=function(){var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var a=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,t=x.params.loop&&a.slidesPerView!==x.params.slidesPerView;for(var s in a)x.params[s]=a[s];x.currentBreakpoint=e,t&&x.destroyLoop&&x.reLoop(!0)}},x.params.breakpoints&&x.setBreakpoint(),x.container=e(t),0!==x.container.length)){if(x.container.length>1){var T=[];return x.container.each(function(){T.push(new a(this,s))}),T}x.container[0].swiper=x,x.container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(x.params.effect)>=0&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,x.params.spaceBetween=0,void 0===g&&(x.params.virtualTranslate=!0)),x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),x.wrapper=x.container.children("."+x.params.wrapperClass),x.params.pagination&&(x.paginationContainer=e(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&x.paginationContainer.length>1&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=e(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&x.nextButton.length>1&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=e(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&x.prevButton.length>1&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),x.isHorizontal=function(){return"horizontal"===x.params.direction},x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),x.params.slidesPerColumn>1&&x.classNames.push(x.params.containerModifierClass+"multirow"),x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),x.container.addClass(x.classNames.join(" ")),x.translate=0,x.progress=0,x.velocity=0,x.lockSwipeToNext=function(){x.params.allowSwipeToNext=!1,x.params.allowSwipeToPrev===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){x.params.allowSwipeToPrev=!1,x.params.allowSwipeToNext===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){x.params.allowSwipeToNext=!0,x.params.allowSwipeToPrev===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){x.params.allowSwipeToPrev=!0,x.params.allowSwipeToNext===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor(),x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},x.preloadImages=function(){function e(){void 0!==x&&null!==x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var a=0;a<x.imagesToLoad.length;a++)x.loadImage(x.imagesToLoad[a],x.imagesToLoad[a].currentSrc||x.imagesToLoad[a].getAttribute("src"),x.imagesToLoad[a].srcset||x.imagesToLoad[a].getAttribute("srcset"),x.imagesToLoad[a].sizes||x.imagesToLoad[a].getAttribute("sizes"),!0,e)},x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void i())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,i()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?i():x.stopAutoplay())}))},x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},x.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==x.params.slidesPerView&&x.params.slidesPerView>1)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var s=x.activeIndex+e;if(s>x.slides.length)break;a.push(x.slides.eq(s)[0])}else a.push(x.slides.eq(x.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&x.wrapper.css("height",t+"px")},x.updateContainerSize=function(){var e,a;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,a=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===a&&!x.isHorizontal()||(e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),a=a-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),x.width=e,x.height=a,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,a=x.params.spaceBetween,t=-x.params.slidesOffsetBefore,s=0,i=0;if(void 0!==x.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*x.size),x.virtualSize=-a,x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""});var n;x.params.slidesPerColumn>1&&(n=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(n=Math.max(n,x.params.slidesPerView*x.params.slidesPerColumn)));var o,l=x.params.slidesPerColumn,p=n/l,d=p-(x.params.slidesPerColumn*p-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var m=x.slides.eq(e);if(x.params.slidesPerColumn>1){var u,c,g;"column"===x.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),u=c+g*n/l,m.css({"-webkit-box-ordinal-group":u,"-moz-box-ordinal-group":u,"-ms-flex-order":u,"-webkit-order":u,order:u})):(g=Math.floor(e/p),c=e-g*p),m.css("margin-"+(x.isHorizontal()?"top":"left"),0!==g&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==m.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),x.params.roundLengths&&(o=r(o))):(o=(x.size-(x.params.slidesPerView-1)*a)/x.params.slidesPerView,x.params.roundLengths&&(o=r(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-x.size/2-a),0===e&&(t=t-x.size/2-a),Math.abs(t)<.001&&(t=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t),t=t+o+a),x.virtualSize+=o+a,s=o,i++)}x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter;var h;if(x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),x.params.slidesPerColumn>1&&(x.virtualSize=(o+x.params.spaceBetween)*n,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&h.push(x.snapGrid[e]);x.snapGrid=h}if(!x.params.centeredSlides){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&h.push(x.snapGrid[e]);x.snapGrid=h,Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])>1&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:a+"px"}):x.slides.css({marginRight:a+"px"}):x.slides.css({marginBottom:a+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},x.currentSlidesPerView=function(){var e,a,t=1;if(x.params.centeredSlides){var s,r=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!s&&(r+=x.slides[e].swiperSlideSize,t++,r>x.size&&(s=!0));for(a=x.activeIndex-1;a>=0;a--)x.slides[a]&&!s&&(r+=x.slides[a].swiperSlideSize,t++,r>x.size&&(s=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&t++;return t},x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var a=-e;x.rtl&&(a=e),x.slides.removeClass(x.params.slideVisibleClass);for(var t=0;t<x.slides.length;t++){var s=x.slides[t],r=(a+(x.params.centeredSlides?x.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+x.slidesSizesGrid[t];(i>=0&&i<x.size||n>0&&n<=x.size||i<=0&&n>=x.size)&&x.slides.eq(t).addClass(x.params.slideVisibleClass)}s.progress=x.rtl?-r:r}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var a=x.maxTranslate()-x.minTranslate(),t=x.isBeginning,s=x.isEnd;0===a?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/a,x.isBeginning=x.progress<=0,x.isEnd=x.progress>=1),x.isBeginning&&!t&&x.emit("onReachBeginning",x),x.isEnd&&!s&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,a,t,s=x.rtl?x.translate:-x.translate;for(a=0;a<x.slidesGrid.length;a++)void 0!==x.slidesGrid[a+1]?s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]-(x.slidesGrid[a+1]-x.slidesGrid[a])/2?e=a:s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]&&(e=a+1):s>=x.slidesGrid[a]&&(e=a);x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/x.params.slidesPerGroup),t>=x.snapGrid.length&&(t=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=t,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var a=x.slides.eq(x.activeIndex);a.addClass(x.params.slideActiveClass),s.loop&&(a.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));var t=a.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0),t.addClass(x.params.slideNextClass));var r=a.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);if(x.params.loop&&0===r.length&&(r=x.slides.eq(-1),r.addClass(x.params.slidePrevClass)),s.loop&&(t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),r.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&x.paginationContainer.length>0){var i,n=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?(i=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup),i>x.slides.length-1-2*x.loopedSlides&&(i-=x.slides.length-2*x.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==x.params.paginationType&&(i=n+i)):i=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,"bullets"===x.params.paginationType&&x.bullets&&x.bullets.length>0&&(x.bullets.removeClass(x.params.bulletActiveClass),x.paginationContainer.length>1?x.bullets.each(function(){e(this).index()===i&&e(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(i).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(i+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(n)),"progress"===x.params.paginationType){var o=(i+1)/n,l=o,p=1;x.isHorizontal()||(p=o,l=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,i+1,n)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}x.params.loop||(x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&x.paginationContainer.length>0){var e="";if("bullets"===x.params.paginationType){for(var a=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,t=0;t<a;t++)e+=x.params.paginationBulletRender?x.params.paginationBulletRender(x,t,x.params.bulletClass):"<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},x.update=function(e){function a(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}if(x){x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set();var t;if(e){x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(a(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||a()}else x.params.autoHeight&&x.updateAutoHeight()}},x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),x.params.breakpoints&&x.setBreakpoint();var a=x.params.allowSwipeToPrev,t=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var s=!1;if(x.params.freeMode){var r=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(r),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),s=("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!s&&x.lazy&&x.lazy.load(),x.params.allowSwipeToPrev=a,x.params.allowSwipeToNext=t,x.params.onAfterResize&&x.params.onAfterResize(x)},x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),x.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?r:document,n=!!x.params.nested;if(x.browser.ie)r[t](x.touchEvents.start,x.onTouchStart,!1),i[t](x.touchEvents.move,x.onTouchMove,n),i[t](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};r[t](x.touchEvents.start,x.onTouchStart,o),r[t](x.touchEvents.move,x.onTouchMove,n),r[t](x.touchEvents.end,x.onTouchEnd,o)}(s.simulateTouch&&!x.device.ios&&!x.device.android||s.simulateTouch&&!x.support.touch&&x.device.ios)&&(r[t]("mousedown",x.onTouchStart,!1),document[t]("mousemove",x.onTouchMove,n),document[t]("mouseup",x.onTouchEnd,!1))}window[t]("resize",x.onResize),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.nextButton[a]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[a]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.prevButton[a]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[a]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[a]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[a]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),(x.params.preventClicks||x.params.preventClicksPropagation)&&r[t]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*x.params.slidesPerGroup
;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(a){var t=n(a,"."+x.params.slideClass),s=!1;if(t)for(var r=0;r<x.slides.length;r++)x.slides[r]===t&&(s=!0);if(!t||!s)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=e(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,o=x.clickedIndex,l="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?o<x.loopedSlides-l/2||o>x.slides.length-x.loopedSlides+l/2?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o):o>x.slides.length-l?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o)}else x.slideTo(o)}};var b,C,S,z,M,P,E,I,k,D,L="input, select, textarea, button, video",B=Date.now(),H=[];x.animating=!1,x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,X;x.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(G="touchstart"===a.type)||!("which"in a)||3!==a.which){if(x.params.noSwiping&&n(a,"."+x.params.noSwipingClass))return void(x.allowClick=!0);if(!x.params.swipeHandler||n(a,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=x.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(b=!0,C=!1,S=!0,M=void 0,X=void 0,x.touches.startX=t,x.touches.startY=s,z=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,x.params.threshold>0&&(I=!1),"touchstart"!==a.type){var r=!0;e(a.target).is(L)&&(r=!1),document.activeElement&&e(document.activeElement).is(L)&&document.activeElement.blur(),r&&a.preventDefault()}x.emit("onTouchStart",x,a)}}}},x.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!G||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return x.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(x.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(x.params.onlyExternal)return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.startY=x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,z=Date.now()));if(G&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(G&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(L))return C=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,a),!(a.targetTouches&&a.targetTouches.length>1)){if(x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===M){var t;x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX?M=!1:(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,M=x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle)}if(M&&x.emit("onTouchMoveOpposite",x,a),void 0===X&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(X=!0)),b){if(M)return void(b=!1);if(X){x.allowClick=!1,x.emit("onSliderMove",x,a),a.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&a.stopPropagation(),C||(s.loop&&x.fixLoop(),E=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),D=!1,!x.params.grabCursor||x.params.allowSwipeToNext!==!0&&x.params.allowSwipeToPrev!==!0||x.setGrabCursor(!0)),C=!0;var r=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;r*=x.params.touchRatio,x.rtl&&(r=-r),x.swipeDirection=r>0?"prev":"next",P=r+E;var i=!0;if(r>0&&P>x.minTranslate()?(i=!1,x.params.resistance&&(P=x.minTranslate()-1+Math.pow(-x.minTranslate()+E+r,x.params.resistanceRatio))):r<0&&P<x.maxTranslate()&&(i=!1,x.params.resistance&&(P=x.maxTranslate()+1-Math.pow(x.maxTranslate()-E-r,x.params.resistanceRatio))),i&&(a.preventedByNestedSwiper=!0),!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&P<E&&(P=E),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&P>E&&(P=E),x.params.threshold>0){if(!(Math.abs(r)>x.params.threshold||I))return void(P=E);if(!I)return I=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,P=E,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&((x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(0===H.length&&H.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:z}),H.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),x.updateProgress(P),x.setWrapperTranslate(P))}}}}},x.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),S&&x.emit("onTouchEnd",x,a),S=!1,b){x.params.grabCursor&&C&&b&&(x.params.allowSwipeToNext===!0||x.params.allowSwipeToPrev===!0)&&x.setGrabCursor(!1);var t=Date.now(),s=t-z;if(x.allowClick&&(x.updateClickedSlide(a),x.emit("onTap",x,a),s<300&&t-B>300&&(k&&clearTimeout(k),k=setTimeout(function(){x&&(x.params.paginationHide&&x.paginationContainer.length>0&&!e(a.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,a))},300)),s<300&&t-B<300&&(k&&clearTimeout(k),x.emit("onDoubleTap",x,a))),B=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),!b||!C||!x.swipeDirection||0===x.touches.diff||P===E)return void(b=C=!1);b=C=!1;var r;if(r=x.params.followFinger?x.rtl?x.translate:-x.translate:-P,x.params.freeMode){if(r<-x.minTranslate())return void x.slideTo(x.activeIndex);if(r>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;x.velocity=o/l,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,H.length=0;var p=1e3*x.params.freeModeMomentumRatio,d=x.velocity*p,m=x.translate+d;x.rtl&&(m=-m);var u,c=!1,g=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(m<x.maxTranslate())x.params.freeModeMomentumBounce?(m+x.maxTranslate()<-g&&(m=x.maxTranslate()-g),u=x.maxTranslate(),c=!0,D=!0):m=x.maxTranslate();else if(m>x.minTranslate())x.params.freeModeMomentumBounce?(m-x.minTranslate()>g&&(m=x.minTranslate()+g),u=x.minTranslate(),c=!0,D=!0):m=x.minTranslate();else if(x.params.freeModeSticky){var h,v=0;for(v=0;v<x.snapGrid.length;v+=1)if(x.snapGrid[v]>-m){h=v;break}m=Math.abs(x.snapGrid[h]-m)<Math.abs(x.snapGrid[h-1]-m)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(m=-m)}if(0!==x.velocity)p=x.rtl?Math.abs((-m-x.translate)/x.velocity):Math.abs((m-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(u),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&D&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(u),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(m),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(m),x.updateActiveIndex()}return void((!x.params.freeModeMomentum||s>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex()))}var f,w=0,y=x.slidesSizesGrid[0];for(f=0;f<x.slidesGrid.length;f+=x.params.slidesPerGroup)void 0!==x.slidesGrid[f+x.params.slidesPerGroup]?r>=x.slidesGrid[f]&&r<x.slidesGrid[f+x.params.slidesPerGroup]&&(w=f,y=x.slidesGrid[f+x.params.slidesPerGroup]-x.slidesGrid[f]):r>=x.slidesGrid[f]&&(w=f,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);var T=(r-x.slidesGrid[w])/y;if(s>x.params.longSwipesMs){if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(T>=x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w)),"prev"===x.swipeDirection&&(T>1-x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w))}else{if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(w+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(w)}}},x._slideTo=function(e,a){return x.slideTo(e,a,!0,!0)},x.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var r=-x.snapGrid[x.snapIndex];if(x.params.autoplay&&x.autoplaying&&(s||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(a):x.stopAutoplay()),x.updateProgress(r),x.params.normalizeSlideIndex)for(var i=0;i<x.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*x.slidesGrid[i])&&(e=i);return!(!x.params.allowSwipeToNext&&r<x.translate&&r<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&r>x.translate&&r>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(void 0===a&&(a=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-r===x.translate||!x.rtl&&r===x.translate?(x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(r),!1):(x.updateClasses(),x.onTransitionStart(t),0===a||x.browser.lteIE9?(x.setWrapperTranslate(r),x.setWrapperTransition(0),x.onTransitionEnd(t)):(x.setWrapperTranslate(r),x.setWrapperTransition(a),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(t)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,a,e,t)}return x.slideTo(x.activeIndex-1,a,e,t)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,a,t){return x.slideTo(x.activeIndex,a,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0,!0},x.enableTouchControl=function(){return x.params.onlyExternal=!1,!0},x.setWrapperTransition=function(e,a){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,a),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,a,t){var s=0,i=0;x.isHorizontal()?s=x.rtl?-e:e:i=e,x.params.roundLengths&&(s=r(s),i=r(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+s+"px, "+i+"px)")),x.translate=x.isHorizontal()?s:i;var n,o=x.maxTranslate()-x.minTranslate();n=0===o?0:(e-x.minTranslate())/o,n!==x.progress&&x.updateProgress(e),a&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,t),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,a){var t,s,r,i;return void 0===a&&(a="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),x.rtl&&s&&(s=-s),s||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),a=0;a<e.length;a++)o(e[a]);o(x.container[0],{childList:!1}),o(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},x.createLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var t,s=[],r=[];for(a.each(function(t,i){var n=e(this);t<x.loopedSlides&&r.push(i),t<a.length&&t>=a.length-x.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var a=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(a+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&x.wrapper.append(e[a]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var a=x.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&x.wrapper.prepend(e[t]);a=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(a,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var a,t=x.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(t+x.loopedSlides,0,!1):x.slideTo(t,0,!1)},x.removeAllSlides=function(){for(var e=[],a=0;a<x.slides.length;a++)e.push(a);x.removeSlide(e)},x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var a=x.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;x.params.virtualTranslate||(s-=x.translate);var r=0;x.isHorizontal()||(r=s,s=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var a=!1;x.slides.transitionEnd(function(){if(!a&&x){a=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<x.slides.length;a++){var t=x.slides.eq(a),s=t[0].progress;x.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(x.isHorizontal()?x.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+x.slides.length,x.params.flip.slideShadows){var d=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),m=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(m)),d.length&&(d[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),x.params.virtualTranslate&&0!==a){var t=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!t&&x&&e(this).hasClass(x.params.slideActiveClass)){t=!0,x.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)x.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;x.params.cube.shadow&&(x.isHorizontal()?(a=x.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(a)),a.css({height:x.width+"px"})):(a=x.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.container.append(a))));for(var s=0;s<x.slides.length;s++){var r=x.slides.eq(s),i=90*s,n=Math.floor(i/360);x.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*x.size,d=0):(s-1)%4==0?(l=0,d=4*-n*x.size):(s-2)%4==0?(l=x.size+4*n*x.size,d=x.size):(s-3)%4==0&&(l=-x.size,d=3*x.size+4*x.size*n),x.rtl&&(l=-l),x.isHorizontal()||(p=l,l=0);var m="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,x.rtl&&(t=90*-s-90*o)),r.transform(m),x.params.cube.slideShadows){var u=x.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),r.append(u)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),u.length&&(u[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())a.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),v=x.params.cube.shadowScale,f=x.params.cube.shadowScale/h,w=x.params.cube.shadowOffset;a.transform("scale3d("+v+", 1, "+f+") translate3d(0px, "+(x.height/2+w)+"px, "+-x.height/2/f+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=x.translate,t=x.isHorizontal()?-a+x.width/2:-a+x.height/2,s=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,r=x.params.coverflow.depth,i=0,n=x.slides.length;i<n;i++){var o=x.slides.eq(i),l=x.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*x.params.coverflow.modifier,m=x.isHorizontal()?s*d:0,u=x.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=x.isHorizontal()?0:x.params.coverflow.stretch*d,h=x.isHorizontal()?x.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0);var v="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+u+"deg) rotateY("+m+"deg)";if(o.transform(v),o[0].style.zIndex=1-Math.abs(Math.round(d)),x.params.coverflow.slideShadows){var f=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(f)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),f.length&&(f[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(x.browser.ie){x.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},x.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==x.slides.length)){var s=x.slides.eq(a),r=s.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!s.hasClass(x.params.lazyLoadingClass)||s.hasClass(x.params.lazyStatusLoadedClass)||s.hasClass(x.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var a=e(this);a.addClass(x.params.lazyStatusLoadingClass);var r=a.attr("data-background"),i=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");x.loadImage(a[0],i||r,n,o,!1,function(){if(void 0!==x&&null!==x&&x){if(r?(a.css("background-image",'url("'+r+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),i&&(a.attr("src",i),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),s.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(x.params.slideDuplicateClass)){var l=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(l.index(),!1)}else{var p=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(p.index(),!1)}}x.emit("onLazyImageReady",x,s[0],a[0])}}),x.emit("onLazyImageLoad",x,s[0],a[0])})}},load:function(){var a,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=x.activeIndex;a<x.activeIndex+t;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(t>1||x.params.lazyLoadingInPrevNextAmount&&x.params.lazyLoadingInPrevNextAmount>1){var s=x.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(x.activeIndex+r+Math.max(s,r),x.slides.length),n=Math.max(x.activeIndex-Math.max(r,s),0);for(a=x.activeIndex+t;a<i;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);for(a=n;a<x.activeIndex;a++)x.slides[a]&&x.lazy.loadImageInSlide(a)}else{var o=x.wrapper.children("."+x.params.slideNextClass);o.length>0&&x.lazy.loadImageInSlide(o.index());var l=x.wrapper.children("."+x.params.slidePrevClass);l.length>0&&x.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},x.scrollbar={isTouched:!1,setDragPosition:function(e){var a=x.scrollbar,t=x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[x.isHorizontal()?"left":"top"]-a.dragSize/2,r=-x.minTranslate()*a.moveDivider,i=-x.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,x.updateProgress(s),x.setWrapperTranslate(s,!0)},dragStart:function(e){var a=x.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),x.params.scrollbarHide&&a.track.css("opacity",1),x.wrapper.transition(100),a.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var a=x.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),x.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var a=x.scrollbar;a.isTouched&&(a.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:function(){return x.params.simulateTouch!==!1||x.support.touch?x.touchEvents:x.touchEventsDesktop}(),enableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(x.params.scrollbar){var a=x.scrollbar;a.track=e(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&a.track.length>1&&1===x.container.find(x.params.scrollbar).length&&(a.track=x.container.find(x.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=x.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=x.size/x.virtualSize,a.moveDivider=a.divider*(a.trackSize/x.size),a.dragSize=a.trackSize*a.divider,x.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",x.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,a=x.scrollbar,t=(x.translate,a.dragSize);e=(a.trackSize-a.dragSize)*x.progress,x.rtl&&x.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),x.isHorizontal()?(x.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(x.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),x.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},x.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,r;this.x.length;this.interpolate=function(e){return e?(r=t(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(a),i=-x.controller.spline.interpolate(-e)),i&&"container"!==x.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(x.maxTranslate()-x.minTranslate()),i=(e-x.minTranslate())*r+a.minTranslate()),x.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,x),a.updateActiveIndex()}var r,i,n=x.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,x),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===x.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=x.params.control;if(Array.isArray(i))for(r=0;r<i.length;r++)i[r]!==t&&i[r]instanceof a&&s(i[r]);else i instanceof a&&t!==i&&s(i)}},x.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){
if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=x.slides.length;a<t;a++){var s=x.slides.eq(a),r=s.attr("data-hash")||s.attr("data-history");if(r===e&&!s.hasClass(x.params.slideDuplicateClass)){var i=s.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(x.history.initialized&&x.params.history){var t=x.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),x.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=x.slides.length;s<r;s++){var i=x.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(x.params.slideDuplicateClass)){var o=i.index();x.slideTo(o,e,t)}}else x.slideTo(0,e,t)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,e(document).off("keydown",l)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,e(document).on("keydown",l)},x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(x.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.off(x.mousewheel.event,d),x.params.mousewheelControl=!1,!0},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.on(x.mousewheel.event,d),x.params.mousewheelControl=!0,!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,x.progress)}),x.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},x.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2))},onGestureStart:function(a){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(x.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<x.params.zoomMin&&(a.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),x.params.zoomMin),a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=x.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(x.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=x.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=x.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),x.rtl&&(a.image.startX=-a.image.startX),x.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(x.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,m=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-m/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,m,u,c,g,h,v,f,w,y,x,T;void 0===s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,u=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=u*s.scale,h=c*s.scale,v=Math.min(x/2-g/2,0),f=Math.min(T/2-h/2,0),w=-v,y=-f,d=l*s.scale,m=p*s.scale,d<v&&(d=v),d>w&&(d=w),m<f&&(m=f),m>y&&(m=y)):(d=0,m=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+m+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(x.params.zoom){var s=(x.slides,!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1});x.support.gestures?(x.slides[t]("gesturestart",x.zoom.onGestureStart,s),x.slides[t]("gesturechange",x.zoom.onGestureChange,s),x.slides[t]("gestureend",x.zoom.onGestureEnd,s)):"touchstart"===x.touchEvents.start&&(x.slides[t](x.touchEvents.start,x.zoom.onGestureStart,s),x.slides[t](x.touchEvents.move,x.zoom.onGestureChange,s),x.slides[t](x.touchEvents.end,x.zoom.onGestureEnd,s)),x[t]("touchStart",x.zoom.onTouchStart),x.slides.each(function(a,s){e(s).find("."+x.params.zoomContainerClass).length>0&&e(s)[t](x.touchEvents.move,x.zoom.onTouchMove)}),x[t]("touchEnd",x.zoom.onTouchEnd),x[t]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},x._plugins=[];for(var Y in x.plugins){var A=x.plugins[Y](x,x.params[Y]);A&&x._plugins.push(A)}return x.callPlugins=function(e){for(var a=0;a<x._plugins.length;a++)e in x._plugins[a]&&x._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(x.emitterEventListeners[e])for(a=0;a<x.emitterEventListeners[e].length;a++)x.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,a){return e=u(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(a),x},x.off=function(e,a){var t;if(e=u(e),void 0===a)return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t]===a&&x.emitterEventListeners[e].splice(t,1);return x}},x.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(e,t)};return x.on(e,t),x},x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(x.params.nextButton)?(x.onClickNext(a),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):e(a.target).is(x.params.prevButton)&&(x.onClickPrev(a),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),e(a.target).is("."+x.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=x.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),e(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var a=e(this);x.a11y.makeFocusable(a),x.a11y.addRole(a,"button"),x.a11y.addLabel(a,x.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){x.a11y.liveRegion&&x.a11y.liveRegion.length>0&&x.a11y.liveRegion.remove()}},x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},x.cleanupStyles=function(){x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),x.wrapper.removeAttr("style"),x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),x.params.prevButton&&e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},x.destroy=function(e,a){x.detachEvents(),x.stopAutoplay(),x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),x.params.loop&&x.destroyLoop(),a&&x.cleanupStyles(),x.disconnectObservers(),x.params.zoom&&x.zoom&&x.zoom.destroy(),x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),x.params.a11y&&x.a11y&&x.a11y.destroy(),x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),x.emit("onDestroy"),e!==!1&&(x=null)},x.init(),x}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=["jQuery","Zepto","Dom7"],s=0;s<t.length;s++)window[t[s]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[t[s]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map
/**
 * jquery-s2t v0.1.0
 *
 * https://github.com/hustlzp/jquery-s2t
 * A jQuery plugin to convert between Simplified Chinese and Traditional Chinese.
 * Tested in IE6+, Chrome, Firefox.
 *
 * Copyright 2013-2014 hustlzp
 * Released under the MIT license
 */

(function($) {

    // å…±æ”¶å½•2553æ¡ç®€ç¹å¯¹ç…§
    // å°šæœªè€ƒè¯æ˜¯å¦æ­£ç¡®ã€é‡å¤ã€å®Œæ•´

    /**
     * ç®€ä½“å­—
     * @const
     */
    var S = new String('ä¸‡ä¸Žä¸‘ä¸“ä¸šä¸›ä¸œä¸ä¸¢ä¸¤ä¸¥ä¸§ä¸ªä¸¬ä¸°ä¸´ä¸ºä¸½ä¸¾ä¹ˆä¹‰ä¹Œä¹ä¹”ä¹ ä¹¡ä¹¦ä¹°ä¹±äº‰äºŽäºäº‘äº˜äºšäº§äº©äº²äºµäº¸äº¿ä»…ä»Žä»‘ä»“ä»ªä»¬ä»·ä¼—ä¼˜ä¼™ä¼šä¼›ä¼žä¼Ÿä¼ ä¼¤ä¼¥ä¼¦ä¼§ä¼ªä¼«ä½“ä½™ä½£ä½¥ä¾ ä¾£ä¾¥ä¾¦ä¾§ä¾¨ä¾©ä¾ªä¾¬ä¿£ä¿¦ä¿¨ä¿©ä¿ªä¿­å€ºå€¾å¬å»å¾å¿å‚¥å‚§å‚¨å‚©å„¿å…‘å…–å…šå…°å…³å…´å…¹å…»å…½å†å†…å†ˆå†Œå†™å†›å†œå†¢å†¯å†²å†³å†µå†»å‡€å‡„å‡‰å‡Œå‡å‡‘å‡›å‡ å‡¤å‡«å‡­å‡¯å‡»å‡¼å‡¿åˆåˆ’åˆ˜åˆ™åˆšåˆ›åˆ åˆ«åˆ¬åˆ­åˆ½åˆ¿å‰€å‰‚å‰å‰‘å‰¥å‰§åŠåŠžåŠ¡åŠ¢åŠ¨åŠ±åŠ²åŠ³åŠ¿å‹‹å‹å‹šåŒ€åŒ¦åŒ®åŒºåŒ»åŽåå•å–å¢å¤å§å«å´åºåŽ‚åŽ…åŽ†åŽ‰åŽ‹åŽŒåŽåŽ•åŽ¢åŽ£åŽ¦åŽ¨åŽ©åŽ®åŽ¿å‚å†å‡åŒå‘å˜å™å å¶å·å¹å½ååŽå“å•å—å£å¨å¬å¯å´å‘’å‘“å‘•å‘–å‘—å‘˜å‘™å‘›å‘œå’å’”å’™å’›å’å’¤å’´å’¸å“Œå“å“‘å“’å““å“”å“•å“—å“™å“œå“å“Ÿå”›å”å” å”¡å”¢å”£å”¤å”¿å•§å•¬å•­å•®å•°å•´å•¸å–·å–½å–¾å—«å‘µå—³å˜˜å˜¤å˜±å™œå™¼åš£åš¯å›¢å›­å›±å›´å›µå›½å›¾åœ†åœ£åœ¹åœºå‚åå—åšå›åœååžåŸå åž„åž…åž†åž’åž¦åž§åž©åž«åž­åž¯åž±åž²åž´åŸ˜åŸ™åŸšåŸåŸ¯å ‘å •å¡†å¢™å£®å£°å£³å£¶å£¸å¤„å¤‡å¤å¤Ÿå¤´å¤¸å¤¹å¤ºå¥å¥‚å¥‹å¥–å¥¥å¦†å¦‡å¦ˆå¦©å¦ªå¦«å§—å§œå¨„å¨…å¨†å¨‡å¨ˆå¨±å¨²å¨´å©³å©´å©µå©¶åªªå«’å«”å«±å¬·å­™å­¦å­ªå®å®å®žå® å®¡å®ªå®«å®½å®¾å¯å¯¹å¯»å¯¼å¯¿å°†å°”å°˜å°§å°´å°¸å°½å±‚å±ƒå±‰å±Šå±žå±¡å±¦å±¿å²å²‚å²–å²—å²˜å²™å²šå²›å²­å²³å²½å²¿å³ƒå³„å³¡å³£å³¤å³¥å³¦å´‚å´ƒå´„å´­åµ˜åµšåµ›åµåµ´å·…å·©å·¯å¸å¸…å¸ˆå¸å¸å¸˜å¸œå¸¦å¸§å¸®å¸±å¸»å¸¼å¹‚å¹žå¹²å¹¶å¹¿åº„åº†åºåº‘åº“åº”åº™åºžåºŸåº¼å»ªå¼€å¼‚å¼ƒå¼ å¼¥å¼ªå¼¯å¼¹å¼ºå½’å½“å½•å½Ÿå½¦å½»å¾„å¾•å¾¡å¿†å¿å¿§å¿¾æ€€æ€æ€‚æ€ƒæ€„æ€…æ€†æ€œæ€»æ€¼æ€¿æ‹æ³æ¶æ¸æ¹æºæ»æ¼æ½æ‚¦æ‚«æ‚¬æ‚­æ‚¯æƒŠæƒ§æƒ¨æƒ©æƒ«æƒ¬æƒ­æƒ®æƒ¯æ„æ„ æ„¤æ„¦æ„¿æ…‘æ…­æ†·æ‡‘æ‡’æ‡”æˆ†æˆ‹æˆæˆ—æˆ˜æˆ¬æˆ·æ‰Žæ‰‘æ‰¦æ‰§æ‰©æ‰ªæ‰«æ‰¬æ‰°æŠšæŠ›æŠŸæŠ æŠ¡æŠ¢æŠ¤æŠ¥æ‹…æ‹Ÿæ‹¢æ‹£æ‹¥æ‹¦æ‹§æ‹¨æ‹©æŒ‚æŒšæŒ›æŒœæŒæŒžæŒŸæŒ æŒ¡æŒ¢æŒ£æŒ¤æŒ¥æŒ¦æžæŸæ¡æ¢æ£æ®æ»æŽ³æŽ´æŽ·æŽ¸æŽºæŽ¼æ¸æ½æ¿æ€ææ‚æ…æºæ‘„æ‘…æ‘†æ‘‡æ‘ˆæ‘Šæ’„æ’‘æ’µæ’·æ’¸æ’ºæ“žæ”’æ•Œæ•›æ•°æ–‹æ–“æ–—æ–©æ–­æ— æ—§æ—¶æ—·æ—¸æ˜™æ˜¼æ˜½æ˜¾æ™‹æ™’æ™“æ™”æ™•æ™–æš‚æš§æœ­æœ¯æœ´æœºæ€æ‚æƒæ¡æ¥æ¨æ©æ°æžæž„æžžæž¢æž£æž¥æž§æž¨æžªæž«æž­æŸœæŸ æŸ½æ €æ …æ ‡æ ˆæ ‰æ Šæ ‹æ Œæ Žæ æ ‘æ –æ ·æ ¾æ¡Šæ¡ æ¡¡æ¡¢æ¡£æ¡¤æ¡¥æ¡¦æ¡§æ¡¨æ¡©æ¢¦æ¢¼æ¢¾æ£€æ£‚æ¤æ¤Ÿæ¤ æ¤¤æ¤­æ¥¼æ¦„æ¦‡æ¦ˆæ¦‰æ§šæ§›æ§Ÿæ§ æ¨ªæ¨¯æ¨±æ©¥æ©±æ©¹æ©¼æªæª©æ¬¢æ¬¤æ¬§æ­¼æ®æ®‡æ®‹æ®’æ®“æ®šæ®¡æ®´æ¯æ¯‚æ¯•æ¯™æ¯¡æ¯µæ°‡æ°”æ°¢æ°©æ°²æ±‡æ±‰æ±¡æ±¤æ±¹æ²“æ²Ÿæ²¡æ²£æ²¤æ²¥æ²¦æ²§æ²¨æ²©æ²ªæ²µæ³žæ³ªæ³¶æ³·æ³¸æ³ºæ³»æ³¼æ³½æ³¾æ´æ´’æ´¼æµƒæµ…æµ†æµ‡æµˆæµ‰æµŠæµ‹æµæµŽæµæµæµ‘æµ’æµ“æµ”æµ•æ¶‚æ¶Œæ¶›æ¶æ¶žæ¶Ÿæ¶ æ¶¡æ¶¢æ¶£æ¶¤æ¶¦æ¶§æ¶¨æ¶©æ·€æ¸Šæ¸Œæ¸æ¸Žæ¸æ¸‘æ¸”æ¸–æ¸—æ¸©æ¸¸æ¹¾æ¹¿æºƒæº…æº†æº‡æ»—æ»šæ»žæ»Ÿæ» æ»¡æ»¢æ»¤æ»¥æ»¦æ»¨æ»©æ»ªæ¼¤æ½†æ½‡æ½‹æ½æ½œæ½´æ¾œæ¿‘æ¿’çç­ç¯çµç¾ç¿ç‚€ç‚‰ç‚–ç‚œç‚ç‚¹ç‚¼ç‚½çƒçƒ‚çƒƒçƒ›çƒŸçƒ¦çƒ§çƒ¨çƒ©çƒ«çƒ¬çƒ­ç„•ç„–ç„˜ç……ç…³ç†˜çˆ±çˆ·ç‰ç‰¦ç‰µç‰ºçŠŠçŠŸçŠ¶çŠ·çŠ¸çŠ¹ç‹ˆç‹ç‹ç‹žç‹¬ç‹­ç‹®ç‹¯ç‹°ç‹±ç‹²çŒƒçŒŽçŒ•çŒ¡çŒªçŒ«çŒ¬çŒ®ç­çŽ‘çŽ™çŽšçŽ›çŽ®çŽ¯çŽ°çŽ±çŽºç‰ççç‘ç°ç²çŽççç¼ç‘¶ç‘·ç’‡ç’Žç“’ç“®ç“¯ç”µç”»ç•…ç•²ç•´ç––ç–—ç–Ÿç– ç–¡ç–¬ç–®ç–¯ç–±ç–´ç—ˆç—‰ç—’ç—–ç—¨ç—ªç—«ç—´ç˜…ç˜†ç˜—ç˜˜ç˜ªç˜«ç˜¾ç˜¿ç™žç™£ç™«ç™¯çš‘çš±çš²ç›ç›ç›‘ç›–ç›—ç›˜çœçœ¦çœ¬ç€ççç‘çž’çž©çŸ«çŸ¶çŸ¾çŸ¿ç €ç ç –ç —ç šç œç ºç »ç ¾ç¡€ç¡ç¡…ç¡•ç¡–ç¡—ç¡™ç¡šç¡®ç¡·ç¢ç¢›ç¢œç¢±ç¢¹ç£™ç¤¼ç¥Žç¥¢ç¥¯ç¥·ç¥¸ç¦€ç¦„ç¦…ç¦»ç§ƒç§†ç§ç§¯ç§°ç§½ç§¾ç¨†ç¨Žç¨£ç¨³ç©‘ç©·çªƒçªçª‘çªœçªçª¥çª¦çª­ç«–ç«žç¬ƒç¬‹ç¬”ç¬•ç¬ºç¬¼ç¬¾ç­‘ç­šç­›ç­œç­ç­¹ç­¾ç®€ç®“ç®¦ç®§ç®¨ç®©ç®ªç®«ç¯‘ç¯“ç¯®ç¯±ç°–ç±ç±´ç±»ç±¼ç²œç²ç²¤ç²ªç²®ç³ç³‡ç´§çµ·çºŸçº çº¡çº¢çº£çº¤çº¥çº¦çº§çº¨çº©çºªçº«çº¬çº­çº®çº¯çº°çº±çº²çº³çº´çºµçº¶çº·çº¸çº¹çººçº»çº¼çº½çº¾çº¿ç»€ç»ç»‚ç»ƒç»„ç»…ç»†ç»‡ç»ˆç»‰ç»Šç»‹ç»Œç»ç»Žç»ç»ç»‘ç»’ç»“ç»”ç»•ç»–ç»—ç»˜ç»™ç»šç»›ç»œç»ç»žç»Ÿç» ç»¡ç»¢ç»£ç»¤ç»¥ç»¦ç»§ç»¨ç»©ç»ªç»«ç»¬ç»­ç»®ç»¯ç»°ç»±ç»²ç»³ç»´ç»µç»¶ç»·ç»¸ç»¹ç»ºç»»ç»¼ç»½ç»¾ç»¿ç¼€ç¼ç¼‚ç¼ƒç¼„ç¼…ç¼†ç¼‡ç¼ˆç¼‰ç¼Šç¼‹ç¼Œç¼ç¼Žç¼ç¼ç¼‘ç¼’ç¼“ç¼”ç¼•ç¼–ç¼—ç¼˜ç¼™ç¼šç¼›ç¼œç¼ç¼žç¼Ÿç¼ ç¼¡ç¼¢ç¼£ç¼¤ç¼¥ç¼¦ç¼§ç¼¨ç¼©ç¼ªç¼«ç¼¬ç¼­ç¼®ç¼¯ç¼°ç¼±ç¼²ç¼³ç¼´ç¼µç½‚ç½‘ç½—ç½šç½¢ç½´ç¾ç¾Ÿç¾¡ç¿˜ç¿™ç¿šè€¢è€§è€¸è€»è‚è‹èŒèè”è©èªè‚ƒè‚ è‚¤è‚·è‚¾è‚¿èƒ€èƒèƒ†èƒœèƒ§èƒ¨èƒªèƒ«èƒ¶è„‰è„è„è„è„‘è„“è„”è„šè„±è„¶è„¸è…Šè…Œè…˜è…­è…»è…¼è…½è…¾è†‘è‡œèˆ†èˆ£èˆ°èˆ±èˆ»è‰°è‰³è‰¹è‰ºèŠ‚èŠˆèŠ—èŠœèŠ¦è‹è‹‡è‹ˆè‹‹è‹Œè‹è‹Žè‹è‹˜è‹¹èŒŽèŒèŒ‘èŒ”èŒ•èŒ§è†èè™èšè›èœèžèŸè è¡è£è¤è¥è¦è§è¨è©èªè«è¬è­è®è¯èŽ…èŽœèŽ±èŽ²èŽ³èŽ´èŽ¶èŽ·èŽ¸èŽ¹èŽºèŽ¼èšèè¤è¥è¦è§è¨è‘±è’‡è’‰è’‹è’Œè“è“Ÿè“ è“£è“¥è“¦è”·è”¹è”ºè”¼è•²è•´è–®è—è—“è™è™‘è™šè™«è™¬è™®è™½è™¾è™¿èš€èšèš‚èš•èšèš¬è›Šè›Žè›è›®è›°è›±è›²è›³è›´èœ•èœ—èœ¡è‡èˆè‰èŽè¼è¾èž€èž¨èŸè¡…è¡”è¡¥è¡¬è¡®è¢„è¢…è¢†è¢œè¢­è¢¯è£…è£†è£ˆè£¢è££è£¤è£¥è¤›è¤´è¥è¥•è§è§‚è§ƒè§„è§…è§†è§‡è§ˆè§‰è§Šè§‹è§Œè§è§Žè§è§è§‘è§žè§¦è§¯è©Ÿèª‰èªŠè® è®¡è®¢è®£è®¤è®¥è®¦è®§è®¨è®©è®ªè®«è®­è®®è®¯è®°è®±è®²è®³è®´è®µè®¶è®·è®¸è®¹è®ºè®»è®¼è®½è®¾è®¿è¯€è¯è¯‚è¯ƒè¯„è¯…è¯†è¯‡è¯ˆè¯‰è¯Šè¯‹è¯Œè¯è¯Žè¯è¯è¯‘è¯’è¯“è¯”è¯•è¯–è¯—è¯˜è¯™è¯šè¯›è¯œè¯è¯žè¯Ÿè¯ è¯¡è¯¢è¯£è¯¤è¯¥è¯¦è¯§è¯¨è¯©è¯ªè¯«è¯¬è¯­è¯®è¯¯è¯°è¯±è¯²è¯³è¯´è¯µè¯¶è¯·è¯¸è¯¹è¯ºè¯»è¯¼è¯½è¯¾è¯¿è°€è°è°‚è°ƒè°„è°…è°†è°‡è°ˆè°Šè°‹è°Œè°è°Žè°è°è°‘è°’è°“è°”è°•è°–è°—è°˜è°™è°šè°›è°œè°è°žè°Ÿè° è°¡è°¢è°£è°¤è°¥è°¦è°§è°¨è°©è°ªè°«è°¬è°­è°®è°¯è°°è°±è°²è°³è°´è°µè°¶è°·è±®è´è´žè´Ÿè´ è´¡è´¢è´£è´¤è´¥è´¦è´§è´¨è´©è´ªè´«è´¬è´­è´®è´¯è´°è´±è´²è´³è´´è´µè´¶è´·è´¸è´¹è´ºè´»è´¼è´½è´¾è´¿èµ€èµèµ‚èµƒèµ„èµ…èµ†èµ‡èµˆèµ‰èµŠèµ‹èµŒèµèµŽèµèµèµ‘èµ’èµ“èµ”èµ•èµ–èµ—èµ˜èµ™èµšèµ›èµœèµèµžèµŸèµ èµ¡èµ¢èµ£èµªèµµèµ¶è¶‹è¶±è¶¸è·ƒè·„è·–è·žè·µè·¶è··è·¸è·¹è·»è¸Šè¸Œè¸ªè¸¬è¸¯è¹‘è¹’è¹°è¹¿èºèºœèº¯è½¦è½§è½¨è½©è½ªè½«è½¬è½­è½®è½¯è½°è½±è½²è½³è½´è½µè½¶è½·è½¸è½¹è½ºè½»è½¼è½½è½¾è½¿è¾€è¾è¾‚è¾ƒè¾„è¾…è¾†è¾‡è¾ˆè¾‰è¾Šè¾‹è¾Œè¾è¾Žè¾è¾è¾‘è¾’è¾“è¾”è¾•è¾–è¾—è¾˜è¾™è¾šè¾žè¾©è¾«è¾¹è¾½è¾¾è¿è¿‡è¿ˆè¿è¿˜è¿™è¿›è¿œè¿è¿žè¿Ÿè¿©è¿³è¿¹é€‚é€‰é€Šé€’é€¦é€»é—é¥é‚“é‚é‚¬é‚®é‚¹é‚ºé‚»éƒéƒ„éƒéƒéƒ‘éƒ“éƒ¦éƒ§éƒ¸é…é…¦é…±é…½é…¾é…¿é‡Šé‡Œé‰…é‰´éŠ®éŒ¾é’†é’‡é’ˆé’‰é’Šé’‹é’Œé’é’Žé’é’é’‘é’’é’“é’”é’•é’–é’—é’˜é’™é’šé’›é’é’žé’Ÿé’ é’¡é’¢é’£é’¤é’¥é’¦é’§é’¨é’©é’ªé’«é’¬é’­é’®é’¯é’°é’±é’²é’³é’´é’µé’¶é’·é’¸é’¹é’ºé’»é’¼é’½é’¾é’¿é“€é“é“‚é“ƒé“„é“…é“†é“ˆé“‰é“Šé“‹é“é“Žé“é“é“‘é“’é“•é“—é“˜é“™é“šé“›é“œé“é“žé“Ÿé“ é“¡é“¢é“£é“¤é“¥é“¦é“§é“¨é“ªé“«é“¬é“­é“®é“¯é“°é“±é“²é“³é“´é“µé“¶é“·é“¸é“¹é“ºé“»é“¼é“½é“¾é“¿é”€é”é”‚é”ƒé”„é”…é”†é”‡é”ˆé”‰é”Šé”‹é”Œé”é”Žé”é”é”‘é”’é”“é””é”•é”–é”—é”™é”šé”œé”žé”Ÿé” é”¡é”¢é”£é”¤é”¥é”¦é”¨é”©é”«é”¬é”­é”®é”¯é”°é”±é”²é”³é”´é”µé”¶é”·é”¸é”¹é”ºé”»é”¼é”½é”¾é”¿é•€é•é•‚é•ƒé•†é•‡é•ˆé•‰é•Šé•Œé•é•Žé•é•é•‘é•’é••é•–é•—é•™é•šé•›é•œé•é•žé•Ÿé• é•¡é•¢é•£é•¤é•¥é•¦é•§é•¨é•©é•ªé•«é•¬é•­é•®é•¯é•°é•±é•²é•³é•´é•¶é•¿é—¨é—©é—ªé—«é—¬é—­é—®é—¯é—°é—±é—²é—³é—´é—µé—¶é—·é—¸é—¹é—ºé—»é—¼é—½é—¾é—¿é˜€é˜é˜‚é˜ƒé˜„é˜…é˜†é˜‡é˜ˆé˜‰é˜Šé˜‹é˜Œé˜é˜Žé˜é˜é˜‘é˜’é˜“é˜”é˜•é˜–é˜—é˜˜é˜™é˜šé˜›é˜Ÿé˜³é˜´é˜µé˜¶é™…é™†é™‡é™ˆé™‰é™•é™§é™¨é™©éšéšéš¶éš½éš¾é›é› é›³é›¾éœéœ‰éœ­é“é™é¥éž‘éž’éž¯éž´éŸ¦éŸ§éŸ¨éŸ©éŸªéŸ«éŸ¬éŸµé¡µé¡¶é¡·é¡¸é¡¹é¡ºé¡»é¡¼é¡½é¡¾é¡¿é¢€é¢é¢‚é¢ƒé¢„é¢…é¢†é¢‡é¢ˆé¢‰é¢Šé¢‹é¢Œé¢é¢Žé¢é¢é¢‘é¢’é¢“é¢”é¢•é¢–é¢—é¢˜é¢™é¢šé¢›é¢œé¢é¢žé¢Ÿé¢ é¢¡é¢¢é¢£é¢¤é¢¥é¢¦é¢§é£Žé£é£é£‘é£’é£“é£”é£•é£–é£—é£˜é£™é£šé£žé£¨é¤é¥¤é¥¥é¥¦é¥§é¥¨é¥©é¥ªé¥«é¥¬é¥­é¥®é¥¯é¥°é¥±é¥²é¥³é¥´é¥µé¥¶é¥·é¥¸é¥¹é¥ºé¥»é¥¼é¥½é¥¾é¥¿é¦€é¦é¦‚é¦ƒé¦„é¦…é¦†é¦‡é¦ˆé¦‰é¦Šé¦‹é¦Œé¦é¦Žé¦é¦é¦‘é¦’é¦“é¦”é¦•é©¬é©­é©®é©¯é©°é©±é©²é©³é©´é©µé©¶é©·é©¸é©¹é©ºé©»é©¼é©½é©¾é©¿éª€éªéª‚éªƒéª„éª…éª†éª‡éªˆéª‰éªŠéª‹éªŒéªéªŽéªéªéª‘éª’éª“éª”éª•éª–éª—éª˜éª™éªšéª›éªœéªéªžéªŸéª éª¡éª¢éª£éª¤éª¥éª¦éª§é«…é«‹é«Œé¬“é­‡é­‰é±¼é±½é±¾é±¿é²€é²é²‚é²„é²…é²†é²‡é²ˆé²‰é²Šé²‹é²Œé²é²Žé²é²é²‘é²’é²“é²”é²•é²–é²—é²˜é²™é²šé²›é²œé²é²žé²Ÿé² é²¡é²¢é²£é²¤é²¥é²¦é²§é²¨é²©é²ªé²«é²¬é²­é²®é²¯é²°é²±é²²é²³é²´é²µé²¶é²·é²¸é²¹é²ºé²»é²¼é²½é²¾é²¿é³€é³é³‚é³ƒé³„é³…é³†é³‡é³ˆé³‰é³Šé³‹é³Œé³é³Žé³é³é³‘é³’é³“é³”é³•é³–é³—é³˜é³™é³›é³œé³é³žé³Ÿé³ é³¡é³¢é³£é¸Ÿé¸ é¸¡é¸¢é¸£é¸¤é¸¥é¸¦é¸§é¸¨é¸©é¸ªé¸«é¸¬é¸­é¸®é¸¯é¸°é¸±é¸²é¸³é¸´é¸µé¸¶é¸·é¸¸é¸¹é¸ºé¸»é¸¼é¸½é¸¾é¸¿é¹€é¹é¹‚é¹ƒé¹„é¹…é¹†é¹‡é¹ˆé¹‰é¹Šé¹‹é¹Œé¹é¹Žé¹é¹é¹‘é¹’é¹“é¹”é¹•é¹–é¹—é¹˜é¹šé¹›é¹œé¹é¹žé¹Ÿé¹ é¹¡é¹¢é¹£é¹¤é¹¥é¹¦é¹§é¹¨é¹©é¹ªé¹«é¹¬é¹­é¹¯é¹°é¹±é¹²é¹³é¹´é¹¾éº¦éº¸é»„é»‰é»¡é»©é»ªé»¾é¼‹é¼Œé¼é¼—é¼¹é½„é½é½‘é½¿é¾€é¾é¾‚é¾ƒé¾„é¾…é¾†é¾‡é¾ˆé¾‰é¾Šé¾‹é¾Œé¾™é¾šé¾›é¾Ÿå¿—åˆ¶å’¨åªé‡Œç³»èŒƒæ¾æ²¡å°å°é—¹é¢å‡†é’Ÿåˆ«é—²å¹²å°½è„æ‹¼');

    /**
     * ç¹ä½“å­—
     * @const
     */
    var T = new String('è¬èˆ‡é†œå°ˆæ¥­å¢æ±çµ²ä¸Ÿå…©åš´å–ªå€‹çˆ¿è±è‡¨ç‚ºéº—èˆ‰éº¼ç¾©çƒæ¨‚å–¬ç¿’é„‰æ›¸è²·äº‚çˆ­æ–¼è™§é›²äº™äºžç”¢ç•è¦ªè¤»åš²å„„åƒ…å¾žä¾–å€‰å„€å€‘åƒ¹çœ¾å„ªå¤¥æœƒå‚´å‚˜å‰å‚³å‚·å€€å€«å‚–å½ä½‡é«”é¤˜å‚­åƒ‰ä¿ ä¾¶åƒ¥åµå´åƒ‘å„ˆå„•å„‚ä¿å„”å„¼å€†å„·å„‰å‚µå‚¾å‚¯åƒ‚åƒ¨å„Ÿå„»å„å„²å„ºå…’å…Œå…—é»¨è˜­é—œèˆˆèŒ²é¤Šç¸å›…å…§å²¡å†Šå¯«è»è¾²å¡šé¦®è¡æ±ºæ³å‡æ·¨æ·’æ¶¼æ·©æ¸›æ¹Šå‡œå¹¾é³³é³§æ†‘å‡±æ“Šæ°¹é‘¿èŠ»åŠƒåŠ‰å‰‡å‰›å‰µåˆªåˆ¥å‰—å‰„åŠŠåŠŒå‰´åŠ‘å‰®åŠå‰åŠ‡å‹¸è¾¦å‹™å‹±å‹•å‹µå‹å‹žå‹¢å‹³çŒ›å‹©å‹»åŒ­åŒ±å€é†«è¯å”å–®è³£ç›§é¹µè‡¥è¡›å»å·¹å» å»³æ›†åŽ²å£“åŽ­åŽ™å»å»‚åŽ´å»ˆå»šå»„å»ç¸£åƒé‰é†é›™ç™¼è®Šæ•˜ç–Šè‘‰è™Ÿæ­Žå˜°ç±²å¾Œåš‡å‘‚å—Žå”šå™¸è½å•Ÿå³å˜¸å›ˆå˜”åš¦å”„å“¡å’¼å—†å—šè© å“¢åš¨åš€å™å’å™…é¹¹å‘±éŸ¿å•žå™ å˜µå—¶å™¦å˜©å™²åšŒå™¥å–²å˜œå—Šå˜®å•¢å—©å”•å–šå‘¼å˜–å—‡å›€é½§å›‰å˜½å˜¯å™´å˜åš³å›å—¬å™¯å™“åš¶å›‘åš•åŠˆå›‚è¬”åœ˜åœ’å›ªåœåœ‡åœ‹åœ–åœ“è–å£™å ´é˜ªå£žå¡Šå …å£‡å£¢å£©å¡¢å¢³å¢œå£Ÿå£Ÿå£šå£˜å¢¾å°å Šå¢ŠåŸ¡å¢¶å£‹å¡å –å¡’å¡¤å å¢Šåžµå¡¹å¢®å£ªç‰†å£¯è²æ®¼å£ºå£¼è™•å‚™è¤‡å¤ é ­èª‡å¤¾å¥ªå¥©å¥å¥®çŽå¥§å¦å©¦åª½å«µå«—åª¯å§è–‘å©å©­å¬ˆå¬Œå­Œå¨›åª§å«»å«¿å¬°å¬‹å¬¸åª¼å¬¡å¬ªå¬™å¬¤å­«å­¸å­¿å¯§å¯¶å¯¦å¯µå¯©æ†²å®®å¯¬è³“å¯¢å°å°‹å°Žå£½å°‡çˆ¾å¡µå ¯å°·å±ç›¡å±¤å±­å±œå±†å±¬å±¢å±¨å¶¼æ­²è±ˆå¶‡å´—å³´å¶´åµå³¶å¶ºå¶½å´ å·‹å¶¨å¶§å³½å¶¢å¶ å´¢å·’å¶—å´å¶®å¶„å¶¸å¶”å´³å¶è„Šå·”éžå·°å¹£å¸¥å¸«å¹ƒå¸³ç°¾å¹Ÿå¸¶å¹€å¹«å¹¬å¹˜å¹—å†ªè¥†å¹¹ä¸¦å»£èŽŠæ…¶å»¬å»¡åº«æ‡‰å»Ÿé¾å»¢å»Žå»©é–‹ç•°æ£„å¼µå½Œå¼³å½Žå½ˆå¼·æ­¸ç•¶éŒ„å½ å½¥å¾¹å¾‘å¾ ç¦¦æ†¶æ‡ºæ†‚æ„¾æ‡·æ…‹æ…«æ†®æ…ªæ‚µæ„´æ†ç¸½æ‡Ÿæ‡Œæˆ€æ‡‡æƒ¡æ…Ÿæ‡¨æ„·æƒ»æƒ±æƒ²æ‚…æ„¨æ‡¸æ…³æ†«é©šæ‡¼æ…˜æ‡²æ†Šæ„œæ…šæ†šæ…£æ¹£æ…æ†¤æ†’é¡˜æ‡¾æ†–æ€µæ‡£æ‡¶æ‡æˆ‡æˆ”æˆ²æˆ§æˆ°æˆ©æˆ¶ç´®æ’²æ‰¡åŸ·æ“´æ«æŽƒæšæ“¾æ’«æ‹‹æ‘¶æ‘³æŽ„æ¶è­·å ±æ“”æ“¬æ”æ€æ“æ””æ“°æ’¥æ“‡æŽ›æ‘¯æ”£æŽ—æ’¾æ’»æŒ¾æ’“æ“‹æ’ŸæŽ™æ“ æ®æ’æ’ˆææ’¿æ›æ—æ“šæ’šæ“„æ‘‘æ“²æ’£æ‘»æ‘œæ‘£æ”¬æ’³æ”™æ“±æ‘Ÿæ”ªæ”œæ”æ”„æ“ºæ–æ“¯æ”¤æ”–æ’æ”†æ“·æ“¼æ”›æ“»æ”¢æ•µæ–‚æ•¸é½‹æ–•é¬¥æ–¬æ–·ç„¡èˆŠæ™‚æ› æš˜æ›‡æ™æ›¨é¡¯æ™‰æ›¬æ›‰æ›„æšˆæš‰æš«æ›–åŠ„è¡“æ¨¸æ©Ÿæ®ºé›œæ¬Šæ¢ä¾†æ¥Šæ¦ªå‚‘æ¥µæ§‹æ¨…æ¨žæ£—æ«ªæ¢˜æ£–æ§æ¥“æ¢Ÿæ«ƒæª¸æª‰æ¢”æŸµæ¨™æ£§æ«›æ«³æ£Ÿæ«¨æ«Ÿæ¬„æ¨¹æ£²æ¨£æ¬’æ£¬æ¤æ©ˆæ¥¨æª”æ¦¿æ©‹æ¨ºæªœæ§³æ¨å¤¢æª®æ£¶æª¢æ¬žæ§¨æ«æ§§æ¬æ©¢æ¨“æ¬–æ«¬æ«šæ«¸æªŸæª»æª³æ«§æ©«æª£æ«»æ««æ«¥æ«“æ«žç°·æªæ­¡æ­Ÿæ­æ®²æ­¿æ®¤æ®˜æ®žæ®®æ®«æ®¯æ¯†æ¯€è½‚ç•¢æ–ƒæ°ˆæ¯¿æ°Œæ°£æ°«æ°¬æ°³å½™æ¼¢æ±™æ¹¯æ´¶éæºæ²’çƒæ¼šç€æ·ªæ»„æ¸¢æºˆæ»¬æ¿”æ¿˜æ·šæ¾©ç€§ç€˜æ¿¼ç€‰æ½‘æ¾¤æ¶‡æ½”ç‘çªªæµ¹æ·ºæ¼¿æ¾†æ¹žæº®æ¿æ¸¬æ¾®æ¿Ÿç€æ»»æ¸¾æ»¸æ¿ƒæ½¯æ¿œå¡—æ¹§æ¿¤æ¾‡æ·¶æ¼£æ½¿æ¸¦æº³æ¸™æ»Œæ½¤æ¾—æ¼²æ¾€æ¾±æ·µæ·¥æ¼¬ç€†æ¼¸æ¾ æ¼ç€‹æ»²æº«éŠç£æ¿•æ½°æ¿ºæ¼µæ¼Šæ½·æ»¾æ»¯ç©ç„æ»¿ç€…æ¿¾æ¿«ç¤æ¿±ç˜æ¾¦æ¿«ç€ ç€Ÿç€²æ¿°æ½›ç€¦ç€¾ç€¨ç€•çæ»…ç‡ˆéˆç½ç‡¦ç…¬çˆç‡‰ç…’ç†—é»žç…‰ç†¾çˆçˆ›çƒ´ç‡­ç…™ç…©ç‡’ç‡ç‡´ç‡™ç‡¼ç†±ç…¥ç‡œç‡¾ç…†ç³Šæºœæ„›çˆºç‰˜çŠ›ç‰½çŠ§çŠ¢å¼·ç‹€ç·ççŒ¶ç‹½éº…ç®ç°ç¨ç‹¹ç…çªçŒ™ç„çŒ»ç«çµç¼çŽ€è±¬è²“èŸç»çºç’£ç’µç‘’ç‘ªç‘‹ç’°ç¾ç‘²ç’½ç‘‰çŽ¨çºç“ç’«ç¿ç’¡ç’‰ç‘£ç“Šç‘¤ç’¦ç’¿ç“”ç“šç”•ç”Œé›»ç•«æš¢ä½˜ç–‡ç™¤ç™‚ç˜§ç™˜ç˜é¬ç˜¡ç˜‹çš°å±™ç™°ç—™ç™¢ç˜‚ç™†ç˜“ç™‡ç™¡ç™‰ç˜®ç˜žç˜ºç™Ÿç™±ç™®ç™­ç™©ç™¬ç™²è‡’çššçšºçš¸ç›žé¹½ç›£è“‹ç›œç›¤çž˜çœ¥çŸ“è‘—çœçžçž¼çžžçŸšçŸ¯ç£¯ç¤¬ç¤¦ç¢­ç¢¼ç£šç¡¨ç¡¯ç¢¸ç¤ªç¤±ç¤«ç¤Žç¡œçŸ½ç¢©ç¡¤ç£½ç£‘ç¤„ç¢ºé¹¼ç¤™ç£§ç££å ¿é•Ÿæ»¾ç¦®ç¦•ç¦°ç¦Žç¦±ç¦ç¨Ÿç¥¿ç¦ªé›¢ç¦¿ç¨ˆç¨®ç©ç¨±ç©¢ç© ç©­ç¨…ç©Œç©©ç©¡çª®ç«Šç«…çª¯ç«„çª©çªºç«‡çª¶è±Žç«¶ç¯¤ç­ç­†ç­§ç®‹ç± ç±©ç¯‰ç¯³ç¯©ç°¹ç®ç±Œç°½ç°¡ç±™ç°€ç¯‹ç±œç±®ç°žç°«ç°£ç°ç±ƒç±¬ç±ªç±Ÿç³´é¡žç§ˆç³¶ç³²ç²µç³žç³§ç³é¤±ç·Šç¸¶ç³¸ç³¾ç´†ç´…ç´‚çº–ç´‡ç´„ç´šç´ˆçºŠç´€ç´‰ç·¯ç´œç´˜ç´”ç´•ç´—ç¶±ç´ç´ç¸±ç¶¸ç´›ç´™ç´‹ç´¡ç´µç´–ç´ç´“ç·šç´ºçµç´±ç·´çµ„ç´³ç´°ç¹”çµ‚ç¸çµ†ç´¼çµ€ç´¹ç¹¹ç¶“ç´¿ç¶çµ¨çµçµç¹žçµ°çµŽç¹ªçµ¦çµ¢çµ³çµ¡çµ•çµžçµ±ç¶†ç¶ƒçµ¹ç¹¡ç¶Œç¶çµ›ç¹¼ç¶ˆç¸¾ç·’ç¶¾ç·“çºŒç¶ºç·‹ç¶½ç·”ç·„ç¹©ç¶­ç¶¿ç¶¬ç¹ƒç¶¢ç¶¯ç¶¹ç¶£ç¶œç¶»ç¶°ç¶ ç¶´ç·‡ç·™ç·—ç·˜ç·¬çºœç·¹ç·²ç·ç¸•ç¹¢ç·¦ç¶žç·žç·¶ç·šç·±ç¸‹ç·©ç· ç¸·ç·¨ç·¡ç·£ç¸‰ç¸›ç¸Ÿç¸ç¸«ç¸—ç¸žçºç¸­ç¸Šç¸‘ç¹½ç¸¹ç¸µç¸²çº“ç¸®ç¹†ç¹…çºˆç¹šç¹•ç¹’éŸç¹¾ç¹°ç¹¯ç¹³çº˜ç½Œç¶²ç¾…ç½°ç½·ç¾†ç¾ˆç¾¥ç¾¨ç¿¹ç¿½ç¿¬è€®è€¬è³æ¥è¶è¾è·è¹è¯èµè°è‚…è…¸è†šè†è…Žè…«è„¹è„…è†½å‹æœ§è…–è‡šè„›è† è„ˆè†¾é«’è‡è…¦è†¿è‡ è…³è„«è…¡è‡‰è‡˜é†ƒè†•é½¶è†©é¦è†ƒé¨°è‡è‡¢è¼¿è‰¤è‰¦è‰™è‰«è‰±è±”è‰¸è—ç¯€ç¾‹è–Œè•ªè˜†è“¯è‘¦è—¶èŽ§è‡è’¼è‹§è˜‡æª¾è˜‹èŽ–è˜¢è”¦å¡‹ç…¢ç¹­èŠè–¦è–˜èŽ¢è•˜è“½è•Žè–ˆè–ºè•©æ¦®è‘·æ»ŽçŠ–ç†’è•è—Žè“€è”­è•’è‘’è‘¤è—¥è’žè“§èŠè“®è’”èµè–Ÿç²è••ç‘©é¶¯è“´è˜€è˜¿èž¢ç‡Ÿç¸ˆè•­è–©è”¥è•†è•¢è”£è”žè—è–Šè˜ºè•·éŽ£é©€è–”è˜žè—ºè—¹è˜„è˜Šè—ªæ§è˜šè™œæ…®è™›èŸ²è™¯èŸ£é›–è¦è †è•èŸ»èžžè ¶è ”èœ†è ±è £èŸ¶è »èŸ„è›ºèŸ¯èž„è è›»è¸è Ÿè …èŸˆèŸ¬è èž»è ‘èž¿èŸŽè ¨é‡éŠœè£œè¥¯è¢žè¥–å«‹è¤˜è¥ªè¥²è¥è£è¥ è¤Œè¤³è¥è¤²è¥‡è¤¸è¥¤ç¹ˆè¥´è¦‹è§€è¦Žè¦è¦“è¦–è¦˜è¦½è¦ºè¦¬è¦¡è¦¿è¦¥è¦¦è¦¯è¦²è¦·è§´è§¸è§¶è®‹è­½è¬„è¨è¨ˆè¨‚è¨ƒèªè­è¨è¨Œè¨Žè®“è¨•è¨–è¨“è­°è¨Šè¨˜è¨’è¬›è«±è¬³è©Žè¨è¨¥è¨±è¨›è«–è¨©è¨Ÿè«·è¨­è¨ªè¨£è­‰è©è¨¶è©•è©›è­˜è©—è©è¨´è¨ºè©†è¬…è©žè©˜è©”è©–è­¯è©’èª†èª„è©¦è©¿è©©è©°è©¼èª èª…è©µè©±èª•è©¬è©®è©­è©¢è©£è«è©²è©³è©«è«¢è©¡è­¸èª¡èª£èªžèªšèª¤èª¥èª˜èª¨èª‘èªªèª¦èª’è«‹è«¸è«è«¾è®€è«‘èª¹èª²è«‰è«›èª°è«—èª¿è«‚è«’è«„èª¶è«‡èª¼è¬€è«¶è«œè¬Šè««è«§è¬”è¬è¬‚è«¤è«­è«¼è®’è«®è«³è«ºè«¦è¬Žè«žè«è¬¨è®œè¬–è¬è¬ è¬—è«¡è¬™è¬è¬¹è¬¾è¬«è­¾è¬¬è­šè­–è­™è®•è­œè­Žè®žè­´è­«è®–ç©€è±¶è²è²žè² è²Ÿè²¢è²¡è²¬è³¢æ•—è³¬è²¨è³ªè²©è²ªè²§è²¶è³¼è²¯è²«è²³è³¤è³è²°è²¼è²´è²ºè²¸è²¿è²»è³€è²½è³Šè´„è³ˆè³„è²²è³ƒè³‚è´“è³‡è³…è´è³•è³‘è³šè³’è³¦è³­é½Žè´–è³žè³œè´”è³™è³¡è³ è³§è³´è³µè´…è³»è³ºè³½è³¾è´—è®šè´‡è´ˆè´è´è´›èµ¬è¶™è¶•è¶¨è¶²èº‰èºè¹Œè¹ èº’è¸èº‚è¹ºè¹•èºšèº‹è¸´èºŠè¹¤èº“èº‘èº¡è¹£èº•èº¥èºªèº¦è»€è»Šè»‹è»Œè»’è»‘è»”è½‰è»›è¼ªè»Ÿè½Ÿè»²è»»è½¤è»¸è»¹è»¼è»¤è»«è½¢è»ºè¼•è»¾è¼‰è¼Šè½Žè¼ˆè¼‡è¼…è¼ƒè¼’è¼”è¼›è¼¦è¼©è¼è¼¥è¼žè¼¬è¼Ÿè¼œè¼³è¼»è¼¯è½€è¼¸è½¡è½…è½„è¼¾è½†è½è½”è¾­è¾¯è¾®é‚Šé¼é”é·éŽé‚é‹é‚„é€™é€²é é•é€£é²é‚‡é€•è·¡é©é¸éœéžé‚é‚éºé™é„§é„ºé„”éƒµé„’é„´é„°é¬±éƒ¤éƒŸé„¶é„­é„†é…ˆé„–é„²é†žé†±é†¬é‡…é‡ƒé‡€é‡‹è£é’œé‘’é‘¾é¨é‡“é‡”é‡é‡˜é‡—é‡™é‡•é‡·é‡ºé‡§é‡¤éˆ’é‡©é‡£é†é‡¹éšé‡µéˆƒéˆ£éˆˆéˆ¦éˆéˆ”é¾éˆ‰é‹‡é‹¼éˆ‘éˆé‘°æ¬½éˆžéŽ¢é‰¤éˆ§éˆéˆ¥éˆ„éˆ•éˆ€éˆºéŒ¢é‰¦é‰—éˆ·ç¼½éˆ³é‰•éˆ½éˆ¸é‰žé‘½é‰¬é‰­é‰€éˆ¿éˆ¾éµé‰‘éˆ´é‘ é‰›é‰šéˆ°é‰‰é‰ˆé‰éˆ¹é¸é‰¶éŠ¬éŠ é‰ºéŠªé‹é‹£éƒéŠéºéŠ…é‹éŠ±éŠ¦éŽ§é˜éŠ–éŠ‘é‹ŒéŠ©éŠ›éµéŠ“é‰¿éŠšé‰»éŠ˜éŒšéŠ«é‰¸éŠ¥éŸéŠƒé‹éŠ¨éŠ€éŠ£é‘„é’é‹ªé‹™éŒ¸é‹±éˆé—éŠ·éŽ–é‹°é‹¥é‹¤é‹é‹¯é‹¨é½éŠ¼é‹é‹’é‹…é‹¶é¦é§éŠ³éŠ»é‹ƒé‹Ÿé‹¦éŒ’éŒ†éºéŒ¯éŒ¨éŒ¡éŒéŒ•éŒ©éŒ«éŒ®é‘¼éŒ˜éŒéŒ¦ééŒˆéŒ‡éŒŸéŒ éµé‹¸éŒ³éŒ™é¥éˆé‡é˜é¶é”é¤é¬é¾é›éŽªé é°éŽ„ééŽ‚é¤éŽ¡éŒéŽ®éŽ›éŽ˜é‘·é«éŽ³éŽ¿éŽ¦éŽ¬éŽŠéŽ°éŽ”é¢éœéé°éžé¡é‘éƒé‡éé”é’éé·é‘¥é“é‘­é é‘¹é¹é™é‘Šé³é¶é²é®é¿é‘”é‘£é‘žé‘²é•·é–€é–‚é–ƒé–†é–ˆé–‰å•é—–é–é—ˆé–‘é–Žé–“é–”é–Œæ‚¶é–˜é¬§é–¨èžé—¥é–©é–­é—“é–¥é–£é–¡é–«é¬®é–±é–¬é—é–¾é–¹é–¶é¬©é–¿é–½é–»é–¼é—¡é—Œé—ƒé— é—Šé—‹é—”é—é—’é—•é—žé—¤éšŠé™½é™°é™£éšŽéš›é™¸éš´é™³é™˜é™éš‰éš•éšªéš¨éš±éš¸é›‹é›£é››è®Žé‚éœ§éœ½é»´é„éšéœé¨éŸƒéž½éŸ‰éŸéŸ‹éŸŒéŸéŸ“éŸ™éŸžéŸœéŸ»é é ‚é ƒé ‡é …é †é ˆé Šé ‘é¡§é “é Žé ’é Œé é é¡±é ˜é —é ¸é ¡é °é ²é œæ½ç†²é ¦é ¤é »é ®é ¹é ·é ´ç©Žé¡†é¡Œé¡’é¡Žé¡“é¡é¡é¡³é¡¢é¡›é¡™é¡¥çº‡é¡«é¡¬é¡°é¡´é¢¨é¢ºé¢­é¢®é¢¯é¢¶é¢¸é¢¼é¢»é£€é£„é£†é£†é£›é¥—é¥œé££é¥‘é£¥é¤³é£©é¤¼é£ªé£«é£­é£¯é£²é¤žé£¾é£½é£¼é£¿é£´é¤Œé¥’é¤‰é¤„é¤Žé¤ƒé¤é¤…é¤‘é¤–é¤“é¤˜é¤’é¤•é¤œé¤›é¤¡é¤¨é¤·é¥‹é¤¶é¤¿é¥žé¥é¥ƒé¤ºé¤¾é¥ˆé¥‰é¥…é¥Šé¥Œé¥¢é¦¬é¦­é¦±é¦´é¦³é©…é¦¹é§é©¢é§”é§›é§Ÿé§™é§’é¨¶é§é§é§‘é§•é©›é§˜é©ç½µé§°é©•é©Šé§±é§­é§¢é©«é©ªé¨é©—é¨‚é§¸é§¿é¨é¨Žé¨é¨…é¨Œé©Œé©‚é¨™é¨­é¨¤é¨·é¨–é©é¨®é¨«é¨¸é©ƒé¨¾é©„é©é©Ÿé©¥é©¦é©¤é«é«–é«•é¬¢é­˜é­Žé­šé­›é­¢é­·é­¨é­¯é­´é­ºé®é®ƒé¯°é±¸é®‹é®“é®’é®Šé®‘é±Ÿé®é®é®­é®šé®³é®ªé®žé®¦é°‚é®œé± é±­é®«é®®é®ºé¯—é±˜é¯é±ºé°±é°¹é¯‰é°£é°·é¯€é¯Šé¯‡é®¶é¯½é¯’é¯–é¯ªé¯•é¯«é¯¡é¯¤é¯§é¯é¯¢é¯°é¯›é¯¨é¯µé¯´é¯”é±é°ˆé°é±¨é¯·é°®é°ƒé°“é±·é°é°’é°‰é°é±‚é¯¿é° é¼‡é°­é°¨é°¥é°©é°Ÿé°œé°³é°¾é±ˆé±‰é°»é°µé±…é°¼é±–é±”é±—é±’é±¯é±¤é±§é±£é³¥é³©é›žé³¶é³´é³²é·—é´‰é¶¬é´‡é´†é´£é¶‡é¸•é´¨é´žé´¦é´’é´Ÿé´é´›é´¬é´•é·¥é·™é´¯é´°éµ‚é´´éµƒé´¿é¸žé´»éµéµ“é¸éµ‘éµ éµéµ’é·³éµœéµ¡éµ²é¶“éµªé¶¤éµ¯éµ¬éµ®é¶‰é¶Šéµ·é·«é¶˜é¶¡é¶šé¶»é¶¿é¶¥é¶©é·Šé·‚é¶²é¶¹é¶ºé·é¶¼é¶´é·–é¸šé·“é·šé·¯é·¦é·²é·¸é·ºé¸‡é·¹é¸Œé¸é¸›é¸˜é¹ºéº¥éº©é»ƒé»Œé»¶é»·é»²é»½é»¿é¼‚é¼‰éž€é¼´é½‡é½Šé½é½’é½”é½•é½—é½Ÿé½¡é½™é½ é½œé½¦é½¬é½ªé½²é½·é¾é¾”é¾•é¾œèªŒè£½è°˜éš»è£¡ä¿‚ç¯„é¬†å†‡åšå˜—é¬¨éºµæº–é˜å½†é–’ä¹¾å„˜è‡Ÿæ‹š');

    /**
     * è½¬æ¢æ–‡æœ¬
     * @param {String} str - å¾…è½¬æ¢çš„æ–‡æœ¬
     * @param {Boolean} toT - æ˜¯å¦è½¬æ¢æˆç¹ä½“
     * @returns {String} - è½¬æ¢ç»“æžœ
     */
    function tranStr(str, toT) {
        var i;
        var letter;
        var code;
        var isChinese;
        var index;
        var src, des;
        var result = '';

        if (toT) {
            src = S;
            des = T;
        } else {
            src = T;
            des = S;
        }

        if (typeof str !== "string") {
            return str;
        }

        for (i = 0; i < str.length; i++) {
            letter = str.charAt(i);
            code = str.charCodeAt(i); 
            
            // æ ¹æ®å­—ç¬¦çš„Unicodeåˆ¤æ–­æ˜¯å¦ä¸ºæ±‰å­—ï¼Œä»¥æé«˜æ€§èƒ½
            // å‚è€ƒ:
            // [1] http://www.unicode.org
            // [2] http://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%88%97%E8%A1%A8
            // [3] http://xylonwang.iteye.com/blog/519552
            isChinese = (code > 0x3400 && code < 0x9FC3) || (code > 0xF900 && code < 0xFA6A);

            if (!isChinese) {
                result += letter;
                continue;
            }

            index = src.indexOf(letter);

            if (index !== -1) {
                result += des.charAt(index);
            } else {
                result += letter;
            }
        }

        return result;
    }

    /**
     * è½¬æ¢HTML Elementå±žæ€§
     * @param {Element} element - å¾…è½¬æ¢çš„HTML ElementèŠ‚ç‚¹
     * @param {String|Array} attr - å¾…è½¬æ¢çš„å±žæ€§/å±žæ€§åˆ—è¡¨
     * @param {Boolean} toT - æ˜¯å¦è½¬æ¢æˆç¹ä½“
     */
    function tranAttr(element, attr, toT) {
        var i, attrValue;

        if (attr instanceof Array) {
            for(i = 0; i < attr.length; i++) {
                tranAttr(element, attr[i], toT);
            }
        } else {
            attrValue = element.getAttribute(attr);

            if (attrValue !== "" && attrValue !== null) {
                element.setAttribute(attr, tranStr(attrValue, toT));
            }
        }
    }

    /**
     * è½¬æ¢HTML ElementèŠ‚ç‚¹
     * @param {Element} element - å¾…è½¬æ¢çš„HTML ElementèŠ‚ç‚¹
     * @param {Boolean} toT - æ˜¯å¦è½¬æ¢æˆç¹ä½“
     */
    function tranElement(element, toT) {
        var i;
        var childNodes;

        if (element.nodeType !== 1) {
            return;
        }

        childNodes = element.childNodes;

        for (i = 0; i < childNodes.length; i++) {
            var childNode = childNodes.item(i);

            // è‹¥ä¸ºHTML ElementèŠ‚ç‚¹
            if (childNode.nodeType === 1) {
                // å¯¹ä»¥ä¸‹æ ‡ç­¾ä¸åšå¤„ç†
                if ("|BR|HR|TEXTAREA|SCRIPT|OBJECT|EMBED|".indexOf("|" + childNode.tagName + "|") !== -1) {
                    continue;
                }
                
                tranAttr(childNode, ['title', 'data-original-title', 'alt', 'placeholder'], toT);

                // input æ ‡ç­¾
                // å¯¹textç±»åž‹çš„inputè¾“å…¥æ¡†ä¸åšå¤„ç†
                if (childNode.tagName === "INPUT"
                    && childNode.value !== ""
                    && childNode.type !== "text"
                    && childNode.type !== "hidden")
                {
                    childNode.value = tranStr(childNode.value, toT);
                }

                // ç»§ç»­é€’å½’è°ƒç”¨
                tranElement(childNode, toT);
            } else if (childNode.nodeType === 3) {  // è‹¥ä¸ºæ–‡æœ¬èŠ‚ç‚¹
                childNode.data = tranStr(childNode.data, toT);
            }
        }
    }

    // æ‰©å±•jQueryå…¨å±€æ–¹æ³•
    $.extend({
        /**
         * æ–‡æœ¬ç®€è½¬ç¹
         * @param {String} str - å¾…è½¬æ¢çš„æ–‡æœ¬
         * @returns {String} è½¬æ¢ç»“æžœ
         */
        s2t: function(str) {
            return tranStr(str, true);
        },

        /**
         * æ–‡æœ¬ç¹è½¬ç®€
         * @param {String} str - å¾…è½¬æ¢çš„æ–‡æœ¬
         * @returns {String} è½¬æ¢ç»“æžœ
         */
        t2s: function(str) {
            return tranStr(str, false);
        }
    });

    // æ‰©å±•jQueryå¯¹è±¡æ–¹æ³•
    $.fn.extend({
        /**
         * jQuery Objectsç®€è½¬ç¹
         * @this {jQuery Objects} å¾…è½¬æ¢çš„jQuery Objects
         */
        s2t: function() {
            return this.each(function() {
                tranElement(this, true);
            });
        },

        /**
         * jQuery Objectsç¹è½¬ç®€
         * @this {jQuery Objects} å¾…è½¬æ¢çš„jQuery Objects
         */
        t2s: function() {
            return this.each(function() {
                tranElement(this, false);
            });
        }
    });
}) (jQuery);

/*
 *  webui popover plugin  - v1.2.17
 *  A lightWeight popover plugin with jquery ,enchance the  popover plugin of bootstrap with some awesome new features. It works well with bootstrap ,but bootstrap is not necessary!
 *  https://github.com/sandywalker/webui-popover
 *
 *  Made by Sandy Duan
 *  Under MIT License
 */
!function(a,b,c){"use strict";!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(function(d){function e(a,b){return this.$element=d(a),b&&("string"===d.type(b.delay)||"number"===d.type(b.delay))&&(b.delay={show:b.delay,hide:b.delay}),this.options=d.extend({},i,b),this._defaults=i,this._name=f,this._targetclick=!1,this.init(),k.push(this.$element),this}var f="webuiPopover",g="webui-popover",h="webui.popover",i={placement:"auto",container:null,width:"auto",height:"auto",trigger:"click",style:"",selector:!1,delay:{show:null,hide:300},async:{type:"GET",before:null,success:null,error:null},cache:!0,multi:!1,arrow:!0,title:"",content:"",closeable:!1,padding:!0,url:"",type:"html",direction:"",animation:null,template:'<div class="webui-popover"><div class="webui-arrow"></div><div class="webui-popover-inner"><a href="#" class="close"></a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',backdrop:!1,dismissible:!0,onShow:null,onHide:null,abortXHR:!0,autoHide:!1,offsetTop:0,offsetLeft:0,iframeOptions:{frameborder:"0",allowtransparency:"true",id:"",name:"",scrolling:"",onload:"",height:"",width:""},hideEmpty:!1},j=g+"-rtl",k=[],l=d('<div class="webui-popover-backdrop"></div>'),m=0,n=!1,o=-2e3,p=d(b),q=function(a,b){return isNaN(a)?b||0:Number(a)},r=function(a){return a.data("plugin_"+f)},s=function(){for(var a=null,b=0;b<k.length;b++)a=r(k[b]),a&&a.hide(!0);p.trigger("hiddenAll."+h)},t=function(a){for(var b=null,c=0;c<k.length;c++)b=r(k[c]),b&&b.id!==a.id&&b.hide(!0);p.trigger("hiddenAll."+h)},u="ontouchstart"in b.documentElement&&/Mobi/.test(navigator.userAgent),v=function(a){var b={x:0,y:0};if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type){var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];b.x=c.pageX,b.y=c.pageY}else("mousedown"===a.type||"mouseup"===a.type||"click"===a.type)&&(b.x=a.pageX,b.y=a.pageY);return b};e.prototype={init:function(){if(this.$element[0]instanceof b.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");"manual"!==this.getTrigger()&&(u?this.$element.off("touchend",this.options.selector).on("touchend",this.options.selector,d.proxy(this.toggle,this)):"click"===this.getTrigger()?this.$element.off("click",this.options.selector).on("click",this.options.selector,d.proxy(this.toggle,this)):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave click",this.options.selector).on("mouseenter",this.options.selector,d.proxy(this.mouseenterHandler,this)).on("mouseleave",this.options.selector,d.proxy(this.mouseleaveHandler,this))),this._poped=!1,this._inited=!0,this._opened=!1,this._idSeed=m,this.id=f+this._idSeed,this.options.container=d(this.options.container||b.body).first(),this.options.backdrop&&l.appendTo(this.options.container).hide(),m++,"sticky"===this.getTrigger()&&this.show(),this.options.selector&&(this._options=d.extend({},this.options,{selector:""}))},destroy:function(){for(var a=-1,b=0;b<k.length;b++)if(k[b]===this.$element){a=b;break}k.splice(a,1),this.hide(),this.$element.data("plugin_"+f,null),"click"===this.getTrigger()?this.$element.off("click"):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave"),this.$target&&this.$target.remove()},getDelegateOptions:function(){var a={};return this._options&&d.each(this._options,function(b,c){i[b]!==c&&(a[b]=c)}),a},hide:function(a,b){if((a||"sticky"!==this.getTrigger())&&this._opened){b&&(b.preventDefault(),b.stopPropagation()),this.xhr&&this.options.abortXHR===!0&&(this.xhr.abort(),this.xhr=null);var c=d.Event("hide."+h);if(this.$element.trigger(c,[this.$target]),this.$target){this.$target.removeClass("in").addClass(this.getHideAnimation());var e=this;setTimeout(function(){e.$target.hide(),e.getCache()||e.$target.remove()},e.getHideDelay())}this.options.backdrop&&l.hide(),this._opened=!1,this.$element.trigger("hidden."+h,[this.$target]),this.options.onHide&&this.options.onHide(this.$target)}},resetAutoHide:function(){var a=this,b=a.getAutoHide();b&&(a.autoHideHandler&&clearTimeout(a.autoHideHandler),a.autoHideHandler=setTimeout(function(){a.hide()},b))},delegate:function(a){var b=d(a).data("plugin_"+f);return b||(b=new e(a,this.getDelegateOptions()),d(a).data("plugin_"+f,b)),b},toggle:function(a){var b=this;a&&(a.preventDefault(),a.stopPropagation(),this.options.selector&&(b=this.delegate(a.currentTarget))),b[b.getTarget().hasClass("in")?"hide":"show"]()},hideAll:function(){s()},hideOthers:function(){t(this)},show:function(){if(!this._opened){var a=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass);if(this.options.multi||this.hideOthers(),!this.getCache()||!this._poped||""===this.content){if(this.content="",this.setTitle(this.getTitle()),this.options.closeable||a.find(".close").off("click").remove(),this.isAsync()?this.setContentASync(this.options.content):this.setContent(this.getContent()),this.canEmptyHide()&&""===this.content)return;a.show()}this.displayContent(),this.options.onShow&&this.options.onShow(a),this.bindBodyEvents(),this.options.backdrop&&l.show(),this._opened=!0,this.resetAutoHide()}},displayContent:function(){var a=this.getElementPosition(),b=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass),c=this.getContentElement(),e=b[0].offsetWidth,f=b[0].offsetHeight,i="bottom",k=d.Event("show."+h);if(this.canEmptyHide()){var l=c.children().html();if(null!==l&&0===l.trim().length)return}this.$element.trigger(k,[b]);var m=this.$element.data("width")||this.options.width;""===m&&(m=this._defaults.width),"auto"!==m&&b.width(m);var n=this.$element.data("height")||this.options.height;""===n&&(n=this._defaults.height),"auto"!==n&&c.height(n),this.options.style&&this.$target.addClass(g+"-"+this.options.style),"rtl"!==this.options.direction||c.hasClass(j)||c.addClass(j),this.options.arrow||b.find(".webui-arrow").remove(),b.detach().css({top:o,left:o,display:"block"}),this.getAnimation()&&b.addClass(this.getAnimation()),b.appendTo(this.options.container),i=this.getPlacement(a),this.$element.trigger("added."+h),this.initTargetEvents(),this.options.padding||("auto"!==this.options.height&&c.css("height",c.outerHeight()),this.$target.addClass("webui-no-padding")),this.options.maxHeight&&c.css("maxHeight",this.options.maxHeight),this.options.maxWidth&&c.css("maxWidth",this.options.maxWidth),e=b[0].offsetWidth,f=b[0].offsetHeight;var p=this.getTargetPositin(a,i,e,f);if(this.$target.css(p.position).addClass(i).addClass("in"),"iframe"===this.options.type){var q=b.find("iframe"),r=b.width(),s=q.parent().height();""!==this.options.iframeOptions.width&&"auto"!==this.options.iframeOptions.width&&(r=this.options.iframeOptions.width),""!==this.options.iframeOptions.height&&"auto"!==this.options.iframeOptions.height&&(s=this.options.iframeOptions.height),q.width(r).height(s)}if(this.options.arrow||this.$target.css({margin:0}),this.options.arrow){var t=this.$target.find(".webui-arrow");t.removeAttr("style"),"left"===i||"right"===i?t.css({top:this.$target.height()/2}):("top"===i||"bottom"===i)&&t.css({left:this.$target.width()/2}),p.arrowOffset&&(-1===p.arrowOffset.left||-1===p.arrowOffset.top?t.hide():t.css(p.arrowOffset))}this._poped=!0,this.$element.trigger("shown."+h,[this.$target])},isTargetLoaded:function(){return 0===this.getTarget().find("i.glyphicon-refresh").length},getTriggerElement:function(){return this.$element},getTarget:function(){if(!this.$target){var a=f+this._idSeed;this.$target=d(this.options.template).attr("id",a),this._customTargetClass=this.$target.attr("class")!==g?this.$target.attr("class"):null,this.getTriggerElement().attr("data-target",a)}return this.$target.data("trigger-element")||this.$target.data("trigger-element",this.getTriggerElement()),this.$target},removeTarget:function(){this.$target.remove(),this.$target=null,this.$contentElement=null},getTitleElement:function(){return this.getTarget().find("."+g+"-title")},getContentElement:function(){return this.$contentElement||(this.$contentElement=this.getTarget().find("."+g+"-content")),this.$contentElement},getTitle:function(){return this.$element.attr("data-title")||this.options.title||this.$element.attr("title")},getUrl:function(){return this.$element.attr("data-url")||this.options.url},getAutoHide:function(){return this.$element.attr("data-auto-hide")||this.options.autoHide},getOffsetTop:function(){return q(this.$element.attr("data-offset-top"))||this.options.offsetTop},getOffsetLeft:function(){return q(this.$element.attr("data-offset-left"))||this.options.offsetLeft},getCache:function(){var a=this.$element.attr("data-cache");if("undefined"!=typeof a)switch(a.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":return!1}return this.options.cache},getTrigger:function(){return this.$element.attr("data-trigger")||this.options.trigger},getDelayShow:function(){var a=this.$element.attr("data-delay-show");return"undefined"!=typeof a?a:0===this.options.delay.show?0:this.options.delay.show||100},getHideDelay:function(){var a=this.$element.attr("data-delay-hide");return"undefined"!=typeof a?a:0===this.options.delay.hide?0:this.options.delay.hide||100},getAnimation:function(){var a=this.$element.attr("data-animation");return a||this.options.animation},getHideAnimation:function(){var a=this.getAnimation();return a?a+"-out":"out"},setTitle:function(a){var b=this.getTitleElement();a?("rtl"!==this.options.direction||b.hasClass(j)||b.addClass(j),b.html(a)):b.remove()},hasContent:function(){return this.getContent()},canEmptyHide:function(){return this.options.hideEmpty&&"html"===this.options.type},getIframe:function(){var a=d("<iframe></iframe>").attr("src",this.getUrl()),b=this;return d.each(this._defaults.iframeOptions,function(c){"undefined"!=typeof b.options.iframeOptions[c]&&a.attr(c,b.options.iframeOptions[c])}),a},getContent:function(){if(this.getUrl())switch(this.options.type){case"iframe":this.content=this.getIframe();break;case"html":try{this.content=d(this.getUrl()),this.content.is(":visible")||this.content.show()}catch(a){throw new Error("Unable to get popover content. Invalid selector specified.")}}else if(!this.content){var b="";if(b=d.isFunction(this.options.content)?this.options.content.apply(this.$element[0],[this]):this.options.content,this.content=this.$element.attr("data-content")||b,!this.content){var c=this.$element.next();c&&c.hasClass(g+"-content")&&(this.content=c)}}return this.content},setContent:function(a){var b=this.getTarget(),c=this.getContentElement();"string"==typeof a?c.html(a):a instanceof d&&(c.html(""),this.options.cache?a.removeClass(g+"-content").appendTo(c):a.clone(!0,!0).removeClass(g+"-content").appendTo(c)),this.$target=b},isAsync:function(){return"async"===this.options.type},setContentASync:function(a){var b=this;this.xhr||(this.xhr=d.ajax({url:this.getUrl(),type:this.options.async.type,cache:this.getCache(),beforeSend:function(a,c){b.options.async.before&&b.options.async.before(b,a,c)},success:function(c){b.bindBodyEvents(),a&&d.isFunction(a)?b.content=a.apply(b.$element[0],[c]):b.content=c,b.setContent(b.content);var e=b.getContentElement();e.removeAttr("style"),b.displayContent(),b.options.async.success&&b.options.async.success(b,c)},complete:function(){b.xhr=null},error:function(a,c){b.options.async.error&&b.options.async.error(b,a,c)}}))},bindBodyEvents:function(){n||(this.options.dismissible&&"click"===this.getTrigger()?u?p.off("touchstart.webui-popover").on("touchstart.webui-popover",d.proxy(this.bodyTouchStartHandler,this)):(p.off("keyup.webui-popover").on("keyup.webui-popover",d.proxy(this.escapeHandler,this)),p.off("click.webui-popover").on("click.webui-popover",d.proxy(this.bodyClickHandler,this))):"hover"===this.getTrigger()&&p.off("touchend.webui-popover").on("touchend.webui-popover",d.proxy(this.bodyClickHandler,this)))},mouseenterHandler:function(a){var b=this;a&&this.options.selector&&(b=this.delegate(a.currentTarget)),b._timeout&&clearTimeout(b._timeout),b._enterTimeout=setTimeout(function(){b.getTarget().is(":visible")||b.show()},this.getDelayShow())},mouseleaveHandler:function(){var a=this;clearTimeout(a._enterTimeout),a._timeout=setTimeout(function(){a.hide()},this.getHideDelay())},escapeHandler:function(a){27===a.keyCode&&this.hideAll()},bodyTouchStartHandler:function(a){var b=this,c=d(a.currentTarget);c.on("touchend",function(a){b.bodyClickHandler(a),c.off("touchend")}),c.on("touchmove",function(){c.off("touchend")})},bodyClickHandler:function(a){n=!0;for(var b=!0,c=0;c<k.length;c++){var d=r(k[c]);if(d&&d._opened){var e=d.getTarget().offset(),f=e.left,g=e.top,h=e.left+d.getTarget().width(),i=e.top+d.getTarget().height(),j=v(a),l=j.x>=f&&j.x<=h&&j.y>=g&&j.y<=i;if(l){b=!1;break}}}b&&s()},initTargetEvents:function(){"hover"===this.getTrigger()&&this.$target.off("mouseenter mouseleave").on("mouseenter",d.proxy(this.mouseenterHandler,this)).on("mouseleave",d.proxy(this.mouseleaveHandler,this)),this.$target.find(".close").off("click").on("click",d.proxy(this.hide,this,!0))},getPlacement:function(a){var b,c=this.options.container,d=c.innerWidth(),e=c.innerHeight(),f=c.scrollTop(),g=c.scrollLeft(),h=Math.max(0,a.left-g),i=Math.max(0,a.top-f);b="function"==typeof this.options.placement?this.options.placement.call(this,this.getTarget()[0],this.$element[0]):this.$element.data("placement")||this.options.placement;var j="horizontal"===b,k="vertical"===b,l="auto"===b||j||k;return l?b=d/3>h?e/3>i?j?"right-bottom":"bottom-right":2*e/3>i?k?e/2>=i?"bottom-right":"top-right":"right":j?"right-top":"top-right":2*d/3>h?e/3>i?j?d/2>=h?"right-bottom":"left-bottom":"bottom":2*e/3>i?j?d/2>=h?"right":"left":e/2>=i?"bottom":"top":j?d/2>=h?"right-top":"left-top":"top":e/3>i?j?"left-bottom":"bottom-left":2*e/3>i?k?e/2>=i?"bottom-left":"top-left":"left":j?"left-top":"top-left":"auto-top"===b?b=d/3>h?"top-right":2*d/3>h?"top":"top-left":"auto-bottom"===b?b=d/3>h?"bottom-right":2*d/3>h?"bottom":"bottom-left":"auto-left"===b?b=e/3>i?"left-top":2*e/3>i?"left":"left-bottom":"auto-right"===b&&(b=e/3>i?"right-bottom":2*e/3>i?"right":"right-top"),b},getElementPosition:function(){var a=this.$element[0].getBoundingClientRect(),c=this.options.container,e=c.css("position");if(c.is(b.body)||"static"===e)return d.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height});if("fixed"===e){var f=c[0].getBoundingClientRect();return{top:a.top-f.top+c.scrollTop(),left:a.left-f.left+c.scrollLeft(),width:a.width,height:a.height}}return"relative"===e?{top:this.$element.offset().top-c.offset().top,left:this.$element.offset().left-c.offset().left,width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height}:void 0},getTargetPositin:function(a,c,d,e){var f=a,g=this.options.container,h=this.$element.outerWidth(),i=this.$element.outerHeight(),j=b.documentElement.scrollTop+g.scrollTop(),k=b.documentElement.scrollLeft+g.scrollLeft(),l={},m=null,n=this.options.arrow?20:0,p=10,q=n+p>h?n:0,r=n+p>i?n:0,s=0,t=b.documentElement.clientHeight+j,u=b.documentElement.clientWidth+k,v=f.left+f.width/2-q>0,w=f.left+f.width/2+q<u,x=f.top+f.height/2-r>0,y=f.top+f.height/2+r<t;switch(c){case"bottom":l={top:f.top+f.height,left:f.left+f.width/2-d/2};break;case"top":l={top:f.top-e,left:f.left+f.width/2-d/2};break;case"left":l={top:f.top+f.height/2-e/2,left:f.left-d};break;case"right":l={top:f.top+f.height/2-e/2,left:f.left+f.width};break;case"top-right":l={top:f.top-e,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"top-left":s=w?q:-p,l={top:f.top-e,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"bottom-right":l={top:f.top+f.height,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"bottom-left":s=w?q:-p,l={top:f.top+f.height,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"right-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left+f.width},m={top:y?e-Math.min(i,e)/2-r:o};break;case"right-bottom":l={top:x?f.top-r:p,left:f.left+f.width},m={top:x?Math.min(i,e)/2+r:o};break;case"left-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left-d},m={top:y?e-Math.min(i,e)/2-r:o};break;case"left-bottom":l={top:x?f.top-r:p,left:f.left-d},m={top:x?Math.min(i,e)/2+r:o}}return l.top+=this.getOffsetTop(),l.left+=this.getOffsetLeft(),{position:l,arrowOffset:m}}},d.fn[f]=function(a,b){var c=[],g=this.each(function(){var g=d.data(this,"plugin_"+f);g?"destroy"===a?g.destroy():"string"==typeof a&&c.push(g[a]()):(a?"string"==typeof a?"destroy"!==a&&(b||(g=new e(this,null),c.push(g[a]()))):"object"==typeof a&&(g=new e(this,a)):g=new e(this,null),d.data(this,"plugin_"+f,g))});return c.length?c:g};var w=function(){var a=function(){s()},b=function(a,b){b=b||{},d(a).webuiPopover(b)},e=function(a){var b=!0;return d(a).each(function(a,e){b=b&&d(e).data("plugin_"+f)!==c}),b},g=function(a,b){b?d(a).webuiPopover(b).webuiPopover("show"):d(a).webuiPopover("show")},h=function(a){d(a).webuiPopover("hide")},j=function(a){i=d.extend({},i,a)},k=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache();c.options.cache=!1,c.options.content=b,c._opened?(c._opened=!1,c.show()):c.isAsync()?c.setContentASync(b):c.setContent(b),c.options.cache=e}},l=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache(),g=c.options.type;c.options.cache=!1,c.options.url=b,c._opened?(c._opened=!1,c.show()):(c.options.type="async",c.setContentASync(c.content)),c.options.cache=e,c.options.type=g}};return{show:g,hide:h,create:b,isCreated:e,hideAll:a,updateContent:k,updateContentAsync:l,setDefaultOptions:j}}();a.WebuiPopovers=w})}(window,document);
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/webui-popover",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginWebuiPopover=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="webuiPopover",WebuiPopover=function(_Plugin){function WebuiPopover(){return babelHelpers.classCallCheck(this,WebuiPopover),babelHelpers.possibleConstructorReturn(this,(WebuiPopover.__proto__||Object.getPrototypeOf(WebuiPopover)).apply(this,arguments))}return babelHelpers.inherits(WebuiPopover,_Plugin),babelHelpers.createClass(WebuiPopover,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}}}]),WebuiPopover}(_Plugin3.default);_Plugin3.default.register(NAME,WebuiPopover),exports.default=WebuiPopover});
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */
(function($, window, document, undefined) {
    var $window = $(window),
        canvasPosition=function(from_dom,to_dom){ // canvasè®¾ç½®
            var top=from_dom.position().top,
                left=from_dom.position().left,
                width=from_dom.width(),
                height=from_dom.height();
            to_dom.css({top:top,left:left}).width(width).height(height);
        },
        canvasControl=function(dom,canvas_id){
            $.stackBlurImage(dom, canvas_id, 10, false);
            if(dom.is(':visible')) canvasPosition(dom,$('#'+canvas_id));
            $(window).resize(function() {
                if(dom.is(":visible")) canvasPosition(dom,$('#'+canvas_id));
            });
            $('#'+canvas_id).attr({'data-load':true});
        },
        thumbdir=M['weburl']+'include/thumb.php?dir=',
        placeholder_base64='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC';
    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 30,
            failure_limit   : 1000,
            event           : "scroll",
            effect          : "fadeIn",
            effect_speed    : null,
            container       : window,
            data_attribute  : "original",
            data_srcset     : 'srcset',
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : met_lazyloadbg,// 'base64',met_lazyloadbg,'blur'
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this),
                    $this_canvas=$this.next('canvas');
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if($this_canvas.length && !$this_canvas.attr('data-load') && $.stackBlurImage) canvasControl($this,$this_canvas.attr('id'));
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.on(settings.event, function() {
                return update();
            });
        }
        if(settings.placeholder=='base64') settings.placeholder=placeholder_base64;
        this.attr({'data-lazyload':true});
        this.each(function(index) {
            var self = this,
                $self = $(self),
                original = $self.attr("data-" + settings.data_attribute),
                placeholder=settings.placeholder,
                placeholder_ok=placeholder!=placeholder_base64?true:false;
            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.is("img") && original && (!$self.attr("src") || $self.attr("src")!=original)) {
                if(placeholder=='blur' && $.stackBlurImage){
                    // å›¾ç‰‡é«˜æ–¯æ¨¡ç³ŠåŠ è½½å°å›¾
                    if(!$self.attr('data-minimg')){
                        // è®¾ç½®å°å›¾è·¯å¾„
                        var thumb=original.replace(M['weburl'],M['weburl']),
                            original_array=thumb.split('&');
                        if(thumb.indexOf('http')<0 || (thumb.indexOf('http')>=0 && thumb.indexOf(M['weburl'])>=0)){
                            if(original.indexOf('include/thumb.php?dir=')>-1){
                                var data_minimg=original_array[0]+'&x=50';
                            }else{
                                var data_minimg=thumbdir+thumb+'&x=50';
                            }
                            if(original_array && original_array.length==3){
                                scale_x=original_array[1].substring(2);
                                scale_y=original_array[2].substring(2);
                                scale=scale_y/scale_x;
                                minimg_h=Math.round(50*scale);
                                data_minimg+='&y='+minimg_h;
                            }
                            $(this).attr({src:data_minimg,'data-minimg':true});
                            // é«˜æ–¯æ¨¡ç³Šå°å›¾
                            var img=new Image();
                            img.src=$self.attr("src");
                            img.onload=function(){
                                setTimeout(function(){
                                    var $self_canvas=$self.next('canvas');
                                    if($self.attr('src')!=original && !$self_canvas.length){
                                        var canvas_id="imgcanvas"+index;
                                        $self.wrapAll('<section style="position: relative;"></section>').after('<canvas id="'+canvas_id+'" data-load="false" width="'+$self.width()+'" height="'+$self.height()+'" style="position:absolute;z-index:10;"></canvas>');
                                        if(!settings.skip_invisible || $self.is(":visible")) canvasControl($self,canvas_id);
                                    }else if($self_canvas.length){
                                        canvasPosition($self,$self_canvas);
                                    }
                                },30)
                            }
                        }
                    }
                }else{
                    if(placeholder=='blur') placeholder=met_lazyloadbg;
                    $self.attr("src", placeholder);
                    if(placeholder_ok && !$self.hasClass('imgloading')) $self.addClass('imgloading');
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    var srcset = $self.attr("data-" + settings.data_srcset);
                    $("<img />")
                        .one("load", function() {
                        $self.hide();
                        if ($self.is("img")/* || $self.is("source") || $self.is("video") || $self.is("audio") || $self.is("iframe") || $self.is("script") || $self.is("link")*/) {
                            if(srcset) $self.attr("srcset", srcset);
                            $self.attr("src", original);
                        } else {
                            $self.css("background-image", "url('" + original + "')");
                            if(srcset) $self.css("background-image", "-webkit-image-set(" + srcset + ")");
                        }
                        $self[settings.effect](settings.effect_speed);
                        $self.one('load', function() {
                            $self.removeClass('imgloading');
                            $self.next('canvas').fadeOut("normal",function(){
                                $self.next('canvas').remove();
                            });
                        });

                        self.loaded = true;

                        /* Remove image from array so it is not looped next time. */
                        var temp = $.grep(elements, function(element) {
                            return !element.loaded;
                        });
                        elements = $(temp);

                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings);
                        }
                    }).attr({srcset:srcset,src:original}).removeClass('imgloading').next('canvas').fadeOut("normal",function(){
                        $("<img />").next('canvas').remove();
                    });
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.on(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.on("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.on("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !0,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                placeHolder: met_lazyloadbg,
                lazyloadPrevNext:!1,
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    ds = a(this).attr("data-srcset"),
                    e = document.createElement("img");
                c.animate({
                    opacity: 0
                }, 100, function() {
                    c.attr({
                        src: d,
                        srcset: ds
                    }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").animate({
                        opacity: 1
                    }, 200), b.$slider.trigger("lazyLoaded", [b, c, d])
                });
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
        if(b.options.lazyloadPrevNext && b.$slideTrack.find('.slick-slide').length>2){
            var slide_index=b.$slideTrack.find('.slick-active').index(),
                slide_prevnext_order=[slide_index-1,slide_index+1];
            for (var i = 0; i < 2; i++) {
                b.$slideTrack.find('.slick-slide:eq('+slide_prevnext_order[i]+') img').each(function(){
                    if($(this).attr('data-lazy')) $(this).attr({src:$(this).data('lazy')}).removeAttr('data-lazy').removeClass('slick-loading');
                    if($(this).attr('data-srcset')) $(this).attr({srcset:$(this).data('srcset')}).removeAttr('data-srcset');
                })
            }
        }
    }, b.prototype.loadSlider = function() {
        var a = this;
        if (a.options.placeHolder){
            a.$slideTrack.find('img[data-lazy]').each(function(index, el) {
                $(this).attr({src:a.options.placeHolder});
            });
        };
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, fs, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), fs = e.attr("data-srcset"), g = document.createElement("img"), g.onload = function() {
            e.attr({
                src: f,
                srcset: fs
            }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned").find('img').height('').removeAttr('height');
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned").find('img').height('').removeAttr('height');
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
window.met_prevarrow='<button type="button" class="slick-prev"><i class="iconfont icon-prev"></i></button>',
    met_nextarrow='<button type="button" class="slick-next"><i class="iconfont icon-next"></i></button>';
 var mapRegister=function() {
        var script = document.createElement("script"),
            coordinate = $('#map').attr('coordinate') || '105,25',
            logo = $('#map').attr('logo'),
            title = $('#map').attr('title'),
            img=$('#map').attr('img'),
            desc = $('#map').attr('description');
        script.src = "//api.map.baidu.com/api?v=2.0&ak=aL2Gwp389Kxj3bFhSMq7cf9w&callback=map_func";
        document.body.appendChild(script);
        map_func = function() {
            var coo = coordinate && coordinate.split(',');
            var map = new BMap.Map("map");
            map.centerAndZoom(new BMap.Point(coo[0] * 1, coo[1] * 1), 19);
            var Icon = new BMap.Icon(img, new BMap.Size(20, 27));
            var marker = new BMap.Marker(new BMap.Point(coo[0] * 1, coo[1] * 1), {
                icon: Icon
            });
            var content =
                "<div class='mapTip' style='overflow:hidden;'>" +
                "<div style='float:left;'><img id='map-logo' src=" + logo + " style='width:60px;height:60px;'></div>" +
                "<div style='float:left;padding-top:10px;padding-left:15px;max-width:145px;'><h3 style='margin:0;font-size:15px;line-height:1.2;max-height: 20px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>" + title + "</h3>" +
                "<p style='margin:0;color:#7d7d7d;font-size:12px;padding-top:5px;max-height:20px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;'>" + desc + "</p></div></div>";
            var infoWindow = new BMap.InfoWindow(content);
            map.addOverlay(marker);
            if (device_type=='t') { 
                map.panBy(0, -100);
            } 
            if(device_type=='m') {
                map.panBy(0, -200);
            } 
            if(device_type=='d') {
                map.panBy(-300, 0);
            }
            marker.openInfoWindow(infoWindow);
            map.setMapStyle({
                style: 'grayscale'
            });
            marker.addEventListener("click", function() {
                this.openInfoWindow(infoWindow);
                //å›¾ç‰‡åŠ è½½å®Œæ¯•é‡ç»˜infowindow
                document.getElementById('map-logo').onload = function() {
                    infoWindow.redraw(); //é˜²æ­¢åœ¨ç½‘é€Ÿè¾ƒæ…¢ï¼Œå›¾ç‰‡æœªåŠ è½½æ—¶ï¼Œç”Ÿæˆçš„ä¿¡æ¯æ¡†é«˜åº¦æ¯”å›¾ç‰‡çš„æ€»é«˜åº¦å°ï¼Œå¯¼è‡´å›¾ç‰‡éƒ¨åˆ†è¢«éšè—
                }
            });
        }
    }
METUI_FUN['head_nav_met_11_6'] = {
    name: 'head_nav_met_11_6',
    init: function() {
        var head = $('.met-head');
        if (head.data('scroll') && M['classnow'] == 10001 && IEVersion()>9) {
            $('body').height('100%');
            $('.banner_met_11_6').height('100%');
            var hash = $('[data-hash]');
            hash.removeClass('swiper-slide-active').addClass('met-page');
            var page = $('.met-page');
            page.last().append('</div></div>');
            var mapInit=true;
                        page.each(function(index, element) {
                data_hash = $(this).attr('data-hash');
                data_hash = data_hash ? 'data-hash="' + data_hash + '"' : '';
                data_title = $(this).attr('data-title');
                data_title = data_title ? '<a title="' + data_title + '"  href="javascript:void(0);"><b>' + data_title + '</b></a>' : '';
                $('.nav-ul').append('<li class="nav-li ' + (index ? '' : 'active') + '" ' + data_hash + '>' + data_title + '</li>');
            });
            nav_width();
            M['nav'].on('tap', function(swiper) {    
                $('.nav-li').removeClass('active').eq(swiper.clickedIndex).addClass('active');
                M['metbox'].slideTo(swiper.clickedIndex);
            })
            M['metbox'] = new Swiper('.met-box', {
                wrapperClass: 'met-wrapper',
                slideClass: 'met-page',
                direction: 'vertical',
                speed: 500,
                hashnav: true,
                lazyLoading: true,
                lazyLoadingOnTransitionStart: true,
                roundLengths: true,
                keyboardControl: true,
                slidesPerView: 'auto',
                mousewheelControl: true,
                simulateTouch: false,
                longSwipesRatio: 0.3,
                touchAngle: 30,
                nextButton: '.banner-next',
                uniqueNavElements: false,
                onSlideChangeStart: function(swiper, src) {
                    var nav = $('.met-head'),
                        side = $('.nav-side');
                    if (swiper.activeIndex > 0) {
                        nav.addClass('nav-bg');
                        side.addClass('side-bg');

                    } else {
                        nav.removeClass('nav-bg');
                        side.removeClass('side-bg');
                    }
                },
                onSlideChangeEnd: function(swiper) {
                   if(mapInit){mapRegister();mapInit=false;}
                    $('.nav-li').removeClass('active').eq(swiper.activeIndex).addClass('active');
                    M['nav'].slideTo(swiper.activeIndex);

                }
            })
        } else if (!head.data('scroll') && M['classnow'] == 10001) {
            $('.swiper-lazy').each(function(index, el) {
                if($(this).attr('data-background')){
                    $(this).css('backgroundImage', 'url('+$(this).attr('data-background')+')');
                }
               if($(this).attr('data-src')){
                $(this).attr('src', $(this).attr('data-src'));
               }
            });
            nav_width();
            var nav = $('.met-head'),
                side = $('.nav-side');
            $(window).scroll(function() {
                if (head.offset().top > 1) {
                    head.addClass("nav-bg");
                    side.addClass('side-bg');
                } else {
                    head.removeClass("nav-bg");
                    side.removeClass('side-bg');
                }
            });
        } else {
            nav_width();
            var nav = $('.met-head'),
                side = $('.nav-side');
            head.addClass("nav-bg");
            side.addClass('side-bg');
        }
    },
    load:function(){
        var loader=$('.load');
        if(loader.length>0){
        $(window).load(function() {
            loader.fadeOut(500);
        });
        }
    },
    side: function() {
        if ($('.nav-side').length > 0) {
            $('.nav-side,.side-shadow,.side-close').click(function() {
                if ($('body').hasClass('open')) {
                    $('body').removeClass('open');
                } else {
                    $('body').addClass('open');
                }
            });
            var i = 0;
            $('.side-box .nav-item').each(function(index, el) {
                $(this).css('transitionDelay', i + 'ms');
                i = i + 100;
            });
            $('.navlist2').on('show.bs.collapse', function() {
                $(this).parent().addClass('open');
            })
            $('.navlist2').on('hide.bs.collapse', function() {
                $(this).parent().removeClass('open');
            })
            var shop_cart = $('.shop_cart'),
                sidenav = $('.side-nav'),
                sideshadow = $('side-shadow');
            if (shop_cart.length > 0) {
                shop_cart.on('click', function(event) {
                    if ($(this).hasClass('open')) {
                        sidenav.removeClass('overflow-visible');
                    } else {
                        sidenav.addClass('overflow-visible');
                    }
                });
            }
        }
    },
    cntotc: function() {
        //ç®€ä½“ç¹ä½“äº’æ¢
        var b = $('.side-box .btn-cntotc');
        b.on('click', function(event) {
            var lang = $(this).attr('data-tolang');
            if (lang == 'tc') {
                $('body').s2t();
                $(this).attr('data-tolang', 'cn');
                $(this).text('ç®€ä½“');
            } else if (lang == 'cn') {
                $('body').t2s();
                $(this).attr('data-tolang', 'tc');
                $(this).text('ç¹é«”');
            }
        });
    },
    bg: function() {
        $('[data-bg]').each(function(index, el) {
            var background = $(this).attr('data-bg'),
                hex = background.split('|')[0],
                opacity = background.split('|')[1],
                bgcolor = rgb2color(hex, opacity);
            $(this).css('background', bgcolor);
        });

        function rgb2color(hex, opacity) {
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var c = hex.toLowerCase();
            if (c && reg.test(c)) {
                if (c.length === 4) {
                    var a = '#';
                    for (var i = 1; i < 4; i++) {
                        a += c.slice(i, i + 1).concat(c.slice(i, i + 1));
                    }
                    c = a;
                }
                var b = [];
                for (var i = 1; i < 7; i += 2) {
                    b.push(parseInt('0x' + c.slice(i, i + 2)));
                }
                return "rgba(" + b.join(',') + ',' + opacity + ')';
            } else {
                return c
            }

        }
    }
};
var x = new metui(METUI_FUN['head_nav_met_11_6']);

function nav_width() {
    var signWidth = [],
        sign_all_width = 0,
        sign_width = 0,
        sign_num_width = 0;
    $('.nav-li').each(function(index) {
        signWidth[index] = $(this).width();
        sign_all_width += signWidth[index];
    });
    var sign_width = $('.head_nav_met_11_6').width() - $('.nav-logo').width();
    sign_width = sign_width > sign_all_width ? sign_all_width : sign_width;
    $('.nav-box').width(sign_width);
    sign_num_width = 0;
    for (var i = 0; i < 30; i++) {
        if (sign_num_width + signWidth[i] <= sign_width) {
            sign_num_width += signWidth[i];
        }
    }
    M['nav'] = new Swiper('.nav-box', {
        wrapperClass: 'nav-ul',
        slideClass: 'nav-li',
        slidesPerView: 'auto',
        mousewheelControl: true,
        slidesOffsetBefore: sign_width - sign_num_width,
        preventClicks: false
    });
}
function IEVersion() {
            var userAgent = navigator.userAgent; //å–å¾—æµè§ˆå™¨çš„userAgentå­—ç¬¦ä¸²  
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //åˆ¤æ–­æ˜¯å¦IE<11æµè§ˆå™¨  
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //åˆ¤æ–­æ˜¯å¦IEçš„Edgeæµè§ˆå™¨  
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if(isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion == 7) {
                    return 7;
                } else if(fIEVersion == 8) {
                    return 8;
                } else if(fIEVersion == 9) {
                    return 9;
                } else if(fIEVersion == 10) {
                    return 10;
                } else {
                    return 6;//IEç‰ˆæœ¬<=7
                }   
            } else if(isEdge) {
                return '12';//edge
            } else if(isIE11) {
                return 11; //IE11  
            }else{
                return 13;//ä¸æ˜¯ieæµè§ˆå™¨
            }
        }

function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}
METUI_FUN['banner_met_11_6'] = {
    name: 'banner_met_11_6',
    bannerInit: function() {
        if (METUI['banner_met_11_6'].length) {
            var item = $('.banner_met_11_6 .banner-item'),
                ctrl = $('.banner_met_11_6 .banner-ctrl'),
                prev = $('.banner_met_11_6 .banner-ctrl .left'),
                next = $('.banner_met_11_6 .banner-ctrl .right'),
                ny = $('.banner-ny-h');
            if (item.length < 2) {
                ctrl.addClass('hide');
            }
            if (item.length > 0) {
                bh = item.data('height').split('|'),
                    autoplayspeed = item.data('autoplayspeed'),
                    speed = item.data('speed');

                for (var i = 0; i < bh.length; i++) {
                    if (bh[i] == 0) {
                        bh[i] = '100%';
                    }
                }
                Breakpoints.on('md lg', {
                    enter: function() {
                        ny.height(bh[0]);
                        item.height(bh[0]);
                    }
                })
                Breakpoints.on('sm', {
                    enter: function() {
                        ny.height(bh[1]);
                        item.height(bh[1]);
                    }
                })
                Breakpoints.on('xs', {
                    enter: function() {
                        ny.height(bh[2]);
                        item.height(bh[2]);
                    }
                })
                if (item.length > 1) {
                    var text = $('.banner-text');
                    $('.banner').addClass('isSwiper')
                    M['banner'] = new Swiper('.banner', {
                        wrapperClass: 'banner-warpper',
                        slideClass: 'banner-item',
                        speed: speed,
                        loop: true,
                        autoplay: autoplayspeed,
                        autoplayDisableOnInteraction: true,
                        keyboardControl: true,
                        slidesPerView: 1,
                        simulateTouch: false,
                        paginationClickable: true,
                        onInit: function(swiper) {
                            swiperAnimateCache(swiper);
                            swiperAnimate(swiper);
                        },
                        onSlideChangeEnd: function(swiper) {
                            swiperAnimate(swiper);
                        }
                    });
                    prev.click(function() {
                        M['banner'].slidePrev();
                    });
                    next.click(function() {
                        M['banner'].slideNext();
                    });
                }
            }
        }
    },
    video: function() {
        var v = $('.met-video'),
            datav = $('.metvideobox').attr("data-metvideo"),
            m = $('#media'),
            w = $(window).width(),
            h = $(window).height();
        if (device_type == 'd' && $('.metvideobox').length > 0) {
            data = datav.split("|"),
                src = data[4];
            m.attr("src", src).trigger('play');
            $('.banner-ctrl').addClass('hide');
            bgResize(m, w, h, 1920, 1080);
            $(window).resize(function() {
                var video = $('#media'),
                    w = $(window).width(),
                    h = $(window).height();
                bgResize(video, w, h, 1920, 1080);
            })

        }
    }
};
var banner = metui(METUI_FUN['banner_met_11_6']);

function bgResize(img, width, height, bg_width, bg_height) {
    var w = width,
        h = width / bg_width * bg_height;
    if (h < height) {
        h = height;
        w = height / bg_height * bg_width;
    }
    img.css({
        height: h,
        width: w,
        marginTop: -(h - height) / 2,
        marginLeft: -(w - width) / 2,
        'visibility': 'visible'
    });
}

METUI_FUN['foot_info_met_11_4'] = {
    name: 'foot_info_met_11_4',
    cntotc: function() {
        //ç®€ä½“ç¹ä½“äº’æ¢
        var b = $('.foot_info_met_11_4 .btn-cntotc');
        b.on('click', function(event) {
            var lang = $(this).attr('data-tolang');
            if (lang == 'tc') {
                $('body').s2t();
                $(this).attr('data-tolang', 'cn');
                $(this).text('ç®€');
            } else if (lang == 'cn') {
                $('body').t2s();
                $(this).attr('data-tolang', 'tc');
                $(this).text('ç¹');
            }
        });
    }
};
var foot_info = new metui(METUI_FUN['foot_info_met_11_4']);

METUI_FUN['product_list_met_11_6'] = {
    name: 'product_list_met_11_6',
    init: function() {
        if (!$('.met-head').data('scroll') && M['classnow'] == 10001) {
            $('.product_list_met_11_6 .swiper-lazy').each(function(index, el) {
                if ($(this).attr('data-background')) {
                    $(this).css('background', 'url(' + $(this).attr('data-background') + ')');
                }
            })
        }
        if ($('.product-nav').length > 0) {
            M['product'] = new Swiper('.product-nav', {
                wrapperClass: 'product-ul',
                slideClass: 'product-li',
                slidesPerView: 1,
                keyboardControl: true,
                centeredSlides: true,
                simulateTouch: false,
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 1,
                    }
                },
                onInit: function(swiper) {
                    var index = swiper.activeIndex,
                        slides = swiper.slides[index],
                        $slides = $(slides),
                        id = $slides.attr('data-id');
                    $('.bg-list[data-id=' + id + ']').addClass('active').siblings().removeClass('active');
                },
                onSlideChangeEnd: function(swiper) {
                    var index = swiper.activeIndex,
                        slides = swiper.slides[index],
                        $slides = $(slides),
                        id = $slides.attr('data-id');
                    $('.bg-list[data-id=' + id + ']').addClass('active').siblings().removeClass('active');

                }
            });
            $('.product-ctrl .ctrl-left').click(function() {
                M['product'].slidePrev();
            });
            $('.product-ctrl .ctrl-right').click(function() {
                M['product'].slideNext();
            });
        }
    }

};
var x = new metui(METUI_FUN['product_list_met_11_6']);

METUI_FUN['case_list_met_11_1'] = {
    name: 'case_list_met_11_1',
    init: function() {
        console.log($('.case-li').length)
        if ($('.case-li').length > 8 || $(window).width() < 768) {
            $('.case-swiper').addClass('isSwiper');
            M['case'] = new Swiper('.case-swiper', {
                wrapperClass: 'case-ul',
                slideClass: 'case-li',
                keyboardControl: true,
                slidesPerColumn: 2,
                slidesPerGroup: 4,
                slidesPerView: 4,
                //slidesæ»‘å—åŠ¨ç”»ä¹‹é—´çš„æŒç»­æ—¶é—´
                speed: 600,
                prevButton: '.case-ctrl .left',
                nextButton: '.case-ctrl .right',
                breakpoints: {
                    //å½“å®½åº¦å°äºŽç­‰äºŽ500
                    500: {
                        slidesPerView:1,
                        slidesPerGroup: 1,
                        slidesPerColumn: 1,
                      
                    },
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        slidesPerColumn: 2,
                    },
                    991: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        slidesPerColumn: 4,
                    }
                },

            })
        }

    }

};
var x = new metui(METUI_FUN['case_list_met_11_1']);

METUI_FUN['news_list_met_11_6'] = {
        name: 'news_list_met_11_6',
        init: function() {
            if (!$('.met-head').data('scroll') && M['classnow'] == 10001) {
                $('.news_list_met_11_6 .swiper-lazy').each(function(index, el) {
                        if ($(this).attr('data-background')) {
                            $(this).css('backgroundImage', 'url(' + $(this).attr('data-background') + ')');
                        }
                    })
                }
                var ul = $('.news-ul'),
                    li = $('.news-li'),
                    ctrl = $('.news-ctrl');
                if (li.length > 0) {
                    ul.slick({
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: false,
                        dots: false,
                        responsive: [{
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                infinite: false
                            }
                        }, {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: false
                            }
                        }]
                    });
                    ctrl.on('click', '.left', function(event) {
                        ul.slick('slickPrev');

                    });
                    ctrl.on('click', '.right', function(event) {
                        ul.slick('slickNext');

                    });

                }

            }

        };
        var x = new metui(METUI_FUN['news_list_met_11_6']);

 var map=function() {
        var script = document.createElement("script"),
            coordinate = $('#map').attr('coordinate') || '105,25',
            logo = $('#map').attr('logo'),
            title = $('#map').attr('title'),
            img=$('#map').attr('img'),
            desc = $('#map').attr('description');
        script.src = "//api.map.baidu.com/api?v=2.0&ak=aL2Gwp389Kxj3bFhSMq7cf9w&callback=map_func";
        document.body.appendChild(script);
        map_func = function() {
            var coo = coordinate && coordinate.split(',');
            var map = new BMap.Map("map");
            map.centerAndZoom(new BMap.Point(coo[0] * 1, coo[1] * 1), 19);
            var Icon = new BMap.Icon(img, new BMap.Size(20, 27));
            var marker = new BMap.Marker(new BMap.Point(coo[0] * 1, coo[1] * 1), {
                icon: Icon
            });
            var content =
                "<div class='mapTip' style='overflow:hidden;'>" +
                "<div style='float:left;'><img id='map-logo' src=" + logo + " style='width:60px;height:60px;'></div>" +
                "<div style='float:left;padding-top:10px;padding-left:15px;max-width:145px;'><h3 style='margin:0;font-size:15px;line-height:1.2;max-height: 20px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>" + title + "</h3>" +
                "<p style='margin:0;color:#7d7d7d;font-size:12px;padding-top:5px;max-height:20px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;'>" + desc + "</p></div></div>";
            var infoWindow = new BMap.InfoWindow(content);
            map.addOverlay(marker);
            if (device_type=='t') { 
                map.panBy(0, -100);
            } 
            if(device_type=='m') {
                map.panBy(0, -200);
            } 
            if(device_type=='d') {
                map.panBy(-300, 0);
            }
            marker.openInfoWindow(infoWindow);
            map.setMapStyle({
                style: 'grayscale'
            });
            marker.addEventListener("click", function() {
                this.openInfoWindow(infoWindow);
                //å›¾ç‰‡åŠ è½½å®Œæ¯•é‡ç»˜infowindow
                document.getElementById('map-logo').onload = function() {
                    infoWindow.redraw(); //é˜²æ­¢åœ¨ç½‘é€Ÿè¾ƒæ…¢ï¼Œå›¾ç‰‡æœªåŠ è½½æ—¶ï¼Œç”Ÿæˆçš„ä¿¡æ¯æ¡†é«˜åº¦æ¯”å›¾ç‰‡çš„æ€»é«˜åº¦å°ï¼Œå¯¼è‡´å›¾ç‰‡éƒ¨åˆ†è¢«éšè—
                }
            });
        }
    }

if ($('.met-head').data('scroll')){

}else{
    map()
}
