$(document).ready((function() {
    $(".agency_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: $(".slick_prev"),
        nextArrow: $(".slick_next"),
        asNavFor: $(".featured_image_slider"),
        speed: 1e3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                useTransform: !1
            }
        }]
    }), $(".featured_image_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        speed: 1e3,
        asNavFor: $(".agency_slider"),
        responsive: [{
            breakpoint: 1200,
            settings: {
                useTransform: !1
            }
        }]
    }), $(".our_locations-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="slick_service slick_prev"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="13.8298" y1="4.91243" x2="1.45438" y2="4.91243" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.44727 8.34473L0.997599 4.8703L4.44727 1.39583" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '   <button class="slick_service slick_next"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.45345" y1="4.8278" x2="13.8288" y2="4.8278" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8359 1.39551L14.2856 4.86993L10.8359 8.34441" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                useTransform: !1
            }
        }]
    }), $(".menu_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        speed: 500,
        fade: !0
    }), $(window).width() < 580 && $(".mobile_slider .row").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        speed: 500,
        variableWidth: !0,
        infinite: !1,
        prevArrow: '     <button class="slick_service slick_prev"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="13.8298" y1="4.91243" x2="1.45438" y2="4.91243" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.44727 8.34473L0.997599 4.8703L4.44727 1.39583" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '   <button class="slick_service slick_next"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.45345" y1="4.8278" x2="13.8288" y2="4.8278" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8359 1.39551L14.2856 4.86993L10.8359 8.34441" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                useTransform: !1
            }
        }]
    }), $(window).width() < 580 && $(".our_loations-grid-wrap .row").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        speed: 500,
        variableWidth: !0,
        infinite: !1,
        centerMode: !0,
        prevArrow: '     <button class="slick_service slick_prev"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="13.8298" y1="4.91243" x2="1.45438" y2="4.91243" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.44727 8.34473L0.997599 4.8703L4.44727 1.39583" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '   <button class="slick_service slick_next"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.45345" y1="4.8278" x2="13.8288" y2="4.8278" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8359 1.39551L14.2856 4.86993L10.8359 8.34441" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                useTransform: !1
            }
        }]
    }), $(".service_listing_slider-mobile").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        infinite: !1,
        variableWidth: !0,
        arrows: !0,
        prevArrow: '     <button class="slick_service slick_prev"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="13.8298" y1="4.91243" x2="1.45438" y2="4.91243" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.44727 8.34473L0.997599 4.8703L4.44727 1.39583" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '   <button class="slick_service slick_next"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.45345" y1="4.8278" x2="13.8288" y2="4.8278" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8359 1.39551L14.2856 4.86993L10.8359 8.34441" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                useTransform: !1
            }
        }]
    }), $(".portfolio_gallery-slider").mousemove((function(e) {
        Number(e.pageX) >= Number($(window).width() / 2) ? $("body").removeClass("slider_arrow-left") : $("body").addClass("slider_arrow-left"), $(".portfolio_gallery-slider").click((function(e) {
            Number(e.pageX) >= Number($(window).width() / 2) ? $(".portfolio_gallery-slider").slick("slickPrev") : $(".portfolio_gallery-slider").slick("slickNext")
        }))
    })), $(".portfolio_gallery-slider").slick({
        slidesToScroll: 1,
        arrows: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        speed: 1e3,
        variableWidth: !0,
        swipe: !1,
        swipeToSlide: !1,
        rtl: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                swipe: !0,
                speed: 150,
                centerMode: !0,
                useTransform: !1,
                slidesToScroll: 1
            }
        }]
    }), $(".portfolio_gallery-slider .gallery_slide").each((function() {
        $(this).index() <= 3 && $(this).addClass("fadeInSlide")
    })), $(".desktop_menu ul li a").each((function() {
        $(this).mouseover((function() {
            $("body").addClass("desktop_menu-hover"), $(".menu_slider").slick("slickGoTo", $(this).closest("li").index())
        })), $(this).mouseleave((function() {
            $("body").removeClass("desktop_menu-hover")
        }))
    })), $(".dynamic_link-slider .inner_wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        dots: !1,
        speed: 1e3,
        infinite: !1,
        autoplay: !1,
        autoplaySpeed: 4e3,
        pauseOnFocus: !1,
        draggable: !1,
        pauseOnHover: !1,
        appendArrows: $(".dynamic_link-slider"),
        prevArrow: '     <button class="slick_service slick_prev"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="13.8298" y1="4.91243" x2="1.45438" y2="4.91243" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.44727 8.34473L0.997599 4.8703L4.44727 1.39583" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '   <button class="slick_service slick_next"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.45345" y1="4.8278" x2="13.8288" y2="4.8278" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8359 1.39551L14.2856 4.86993L10.8359 8.34441" stroke="#23211D" stroke-width="0.918619" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                infinite: !0,
                useTransform: !1,
                speed: 300
            }
        }]
    }), $(".slide-next.intobtn").click((function(e) {
        e.stopPropagation(), e.preventDefault(), $(".dynamic_link-slider .inner_wrapper").slick("slickNext")
    })), $(".slide-prev.intobtn").click((function(e) {
        e.stopPropagation(), e.preventDefault(), $(".dynamic_link-slider .inner_wrapper").slick("slickPrev")
    }));
    const heroBanner = $(".hero_bg_slider"),
        heroBannerSlides = $(".hero_bg_slider .slide");
    $(heroBanner).on("init", (function(event, slick) {
        $(".hero_bg_slider .slick-active").addClass("animate_in")
    })), $(heroBanner).on("beforeChange", (function(event, slick, currentSlide, nextSlide) {
        setTimeout(() => {
            $(heroBannerSlides[nextSlide]).addClass("animate_in"), $(heroBannerSlides[currentSlide]).removeClass("animate_in")
        }, 300)
    })), heroBanner.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        speed: 1e3,
        fade: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        pauseOnFocus: !1,
        pauseOnHover: !1
    })
})), $(document).ready((function() {
    $(".vertical_tabs-slider li:first-child").addClass("active-tab"), $(".proj_summary_body-slider .proj_description-bodycopy:first-child").addClass("active-tabbody");
    let vertTabLinks = $(".vertical_tabs-slider li"),
        verticalTabBody = $(".proj_summary_body-slider .proj_description-bodycopy");
    vertTabLinks.each((function() {
        $(this).click((function() {
            let index = $(this).index();
            vertTabLinks.each((function() {
                $(this).removeClass("active-tab")
            })), $(this).addClass("active-tab"), verticalTabBody.each((function() {
                $(this).removeClass("active-tabbody")
            })), verticalTabBody.each((function() {
                $(this).index() == index && $(this).addClass("active-tabbody")
            })), setTimeout(() => {
                scroll.update()
            }, 300)
        }))
    }))
}));
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    freeMode: !0
});
$(document).ready((function() {
    $(".clients_slider").slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        rows: 3,
        arrows: true,
        cssEase: "ease-in-out",
        edgeFriction: .8,
        infinite: !0,
        speed: 700,
        swipeToSlide: false,
        touchThreshold: 2e3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                autoplay: !0,
                autoplaySpeed: 1500,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: !0,
                slidesToScroll: 2,
                autoplay: !0,
                autoplaySpeed: 1500
            }
        }, {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                dots: !0,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 1500
            }
        }]
    })
}));
let splittedText = $(".custom_hero_banner .content_wrapper h1").text().split(" "),
    newText = "";
