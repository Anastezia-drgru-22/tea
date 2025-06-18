$(window).on('load', function() {
    initWOW();
    initTeaSlider();
    initMagnificPopup();
    initAccordion();
    initPhoneInputMask();
    initFormSubmit();
    initClosePopup();
});

// Функция для инициализации WOW анимаций
function initWOW() {
    new WOW({
        animateClass: 'animate__animated',
    }).init();
}

// Функция для инициализации карусели с помощью Slick
function initTeaSlider() {
    $('.tea-slider').slick({
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><g clip-path="url(#clip0_27_8)"><path d="M5.32935 9.47742L13.7908 0.176819C13.9865 -0.0384587 14.2551 -0.164517 14.547 -0.178062C14.8389 -0.191607 15.1179 -0.0909537 15.3323 0.105292L16.0152 0.729469C16.4596 1.13622 16.4912 1.82934 16.0858 2.27487L8.98048 10.085L16.7758 17.212C16.9903 17.4082 17.116 17.6772 17.1294 17.9697C17.1427 18.2625 17.042 18.5421 16.8463 18.7575L16.2232 19.4421C16.0273 19.6574 15.7589 19.7835 15.467 19.797C15.1751 19.8106 14.8961 19.7099 14.6817 19.5137L5.40013 11.0282C5.18513 10.8313 5.05964 10.561 5.04692 10.268C5.03285 9.97387 5.13319 9.6932 5.32935 9.47742Z" fill="#595555"/></g><defs><clipPath id="clip0_27_8"><rect width="19.9396" height="20" fill="white" transform="matrix(-1 0 -2.22607e-08 1 20.87 0)"/></clipPath></defs></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><g clip-path="url(#clip0_27_16)"><path d="M15.6794 10.5226L7.218 19.8232C7.02231 20.0385 6.75371 20.1645 6.46179 20.1781C6.16987 20.1916 5.89093 20.091 5.67645 19.8947L4.99357 19.2705C4.54919 18.8638 4.51756 18.1707 4.92304 17.7251L12.0283 9.91505L4.23299 2.78805C4.01851 2.5918 3.89276 2.32276 3.87941 2.03028C3.86604 1.73747 3.96676 1.45792 4.16245 1.24248L4.78559 0.557867C4.98144 0.342583 5.24988 0.216532 5.5418 0.202987C5.83371 0.189442 6.11266 0.290095 6.32714 0.48634L15.6087 8.97182C15.8237 9.16869 15.9491 9.43905 15.9619 9.73205C15.9759 10.0261 15.8756 10.3068 15.6794 10.5226Z" fill="#595555"/></g><defs><clipPath id="clip0_27_16"><rect width="19.9396" height="20" fill="white" transform="matrix(1 0 2.22607e-08 -1 0.138916 20)"/></clipPath></defs></svg></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
}

// Функция для инициализации Magnific Popup
function initMagnificPopup() {
    $('.mfp-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: false
        },
        closeOnContentClick: true,
        closeBtnInside: true,
        mainClass: 'mfp-with-zoom', // обязательно для зума
        zoom: {
            enabled: true, // включаем зум
            duration: 300, // длительность анимации
            easing: 'ease-in-out', // тип анимации
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
}

// Функция для инициализации аккордеона
function initAccordion() {
    $(function () {
        $("#faqAccordion").accordion({
            header: "h3",
            collapsible: true,
            active: false,
            heightStyle: "content",
            icons: false
        });
    });
}

// Функция для инициализации маски ввода телефона
function initPhoneInputMask() {
    $("#inputPhone").inputmask({"mask": "+7 (999) 999-99-99"});
}

// Функция для обработки отправки формы
function initFormSubmit() {
    $("form").submit(function (event) {
        event.preventDefault();

        let name = $("#inputName").val();
        let lastname = $("#inputLastname").val();
        let phone = $("#inputPhone").val();
        let country = $("#inputCountry").val();
        let zip = $("#inputZip").val();
        let address = $("#inputAddress").val();

        if (name === "" || lastname === "" || phone === "" || country === "" || zip === "" || address === "") {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        if (!/^\d{6}$/.test(zip)) {
            alert("Индекс должен содержать только цифры и быть длиной 6 символов.");
            return;
        }

        $("form").hide();
        $("#thank-popup").css({visibility: 'visible', opacity: 0}).fadeTo(100, 1);
    });
}

// Функция для закрытия попапа
function initClosePopup() {
    $("#close-popup").click(function () {
        $("#thank-popup").fadeTo(300, 0, function () {
            $("#thank-popup").css({visibility: 'hidden'});
            $("#orderForm")[0].reset();
            $("form").show();
        });
    });
}





