let burger = document.querySelector('#burger');
let menu = document.querySelector('.burger-menu__wrapper');
let closeBtn = document.querySelector('#close-menu');

burger.addEventListener('click', function () {
    menu.classList.remove('burger-menu__wrapper--none');
})
closeBtn.addEventListener('click', function () {
    menu.classList.add('burger-menu__wrapper--none');
})

let swiper1 = document.querySelector('.swiper__main');
if (swiper1) {

    const swiperMain = new Swiper('.swiper__main', {
        // loop: true,
        effect: "fade",
        speed: 1000,

        // autoplay: {
        //     delay: 3000,
        // },



        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next__main',
            prevEl: '.swiper-button-prev__main',
        },

    });
}


let swiper2 = document.querySelector('.swiper__offers');
if (swiper2) {
    const swiperOffers = new Swiper('.swiper__offers', {
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 20,

        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            640: {
                slidesPerView: 2,

            },
            1024: {
                slidesPerView: 4,

            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next__offers',
            prevEl: '.swiper-button-prev__offers',
        },

    });
}
let swiper3 = document.querySelector('.sales .swiper__offers');
if (swiper3) {
    const swiperSales = new Swiper('.sales .swiper__offers', {
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 20,

        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            640: {
                slidesPerView: 2,

            },
            1024: {
                slidesPerView: 4,

            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.sales .swiper-button-next',
            prevEl: '.sales .swiper-button-prev',
        },

    });
}
let swiper4 = document.querySelector('.new-products .swiper__offers');
if (swiper4) {
    const swiperNewProducts = new Swiper('.new-products .swiper__offers', {
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 20,

        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            640: {
                slidesPerView: 2,

            },
            1024: {
                slidesPerView: 4,

            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.new-products .swiper-button-next',
            prevEl: '.new-products .swiper-button-prev',
        },

    });
}
const swiperVideo = new Swiper('.swiper__video', {
    loop: false,
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 1,

        },
        1024: {
            slidesPerView: 2,

        }
    },

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

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10

        },
        640: {
            slidesPerView: 3,
            spaceBetween: 24


        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 24,


        }
    },
    pagination: {
        el: '.brands .swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.brands .swiper-button-next',
        prevEl: '.brands .swiper-button-prev',
    },

});

const swiperCategories = new Swiper('.swiper__categories', {
    loop: false,
    speed: 1000,
    slidesPerView: 7,
    spaceBetween: 0,

    breakpoints: {
        320: {
            slidesPerView: 2,


        },
        640: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 7,
            // spaceBetween: 18,


        }
    },
    pagination: {
        el: '.banner .swiper-pagination',
    },


});


let gallerySliders = document.querySelectorAll('.swiper__gallery');
gallerySliders.forEach(function (slider) {
    const swiperGallery = new Swiper(slider, {
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,


            },
            640: {
                slidesPerView: 2,

            },
            1024: {
                slidesPerView: 4,
                // spaceBetween: 18,


            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper__gallery .swiper-button-next',
            prevEl: '.swiper__gallery .swiper-button-prev',
        },

    });
})




const tabs = document.querySelectorAll(".contacts__tab");
const contents = document.querySelectorAll(".contacts__content");
if (tabs) {

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
}

const tabsProduct = document.querySelectorAll(".product-main__tab");
const contentsProduct = document.querySelectorAll(".product-main__content");
if (tabsProduct) {
    console.log(tabsProduct);

    for (let i = 0; i < tabsProduct.length; i++) {
        tabsProduct[i].addEventListener("click", (event) => {

            let tabsChildren = event.target.parentElement.children;
            for (let t = 0; t < tabsChildren.length; t++) {
                tabsChildren[t].classList.remove("product-main__tab--active");
            }
            // добавляем активный класс
            tabsProduct[i].classList.add("product-main__tab--active");
            // теперь нужно удалить активный класс с блоков содержимого вкладок
            let tabContentChildren = event.target.parentElement.nextElementSibling.children;
            for (let c = 0; c < tabContentChildren.length; c++) {
                tabContentChildren[c].classList.remove("product-main__content--active");
            }
            // добавляем активный класс
            contentsProduct[i].classList.add("product-main__content--active");

        });
    }
}
let select = document.querySelectorAll('select');
if (select.length) {
    customSelect('select');
}


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

let filterBtn = document.querySelector('#filters-open');
let filters = document.querySelector('#filters');
let filtersMobile = document.querySelector('.filters--mobile');
if (filtersMobile) {
    let filtersSelect = filtersMobile.querySelector('.custom-select-opener');
}
if (filterBtn) {
    filterBtn.addEventListener('click', function () {
        filters.classList.toggle('filters__options--mobile-open');

    })
    filtersSelect.addEventListener('click', function () {

        filters.classList.remove('filters__options--mobile-open');

    })
}
let fancy = document.querySelectorAll('[data-fancybox]');
console.log(fancy);
if (fancy.length) {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
}

let radioBtns1 = document.querySelectorAll('input[name="payment"]');
console.log(radioBtns1);
let radioBtns2 = document.querySelectorAll('input[name="delivery"]');
radioBtns1.forEach(function (elem) {
    elem.addEventListener('click', function () {
        radioBtns1.forEach(function (item) {
            item.parentElement.parentElement.classList.remove('radio--active');

        })
        if (elem.checked) {
            elem.parentElement.parentElement.classList.add('radio--active');
        }
    });
})
radioBtns2.forEach(function (elem) {
    elem.addEventListener('click', function () {
        radioBtns2.forEach(function (item) {
            item.parentElement.parentElement.classList.remove('radio--active');

        })
        if (elem.checked) {
            elem.parentElement.parentElement.classList.add('radio--active');
        }
    });
})

let headerSearchBtn = document.querySelector('#header-search__btn');
let headerSearch = document.querySelector('.header-search__wrapper');

headerSearchBtn.addEventListener('click', function(){
    headerSearch.classList.add('header-search__wrapper--active');
    

})
document.onclick = function (e) {
    const target = e.target;
    const its_search = target == headerSearch || headerSearch.contains(target);
    const search_is_active = headerSearch.classList.contains("header-search__wrapper--active");

    if (!its_search  && search_is_active) {
        headerSearch.classList.remove('header-search__wrapper--active');

    }
};