splittedText.map((text, index) => {
    newText += "<span class='chars'>" + text + "</span>"
}), $(".custom_hero_banner .content_wrapper h1").html(newText);
let bannerSubtitle = $(".custom_hero_banner .content_wrapper h4").text().split(" "),
    newBannerSubtitle = "";
bannerSubtitle.map((text, index) => {
    newBannerSubtitle += "<span class='subchars'>" + text + "</span>"
}), $(".custom_hero_banner .content_wrapper h4").html(newBannerSubtitle);
let portfolioSplittedText = $(".portfolio_detail_page_banner h1").text().split(" "),
    portfolioNewText = "";
portfolioSplittedText.map((text, index) => {
    portfolioNewText += "<span >" + text + "</span>"
}), $(".portfolio_detail_page_banner h1").html(portfolioNewText);
let serviceDetailText = $(".service_detail-content h1").text().split(" "),
    serviceDetailNewText = "";
if (serviceDetailText.map((text, index) => {
        serviceDetailNewText += "<span>" + text + "</span>"
    }), $(".service_detail-content h1").html(serviceDetailNewText), $(window).width(), $(document).ready((function() {
        $(".service_listing-row .service_card").click((function() {
            var localId = this.getAttribute("data-location-id");
            localStorage.setItem("SERVICE_ID", localId), window.location.href = this.getAttribute("data-href")
        })), $(".gotoId").click((function(e) {
            var localId = this.getAttribute("data-location-id");
            localStorage.setItem("SERVICE_ID", localId), window.location.href = this.getAttribute("href")
        })), $(".service_listing_slider-mobile .service_card a").click((function() {
            var localId = this.getAttribute("data-location-id");
            localStorage.setItem("SERVICE_ID", localId)
        })), $(window).width() > 1200 && ($(".service_three-column .service_list_item").hover((function() {
            $("body").addClass("service_enter")
        })), $(".service_three-column .service_list_item").mouseleave((function() {
            $("body").removeClass("service_enter")
        })), $(".service_card").hover((function() {
            $("body").addClass("service_enter")
        })), $(".service_card").mouseleave((function() {
            $("body").removeClass("service_enter")
        })), $(".lets_talk-block").hover((function() {
            $("body").addClass("lets_talk-enter")
        })), $(".lets_talk-block").mouseleave((function() {
            $("body").removeClass("lets_talk-enter")
        })), $(".vertical_tabs-slider li").hover((function() {
            $("body").addClass("lets_talk-enter-xs")
        })), $(".vertical_tabs-slider li").mouseleave((function() {
            $("body").removeClass("lets_talk-enter-xs")
        })), $(".portfolio_gallery-slider").hover((function() {
            $("body").addClass("lets_talk-enter-small")
        })), $(".portfolio_gallery-slider").mouseleave((function() {
            $("body").removeClass("lets_talk-enter-small")
        })), $(".banner_full-titles ").hover((function() {
            $("body").addClass("service_enter-large")
        })), $(".banner_full-titles ").mouseleave((function() {
            $("body").removeClass("service_enter-large")
        })), $(".location_card").hover((function() {
            $("body").addClass("location_card-hover")
        })), $(".location_card").mouseleave((function() {
            $("body").removeClass("location_card-hover")
        })), $(".hamburger_outer").hover((function() {
            $("body").addClass("burger_enter")
        })), $(".hamburger_outer").mouseleave((function() {
            $("body").removeClass("burger_enter")
        })), $(".our_locations-links li span").hover((function() {
            $("body").addClass("burger_enter")
        })), $(".our_locations-links li span").mouseleave((function() {
            $("body").removeClass("burger_enter")
        })), $(".filter_links li").hover((function() {
            $("body").addClass("burger_enter")
        })), $(".filter_links li").mouseleave((function() {
            $("body").removeClass("burger_enter")
        })), $(".dynamic_link-wrap").hover((function() {
            $("body").addClass("dynamic_link-enter")
        })), $(".dynamic_link-wrap").mouseleave((function() {
            $("body").removeClass("dynamic_link-enter")
        })), $(".dynamic_link-wrap .content_wrap .bottom_wrp").hover((function() {
            $("body").addClass("dynamic_link-enter-text")
        })), $(".dynamic_link-wrap .content_wrap .bottom_wrp").mouseleave((function() {
            $("body").removeClass("dynamic_link-enter-text")
        })), $(".portfolio_grid-card").hover((function() {
            $("body").addClass("portfolio_card_enter")
        })), $(".portfolio_grid-card").mouseleave((function() {
            $("body").removeClass("portfolio_card_enter")
        })), $(".clients_slider .slick-list").hover((function() {
            //$("body").addClass("clients_carousel-enter_1")
        })), $(".clients_slider .slick-list").mouseleave((function() {
            $("body").removeClass("clients_carousel-enter")
        }))), $(".dynamic_link-wrap .slider_button-wrap ").click((function(e) {
            e.stopPropagation()
        })), $(".dynamic_link-wrap .intobtn ").click((function(e) {
            e.stopPropagation()
        })), $(".work-withus").click((function() {
            $("body").addClass("work_form-open")
        })), $(".lets_talk-block").click((function() {
            $("body").addClass("work_form-open")
        })),  $(".work_with-us-popup .close_popup").click((function() {
            $("body").removeClass("work_form-open")
        })), $(".form_popup-overlay").click((function() {
            $("body").removeClass("work_form-open")
        })), $("#movePrevSlide").click((function() {
            $(".work_with_us-form_wrap").removeClass("next_slide")
        })), $("#moveNextSlide").click((function() {
            $(".work_with_us-form_wrap").addClass("next_slide")
        })), $(".location_card").click((function() {
            $(".map_box iframe").attr("src", this.getAttribute("data-href")), $("body").addClass("map_box_open")
        })), $(".map_box .close_btn").click((function() {
            $("body").removeClass("map_box_open")
        })),$("#sender").click((function() {
            $(".work_with-us-popup form").removeClass("inner_wrapper")
            $(".work_with-us-popup form").removeClass("success_popup")
        })), $(".form_popup-overlay").click((function() {
            $("body").removeClass("map_box_open")
        })), $(".dynamic_link-wrap").click((function() {
            window.screen.width > 1200 && (window.location.href = this.getAttribute("data-href"))
        })), $(".slider_button-wrap").click((function(e) {
            e.stopPropagation()
        })), $(".hamburger_outer").click((function() {
            $("body").addClass("desktop_menu-open")
        })), $(".desktop_menu ul li a").click((function() {
            $("body").removeClass("desktop_menu-open")
        })), $(".desktop_menu .int_button").click((function() {
            $("body").removeClass("desktop_menu-open")
        })),  $(".portfolio_grid-card").click((function() {
            window.location.href = this.getAttribute("data-href")
        }))
    })), $(document).ready((function() {})), $(document).ready((function() {
        $(".filter_links button").click((function() {
            $("body").toggleClass("cat_filter-open")
        })), $(".filter_links ul li").click((function() {
            $("body").removeClass("cat_filter-open")
        })), $(document).on("click", (function(event) {
            var $trigger = $(".filter_links");
            $trigger === event.target || $trigger.has(event.target).length || $("body").removeClass("cat_filter-open")
        })), $(".our_locations-links button").click((function() {
            $("body").toggleClass("location_filter-open")
        })), $(".our_locations-links ul li").click((function() {
            $("body").removeClass("location_filter-open")
        })), $(document).on("click", (function(event) {
            var $trigger = $(".our_locations-links");
            $trigger === event.target || $trigger.has(event.target).length || $("body").removeClass("location_filter-open")
        })), setTimeout(() => {
            $(".preloading_blade").addClass("page_loaded")
        }, 500), setTimeout(() => {
            $(".preloading_blade").addClass("animate_logo")
        }, 1500), setTimeout(() => {
            $(".preloading_blade").css({
                transform: "translateY(-100%)"
            })
        }, 5500)
    })), $(window).width() > 1200) {
    new MouseFollower({
        el: null,
        container: document.body,
        className: "mf-cursor",
        innerClassName: "mf-cursor-inner",
        textClassName: "mf-cursor-text",
        mediaClassName: "mf-cursor-media",
        mediaBoxClassName: "mf-cursor-media-box",
        iconSvgClassName: "mf-svgsprite",
        iconSvgNamePrefix: "-",
        iconSvgSrc: "",
        dataAttr: "cursor",
        hiddenState: "-hidden",
        textState: "-text",
        iconState: "-icon",
        activeState: "-active",
        mediaState: "-media",
        stateDetection: {
            "-pointer": "a,button",
            "-hidden": "iframe"
        },
        visible: !0,
        visibleOnState: !1,
        speed: .55,
        ease: "expo.out",
        overwrite: !0,
        skewing: 0,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: .001,
        skewingDeltaMax: .15,
        stickDelta: .15,
        showTimeout: 20,
        hideOnLeave: !0,
        hideTimeout: 300,
        hideMediaTimeout: 300
    }), new MouseFollower({
        container: "body",
        speed: .3,
        el: ".menu_slider"
    })
}
// $(".location_btn").click((function() {
//     $("body").toggleClass("language_dropdown-open")
// })), $(".language_menu .close_menu").click((function() {
//     $("body").removeClass("language_dropdown-open")
// }))
 $(document).ready((function() {
    var localSetId = !!localStorage.getItem("SERVICE_ID") && localStorage.getItem("SERVICE_ID");
    setTimeout(() => {
        if (localSetId)
            if (window.screen.width > 1200) scroll.scrollTo("#" + localSetId, {
                offset: -130
            }), localStorage.removeItem("SERVICE_ID");
            else {
                let top = document.getElementById("" + localSetId).offsetTop;
                window.scrollTo({
                    top: top - 150,
                    behavior: "smooth"
                }), localStorage.removeItem("SERVICE_ID")
            }
    }, 900)
}));
var hoverMouse = function($el) {
    $el.each((function() {
        var $self = $(this),
            hover = !1,
            offsetHoverMax = $self.attr("offset-hover-max") || .5,
            offsetHoverMin = $self.attr("offset-hover-min") || .3,
            onHover = function(x, y) {
                TweenMax.to($self, .4, {
                    x: .8 * x,
                    y: .8 * y,
                    rotation: .05 * x,
                    ease: Power2.easeOut
                })
            },
            onLeave = function() {
                TweenMax.to($self, .7, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    ease: Elastic.easeOut.config(1.2, .4)
                })
            };
        $(window).on("mousemove", (function(e) {
            var hoverArea = hover ? offsetHoverMax : offsetHoverMin,
                cursor_x = e.clientX,
                cursor_y = e.clientY - $(window).scrollTop(),
                width = $self.outerWidth(),
                height = $self.outerHeight(),
                offset = $self.offset(),
                x = cursor_x - (offset.left + width / 2),
                y = cursor_y - (offset.top + height / 2),
                mutHover = !1;
            Math.sqrt(x * x + y * y) < width * hoverArea && (mutHover = !0, hover || (hover = !0), onHover(x, y)), !mutHover && hover && (onLeave(), hover = !1)
        }))
    }))
};
$(window).width() > 1200 && (hoverMouse($(".cta_btn-rounded")), hoverMouse($("header .magnetic")));
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: !0,
    lerp: .1
});
let isFirstTry = localStorage.getItem("FIRST_ENTRY");
isFirstTry && $(".preloading_blade").addClass("d-none"), null == isFirstTry && localStorage.setItem("FIRST_ENTRY", !0), window.addEventListener("load", (function() {
    scroll.update(), setTimeout(() => {
        ScrollTrigger.refresh()
    }, 1e3)
})), $(window).resize((function() {
    setTimeout(() => {
        ScrollTrigger.refresh(), scroll.update()
    }, 500)
})), $(".accordion-button").click((function() {
    setTimeout(() => {
        scroll.update()
    }, 500)
}));
const counterUp = window.counterUp["default"];
if (scroll.on("scroll", func = scroll => {
        scroll.scroll.y > 50 ? $("body").addClass("stickyheader") : $("body").removeClass("stickyheader")
    }), scroll.on("scroll", ScrollTrigger.update), ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect: () => ({
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        }),
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    }), $(window).width() > 1200 && ($(".portfolio_listing_item").length > 0 && gsap.from(".portfolio_list_row .portfolio_listing_item", {
        scale: 2,
        scrollTrigger: {
            trigger: ".portfolio_list_row .portfolio_listing_item",
            start: "0% 100%",
            end: "100% 100%",
            scroller: "[data-scroll-container]",
            scrub: !0
        }
    }), $(".hero_bg_slider").length > 0 && gsap.to(".hero_bg_slider", {
        scaleX: 1.3,
        scrollTrigger: {
            trigger: ".custom_hero_banner",
            start: "0% 80px",
            end: "100% 00%",
            scroller: "[data-scroll-container]",
            scrub: !0
        }
    }), $(".about_feat-images").length > 0 && $(".about_agency_banner .about_agency_banner-wrapper .about_feat-images img").each((function() {
        gsap.from(this, {
            scale: 1.2,
            scrollTrigger: {
                trigger: this,
                start: "0% 100%",
                end: "100% 50%",
                scroller: "[data-scroll-container]",
                scrub: !0
            }
        })
    })), $(".service_card").length > 0 && $(".service_card").each((function() {
        gsap.from(this, {
            y: 100,
            opacity: 0,
            stagger: .1,
            duration: 1,
            scrollTrigger: {
                trigger: this,
                start: "50% 100%",
                scroller: "[data-scroll-container]"
            }
        })
    })), $(".services_listings_wrapper .primary_heading").length > 0 && gsap.from(".services_listings_wrapper .primary_heading", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".services_listings_wrapper .primary_heading",
            start: "0% 100%",
            end: "100% 90%",
            scroller: "[data-scroll-container]"
        }
    }), $(".banner_full-titles-wrap").length > 0 && gsap.from(".full_width-title .banner_full-titles-wrap", {
        scale: 2,
        scrollTrigger: {
            trigger: ".full_width-title .banner_full-titles-wrap",
            start: "0% 100%",
            end: "100% 60%",
            scroller: "[data-scroll-container]",
            scrub: !0
        }
    }), $(".portfolio_detail-sub").length > 0 && gsap.from(".portfolio_detail-sub img", {
        scale: 2,
        scrollTrigger: {
            trigger: ".portfolio_detail-sub img",
            start: "0% 100%",
            end: "100% 30%",
            scroller: "[data-scroll-container]",
            scrub: !0
        }
    }), $(".services_body-listing-item").length > 0 && $(".services_body-listing-item").each((function() {
        gsap.from($(this).find(".col-lg-8"), {
            opacity: 0,
            x: -200,
            duration: .7,
            scrollTrigger: {
                trigger: this,
                start: "50% 100%",
                scroller: "[data-scroll-container]"
            }
        }), gsap.from($(this).find(".col-lg-4"), {
            opacity: 0,
            x: 200,
            duration: .7,
            scrollTrigger: {
                trigger: this,
                start: "50% 100%",
                scroller: "[data-scroll-container]"
            }
        })
    })), $(".section_primary-title").length > 0 && $(".section_primary-title").each((function() {
        gsap.from(this, {
            y: 150,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: this,
                start: "0% 100%",
                end: "100% 100%",
                scroller: "[data-scroll-container]"
            }
        })
    })), $(".portfolio_grid-card").length > 0 && $(".portfolio_grid-card").each((function() {
        gsap.from($(this).find("img"), {
            scale: 1.4,
            scrollTrigger: {
                trigger: this,
                start: "0% 100%",
                end: "100% 100%",
                scroller: "[data-scroll-container]",
                scrub: !0
            }
        }), gsap.from($(this).find("h6"), {
            x: 50,
            scrollTrigger: {
                trigger: $(this).find("h6"),
                start: "0% 100%",
                end: "100% 85%",
                scroller: "[data-scroll-container]",
                scrub: !0
            }
        }), gsap.from($(this).find("h3"), {
            x: 50,
            scrollTrigger: {
                trigger: $(this).find("h3"),
                start: "0% 100%",
                end: "100% 85%",
                scroller: "[data-scroll-container]",
                scrub: !0
            }
        })
    }))), $(".advertising_continuos_slider").length > 0 && gsap.to(".advertising_continuos_slider .inner_wrapper", {
        xPercent: 100,
        scrollTrigger: {
            trigger: ".advertising_continuos_slider",
            start: "0% 100%",
            end: "100% -10%",
            scroller: window.screen.width > 1200 ? "[data-scroll-container]" : "body",
            scrub: !0
        }
    }), $(document).ready((function() {
        $(".chars").length > 0 && gsap.to(".chars", {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: isFirstTry ? .2 : 6.2,
            ease: Elastic.easeOut,
            stagger: .1
        }), $(".subchars").length > 0 && gsap.to(".subchars", {
            x: 0,
            opacity: 1,
            duration: .7,
            delay: isFirstTry ? .7 : 6.7,
            ease: Elastic.easeOut,
            stagger: .1
        }), $(".content_wrapper .btn_wrapper").length > 0 && gsap.to(".content_wrapper .btn_wrapper", {
            x: 0,
            opacity: 1,
            duration: .7,
            delay: isFirstTry ? 1 : 7,
            ease: Elastic.easeOut
        })
    })), $(".our_locations-links li span").each((function() {
        $(this).click((function() {
            setTimeout(() => {
                window.screen.width > 1200 && scroll.update()
            }, 800), $(".our_locations-links li").removeClass("active_location"), $(this).closest("li").addClass("active_location");
            let currentLocation = $(this).closest("li").attr("data-toggle-location").toLowerCase();
            $(".our_loations-grid-wrap .row").each((function() {
                currentLocation == $(this).attr("data-location").toLowerCase() ? $(this).addClass("active_location-body") : $(this).removeClass("active_location-body")
            }))
        }))
    })), ScrollTrigger.addEventListener("refresh", () => scroll.update()), ScrollTrigger.refresh(), $(window).width() > 1200) {
    $(".inner_wrapper").width($(".dynamic_link-wrap").length * $(".dynamic_link-wrap").width() + "px");
    $(".dynamic_link-wrap").length, $(".dynamic_link-wrap").width(), $(".dynamic_link-wrap").width()
}


