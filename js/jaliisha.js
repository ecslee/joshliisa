$('#navbar').on('affix.bs.affix', function () {
    $(this).addClass('navbar-fixed-top');
    $(this).removeClass('col-sm-12');
}).on('affix-top.bs.affix', function () {
    $(this).removeClass('navbar-fixed-top');
    $(this).addClass('col-sm-12');
});

$('#gallery .gallery-row img').click(function () {
    $(this).toggleClass('col-sm-12').toggleClass('col-sm-4');
});

// June 25, 2017 @ 5:00pm EDT = UTC-04:00
var june25UTC = new Date(2017, 5, 25);
june25UTC.setUTCHours(12 + 4);
june25UTC.setUTCMinutes(00);

function setCountdown() {
    var today = new Date();

    var daysLeft = (june25UTC - today) / (1000 * 60 * 60 * 24);
    $('#countdown #countdown-day').text(Math.ceil(daysLeft));

    var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    $('#countdown #countdown-hrs').text(Math.floor(hoursLeft));

    var minLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    $('#countdown #countdown-min').text(Math.floor(minLeft));

    var secLeft = (minLeft - Math.floor(minLeft)) * 60;
    $('#countdown #countdown-sec').text(Math.floor(secLeft));
}

var countdownInterval = setInterval(setCountdown, 1000);
setCountdown();

// scrolling picture
var picMap = {
    'countdown': '141',
    'story': '110',
    'venue': '123',
    'todo': '184',
    'registry': '184',
    'party': '169',
    'tidbits': '147',
    'thanks': '183'
};

var scrollTimeout,
    section = $('.info-section')[0].id;
function checkScroll(e) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
        var newSection = $('.info-section')[0].id;
        $('.info-section').each(function (i, el) {
            if ($(el).offset().top -20 < $(document).scrollTop()) {
                newSection = el.id;
            }
        });
        
        if (section !== newSection) {
            $('#welcome .background.view').css('z-index', 4);
            $('#welcome .background[data-section="' + newSection + '"]').css({
                display: 'block',
                'z-index': 2
            });
            $('#welcome .background.view').fadeOut('slow', function () {
                $(this).removeClass('view');
                $('#welcome .background').css('z-index', 1);
                $('#welcome .background[data-section="' + newSection + '"]').addClass('view');
                section = newSection;
            });
        }
    }, 100);
}

$(document).on('scroll', checkScroll);
$(window).on('resize', checkScroll);
$(window).resize();

for (var pic in picMap) {
    $('#welcome').append($('<div>', {
        class: 'background col-xs-7',
        'data-section': pic,
        css: {
            'background-image': 'url(images/backgrounds/AJ-engagement-' + picMap[pic] + '.jpg)'
        }
    }));
}

$('#welcome .background[data-section="countdown"]').addClass('view').css('display', 'block');

// secret tiger pic
var tigerO;
$('#story p:first-of-type').mousedown(function () {
    tigerO = setTimeout(function () {
        $('#our-story-pic')[0].src = 'images/sketches/save-the-date-tigers.jpg';
    }, 3000);
}).mouseup(function () {
    clearTimeout(tigerO);
});

// open Q&A
$('.tidbit-q').click(function () {
    $(this).next('.tidbit-a').animate({
        height: 'toggle'
    }, 250);
    $(this).toggleClass('open');
});


$('#wedding-menu a').click(function (evt) {
    if (this.hash !== '') {
        evt.preventDefault();
        var hash = this.hash;
        $('body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () { });
    }
});

console.log('*~ WebSeitz 2017 ~*');