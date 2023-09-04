const swiperMain = new Swiper('.swiper__main', {
    loop: true,
    effect: "fade",
    speed: 1000,

    autoplay: {
        delay: 3000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next__main',
        prevEl: '.swiper-button-prev__main',
    },

});

const swiperOffers = new Swiper('.swiper__offers', {
    loop: false,
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.best-offers__top .swiper-button-next',
        prevEl: '.best-offers__top .swiper-button-prev',
    },

});

const swiperSales = new Swiper('.sales .swiper__offers', {
    loop: false,
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.sales .best-offers__top .swiper-button-next',
        prevEl: '.sales .best-offers__top .swiper-button-prev',
    },

});

const swiperNewProducts = new Swiper('.new-products .swiper__offers', {
    loop: false,
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.new-products .best-offers__top .swiper-button-next',
        prevEl: '.new-products .best-offers__top .swiper-button-prev',
    },

});

const swiperVideo = new Swiper('.swiper__video', {
    loop: false,
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '.video__inner .swiper-button-next',
        prevEl: '.video__inner .swiper-button-prev',
    },

});

const swiperBrands = new Swiper('.swiper__brands', {
    loop: true,
    speed: 1000,
    slidesPerView: 5,
    spaceBetween: 24,

    // Navigation arrows
    navigation: {
        nextEl: '.brands .swiper-button-next',
        prevEl: '.brands .swiper-button-prev',
    },

});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

let gallerySliders = document.querySelectorAll('.swiper__gallery');
gallerySliders.forEach(function (slider) {
    const swiperGallery = new Swiper(slider, {
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 20,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper__gallery .swiper-button-next',
            prevEl: '.swiper__gallery .swiper-button-prev',
        },

    });
})




const tabs = document.querySelectorAll(".contacts__tab");
const contents = document.querySelectorAll(".contacts__content");

// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {

        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
            tabsChildren[t].classList.remove("contacts__tab--active");
        }
        // добавляем активный класс
        tabs[i].classList.add("contacts__tab--active");
        // теперь нужно удалить активный класс с блоков содержимого вкладок
        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
        for (let c = 0; c < tabContentChildren.length; c++) {
            tabContentChildren[c].classList.remove("contacts__content--active");
        }
        // добавляем активный класс
        contents[i].classList.add("contacts__content--active");

    });
}

customSelect('select');


(function ($) {

    $('#price-range-submit').hide();

    $("#min_price,#max_price").on('change', function () {

        $('#price-range-submit').show();

        var min_price_range = parseInt($("#min_price").val());

        var max_price_range = parseInt($("#max_price").val());

        if (min_price_range > max_price_range) {
            $('#max_price').val(min_price_range);
        }

        $("#slider-range").slider({
            values: [min_price_range, max_price_range]
        });

    });


    $("#min_price,#max_price").on("paste keyup", function () {

        $('#price-range-submit').show();

        var min_price_range = parseInt($("#min_price").val());

        var max_price_range = parseInt($("#max_price").val());

        if (min_price_range == max_price_range) {

            max_price_range = min_price_range + 100;

            $("#min_price").val(min_price_range);
            $("#max_price").val(max_price_range);
        }

        $("#slider-range").slider({
            values: [min_price_range, max_price_range]
        });

    });


    $(function () {
        $("#slider-range").slider({
            range: true,
            orientation: "horizontal",
            min: 1200,
            max: 250000,
            values: [1200, 250000],
            step: 100,

            slide: function (event, ui) {
                if (ui.values[0] == ui.values[1]) {
                    return false;
                }

                $("#min_price").val(ui.values[0]);
                $("#max_price").val(ui.values[1]);
            }
        });

        $("#min_price").val($("#slider-range").slider("values", 0));
        $("#max_price").val($("#slider-range").slider("values", 1));

    });

    $("#slider-range,#price-range-submit").click(function () {

        var min_price = $('#min_price').val();
        var max_price = $('#max_price').val();

        // $("#searchResults").text("Here List of products will be shown which are cost between " + min_price + " " + "and" + " " + max_price + ".");
    });


})(jQuery);


function validate(evt) {
    var theEvent = evt || window.event;
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

