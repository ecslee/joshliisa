// insert party people
var bridesmaids = {
    amalia: {
        name: 'Amalia Lee',
        title: 'MoH',//'Maid of honor',
        label: 'Medium sister',
        img: 'amalia',
        img2: 'amalia2',
        story: 'Amalia is Aliisa\'s medium-sister. Everyday, she is good at singing, drawing cute tiny beavers, and doing science. Years ago, Aliisa and Amalia signed a contract that says they can never be mad at each other for more than five seconds.'
     },
     annika: {
         name: 'Annika Lee',
         title: 'Bridesmaid',
         label: 'Big sister',
         img: 'annika',
         story: 'Annika is Aliisa\'s little big sister. She is amazing at drawing, speaking Japanese, and having information about everything. Annika is in charge of sending Aliisa art inspiration, interesting news, and pictures of other people\'s dogs.'
     },
     avelina: {
         name: 'Avelina Lee',
         title: 'Bridesmaid',
         label: 'Little sister',
         img: 'avi',
         img2: 'avi-yupi',
         story: 'Avelina (or Avi) is Aliisa\'s littlest sister. She is a world-class baker, hair-expert, linguist, and baby boss. Avi\'s love for Aliisa -- expressed by giving her food and cuddles -- is only surpassed by Avi\'s love for her cat, Yupi.'
     },
     emily: {
         name: 'Emily Lee',
         title: 'Bridesmaid',
         label: 'Sister-in-law, the first',
         img: 'emily',
         story: 'Aliisa got a new sister when Emily married Anders in 2015! Emily is a coder, photographer, and perfect blend of creativity and organization. Emily is also a fun lifeline of sanity and Pinterest ideas when Aliisa desperately texts her for life help.'
     },
     alissa: {
         name: 'Alissa Hopper',
         title: 'Bridesmaid',
         label: 'Sister-in-love',
         img: 'alissa',
         story: 'Alissa is the sister Aliisa found at college! Alissa is a beautiful singer, a dog-whisperer, baby-whisperer. Aliisa and Alissa have oddly similar mannerisms and names, and we are bonded for life because of it.'
     },
     miriam: {
         name: 'Miriam Black',
         title: 'Bridesmaid',
         label: 'Sister-in-law-to-be',
         img: 'miriam',
         story: 'Miriam is basically Aliisa’s sister already. She Neuroscience, mice brains, crafts, Ellie. Mir-mom'
     },
     naomi: {
         name: 'Naomi Boyce',
         title: 'Bridesmaid',
         label: 'Sister-in-law-to-be',
         img: 'naomi',
         story: 'Naomi social worker, sporty, James,'
     }
 };
 
 var groomsmen = {
     daniel: {
         name: 'Daniel Hwang',
         title: 'Best man',
         label: 'Basically a brother',
         img: 'daniel',
         story: '...'
     },
     andrew: {
         name: 'Andrew Black',
         title: 'Groomsman',
         label: 'Brother-in-law',
         img: 'andrew',
         story: '...'
     },
     billy: {
         name: 'Billy Boyce',
         title: 'Groomsman',
         label: 'Brother-in-law',
         img: 'billy',
         story: '...'
     },
     robby: {
         name: 'Robby Siliciano',
         title: 'Groomsman',
         label: 'Friend',
         img: 'robby',
         story: '...'
     },
     ham: {
         name: 'Josh Hamilton',
         title: 'Groomsman',
         label: 'Friend, fellow Josh',
         img: 'ham',
         img2: 'ham2',
         story: '...'
     },
     aleksi: {
         name: 'Aleksi Lee',
         title: 'Groomsman',
         label: 'Brother-in-law-to-be',
         img: 'aleksi',
         story: '...'
     },
     anders: {
         name: 'Anders Lee',
         title: 'Groomsman',
         label: 'Brother-in-law-to-be',
         img: 'anders',
         story: '...'
     }
 };


var parties = {
    'bride-tribe': bridesmaids,
    'groom-crew': groomsmen
};

for (var party in parties) {
    for (var name in parties[party]) {
        var person = parties[party][name];

        var $person = $('<div/>', {
            'id': 'party-' + name,
            'class': 'party-person',
        }).data('who', name);

        var imgPath = 'images/wedding-party/' + party + '/' + person.img + '.jpg';
        var $face = $('<div/>', {
            class: 'img-wrapper'
        }).append($('<img/>', {
            class: 'party-face',
            src: imgPath
        }));
        
        $person.append($face);

        $person.append($('<p/>', {
            class: 'party-name',
            text: person.name
        }));

        $person.append($('<p/>', {
            class: 'party-title',
            text: person.title
        }));

        $('.party-rows #' + party).append($person);
    }
}

// clicking bridal party
$('.party-rows .party-person').click(function () {
    $('.party-rows .party-person').removeClass('active');
    $(this).addClass('active');
    $('#party-selected').attr('data-who', $(this).data('who'));
    
    var person = bridesmaids[$(this).data('who')] ? bridesmaids[$(this).data('who')] : groomsmen[$(this).data('who')];
    $('#party-selected .party-name').html(person.name);
    $('#party-selected .party-title').html(person.label);
    $('#party-selected .party-story').html(person.story);
});

// start with Amalia
$('#party-amalia').click();
