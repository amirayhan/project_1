$(function () {
    //mixitup js
    var mixer = mixitup(".work_content");

    //venobox js
    new VenoBox({
        selector: ".venobox",
        numeration: true,
        infinigall: true,
        share: true,
        spinner: "rotating-plane",
    });

    //slick js
    $(".slider_image").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider_text",
    });
    $(".slider_text").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider_image",
        focusOnSelect: true,

        prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    });
});
