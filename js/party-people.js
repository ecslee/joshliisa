// insert party people
var bridesmaids = {
    amalia: {
        name: 'Amalia Lee',
        title: 'MoH',//'Maid of honor',
        label: 'Medium sister',
        img: 'amalia.jpeg',
        story: 'Amalia is Aliisa\'s medium-sister. Everyday, she is good at singing, drawing cute tiny beavers, and doing science. Years ago, Aliisa and Amalia signed a contract that says they can never be mad at each other for more than five seconds.'
    },
    annika: {
        name: 'Annika Lee',
        title: 'Bridesmaid',
        label: 'Big sister',
        img: 'annika.jpeg',
        story: 'Annika is Aliisa\'s little big sister. She is amazing at drawing, speaking Japanese, and having information about everything. Annika is in charge of sending Aliisa art inspiration, interesting news, and pictures of other people\'s dogs.'
    },
    avelina: {
        name: 'Avelina Lee',
        title: 'Bridesmaid',
        label: 'Little sister',
        img: 'avi.jpeg',
        story: 'Avelina (or Avi) is Aliisa\'s littlest sister. She is a world-class baker, hair-expert, linguist, and baby boss. Avi\'s love for Aliisa -- expressed by giving her food and cuddles -- is only surpassed by Avi\'s love for her cat, Yupi.'
    },
    emily: {
        name: 'Emily Lee',
        title: 'Bridesmaid',
        label: 'Sister-in-law, the first',
        img: 'emily.JPG',
        story: 'Aliisa got a new sister when Emily married Anders in 2015! Emily is a coder, photographer, and perfect blend of creativity and organization. Emily is also a fun lifeline of sanity and Pinterest ideas when Aliisa desperately texts her for life help.'
    },
    alissa: {
        name: 'Alissa Hopper',
        title: 'Bridesmaid',
        label: 'Sister-in-love',
        img: 'alissa.jpg',
        story: 'Alissa is the sister Aliisa found at college! Alissa is a beautiful singer, a dog-whisperer, baby-whisperer. Aliisa and Alissa have oddly similar mannerisms and names, and we are bonded for life because of it.'
    },
    miriam: {
        name: 'Miriam Black',
        title: 'Bridesmaid',
        label: 'Sister-in-law-to-be',
        img: 'miriam.jpg',
        story: 'Miriam is basically Aliisa’s sister already. She Neuroscience, mice brains, crafts, Ellie. Mir-mom'
    },
    naomi: {
        name: 'Naomi Boyce',
        title: 'Bridesmaid',
        label: 'Sister-in-law-to-be',
        img: 'naomi.jpg',
        story: 'Naomi social worker, sporty, James,'
    }
};

var groomsmen = {
    daniel: {
        name: 'Daniel Hwang',
        title: 'Best man',
        label: 'Basically a brother',
        img: 'daniel.jpeg',
        story: '...'
    },
    andrew: {
        name: 'Andrew Black',
        title: 'Groomsman',
        label: 'Brother-in-law',
        img: 'andrew.jpg',
        story: '...'
    },
    billy: {
        name: 'Billy Boyce',
        title: 'Groomsman',
        label: 'Brother-in-law',
        img: 'billy.jpeg',
        story: '...'
    },
    robby: {
        name: 'Robby Siliciano',
        title: 'Groomsman',
        label: 'Friend',
        img: 'robby.JPG',
        story: '...'
    },
    josh: {
        name: 'Josh Hamilton',
        title: 'Groomsman',
        label: 'Friend, fellow Josh',
        img: 'josh.jpg',
        story: '...'
    },
    aleksi: {
        name: 'Aleksi Lee',
        title: 'Groomsman',
        label: 'Brother-in-law-to-be',
        img: 'aleksi.JPG',
        story: '...'
    },
    anders: {
        name: 'Anders Lee',
        title: 'Groomsman',
        label: 'Brother-in-law-to-be',
        img: 'anders.JPG',
        story: '...'
    }
};

var parties = {
    bridesmaids: bridesmaids,
    groomsmen: groomsmen
};
for (var party in parties) {
    for (var name in parties[party]) {
        var person = parties[party][name];

        var $person = $('<div/>', {
            'id': 'party-' + name,
            'class': 'party-person col-xs-4'
        }).data('name', person.name)
          .data('label', person.label)
          .data('story', person.story);

        var $face = $('<div/>', {
            'class': 'img-wrapper'
        }).append($('<img/>', {
            'class': 'party-face',
            'src': 'images/wedding-party/' + party + '/' + person.img
        }));
        $person.append($face);

        $person.append($('<p/>', {
            'class': 'party-name',
            'text': name.toUpperCase()
        }));
        // <p class="party-name">AMALIA<span class="party-last-name"> LEE</span></p><p class="party-title">MAID OF HONOR</p>

        $person.append($('<p/>', {
            'class': 'party-title',
            'text': person.title.toUpperCase()
        }));

        $('.party-rows').append($person);
    }
}

// clicking bridal party
$('.party-rows .party-person').click(function () {
    $('.party-rows .party-person').removeClass('active');
    $(this).addClass('active');
    $('#party-selected img')[0].src = $(this).find('img')[0].src;
    $('#party-selected .party-name').text($(this).data('name').toUpperCase());
    $('#party-selected .party-title').text($(this).data('label').toUpperCase());
    $('#party-selected .party-story').text($(this).data('story'));
});

// start with Amalia
$('#party-amalia').click();
