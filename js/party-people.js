// insert party people
var bridesmaids = {
    amalia: {
        img: 'amalia'
    },
    annika: {
        img: 'annika'
    },
    avelina: {
        img: 'avi'
    },
    emily: {
        img: 'emily'
    },
    alissa: {
        img: 'alissa'
    },
    miriam: {
        img: 'miriam'
    },
    naomi: {
        img: 'naomi'
    }
};

var groomsmen = {
    daniel: {
        img: 'daniel'
    },
    andrew: {
        img: 'andrew'
    },
    billy: {
        img: 'billy'
    },
    robby: {
        img: 'robby'
    },
    ham: {
        img: 'ham'
    },
    aleksi: {
        img: 'aleksi'
    },
    anders: {
        img: 'anders'
    }
};

var parties = {
    'bride-tribe': bridesmaids,
    'groom-crew': groomsmen
};
var styles = '';
for (var party in parties) {
    for (var name in parties[party]) {
        var person = parties[party][name];

        var $person = $('<div/>', {
            'id': 'party-' + name,
            'class': 'party-person col-xs-3',
        }).data('who', name);

        var imgPath = 'images/wedding-party/' + party + '/' + person.img + '.jpg';
        var $face = $('<div/>', {
            'class': 'img-wrapper'
        }).append($('<img/>', {
            'class': 'party-face',
            'src': imgPath
        }));
        
        $person.append($face);

        $person.append($('<p/>', {
            'class': 'party-name'
        }));

        $person.append($('<p/>', {
            'class': 'party-title'
        }));

        $('.party-rows').append($person);
    }
}

// clicking bridal party
$('.party-rows .party-person').click(function () {
    $('.party-rows .party-person').removeClass('active');
    $(this).addClass('active');
    $('#party-selected').attr('data-who', $(this).data('who'));
});

// start with Amalia
$('#party-amalia').click();