$(".clients_slider").slick({
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 5,
    rows: 3,
    arrows: true,
    cssEase: "ease-in-out",
    edgeFriction: .8,
    infinite: true,
    speed: 200,
    swipeToSlide: false,
    touchThreshold: 5,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            autoplay: !0,
            autoplaySpeed: 1500,
            dots: !0
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: !0,
            slidesToScroll: 2,
            autoplay: !0,
            autoplaySpeed: 1500
        }
    }, {
        breakpoint: 580,
        settings: {
            slidesToShow: 2,
            dots: !0,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 1500
        }
    }]
})





// $(".lang_switcher span").hover((function() {
//     $("body").addClass("burger_enter")
// })), $(".lang_switcher span").mouseleave((function() {
//     $("body").removeClass("burger_enter")
// })), $(".location_btn").hover((function() {
//     $("body").addClass("burger_enter")
// })), $(".location_btn").mouseleave((function() {
//     $("body").removeClass("burger_enter")
// }))
// $(".lang_switcher span").click((function() {
//     $("body").toggleClass("language_select-open")
// })), $(".lang_switcher ul li").click((function() {
//     $("body").removeClass("language_select-open")
// })), $(document).on("click", (function(event) {
//     var $trigger = $(".lang_switcher");
//     $trigger === event.target || $trigger.has(event.target).length || $("body").removeClass("language_select-open")
// })), $(".lang_switcher li").click((function() {
//     $(".lang_switcher span").text($(this).text())
// }))