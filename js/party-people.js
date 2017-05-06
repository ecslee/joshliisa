// insert party people
var bridesmaids = {
    amalia: {
        name: 'Amalia Lee',
        title: 'MoH',//'Maid of honor',
        label: 'Aliisa\'s medium sister',
        img: 'amalia',
        img2: 'amalia2',
        story: 'Amalia is my medium-sister. I really admire how wonderful she is at singing, drawing cute tiny beavers, doing science, and just being such a charming and thoughtful lady. Years ago, we signed a contract that says they can never be mad at each other for more than five seconds, and we\'ve kept it!'
     },
     annika: {
         name: 'Annika Lee',
         title: 'Bridesmaid',
         label: 'Aliisa\'s big sister',
         img: 'annika',
         story: 'Annika is my little big sister. She is amazing at drawing, speaking Japanese, supporting people around her, and generally having information about everything. If I didn\'t have Annika to send me art inspiration, news, life advice, and pictures of other people\'s dogs, I don\'t know what my life would look like!'
     },
     avelina: {
         name: 'Avelina Lee',
         title: 'Bridesmaid',
         label: 'Aliisa\'s little sister',
         img: 'avi',
         img2: 'avi-yupi',
         story: 'Avelina (or Avi) is my littlest sister. She is a world-class baker, hair-expert, linguist, and a graceful, responsible leader wherever she goes. Avi\'s love for me -- expressed by her giving food and cuddles -- is only surpassed by her love for her cat, Yupi. Yupi is a pretty great cat, though.'
     },
     emily: {
         name: 'Emily Lee',
         title: 'Bridesmaid',
         label: 'Aliisa\'s sister-in-law, the first',
         img: 'emily',
         img2: 'emily2',
         story: 'I got a new sister when Emily married my brother Anders in 2015! Emily is a coder, photographer, gardener, and the most perfect blend of creativity, kindness, and organization you\'ve ever met. Emily is my trusted lifeline of reason and encouraging Pinterest ideas when I desperately text her for life help.'
     },
     alissa: {
         name: 'Alissa Hopper',
         title: 'Bridesmaid',
         label: 'Aliisa\'s sister, in love',
         img: 'alissa',
         story: 'Alissa is the beloved sister I found at college! She is a singer, baby-whisperer, ever-faithful friend, and a scholar of speech-language pathology, which is as impressive as it sounds. As many have pointed out, we have oddly similar names and mannerisms. We are bonded for life because of it!'
     },
     miriam: {
         name: 'Miriam Bocarsly-Black',
         title: 'Bridesmaid',
         label: 'Aliisa\'s sister-in-law-to-be',
         img: 'miriam',
         img2: 'miriam2',
         story: 'Miriam is almost my sister-in-law! She can be found prodding into rat brains in a lab, making cool arts and crafts, or going on colorful adventures with her adorable daughter Ellie. Also known as "Mir-Mom" by her siblings, Miriam\'s loving instincts have welcomed me in too, and I\'m so grateful!'
     },
     naomi: {
         name: 'Naomi Bocarsly-Boyce',
         title: 'Bridesmaid',
         label: 'Aliisa\'s sister-in-law-to-be',
         img: 'naomi2',
         img2: 'naomi',
         story: 'Naomi is also so close to being my sister-in-law! This sporty lady is a social worker, one of the best and most caring conversationalists in the world, and a great mother to sweet baby James. To me, she has been a constant source of support, fun, and friendly older-sister-like suggestions of how to fix Josh.'
     },
    ellie: {
         name: 'Ellie Black',
         title: 'Flower girl',
         label: 'Flower girl and Aliisa\'s niece-to-be',
         img: 'ellie',
         img2: 'ellie2',
         story: 'Ellie is my niece-to-be, hooray! She is a huge fan of Abby Cadabby, drawing, and talking in a tiny and assertive voice. She began calling me "Aunt Aliisa" long before Josh and I were engaged, so I guess Ellie was really the first one to see this wedding coming.'
     }
 };
 
 var groomsmen = {
     daniel: {
         name: 'Daniel Hwang',
         title: 'Best man',
         label: 'Josh\'s friend and former roomie',
         img: 'daniel',
         story: 'Dan and I grew close through shared tiny dorm rooms in the last two years of college. He is a great roommate, amazing friend, and a talented musician. Dan and his wife Katherine (who will be playing violin in our wedding) live in Montana where they spend their time teaching children, making music, and looking at animals.'
     },
     andrew: {
         name: 'Andrew Black',
         title: 'Groomsman',
         label: 'Josh\'s brother-in-law',
         img: 'andrew',
         img2: 'andrew3',
         story: 'Andrew married into my family six years ago, and has been a brother ever since. He works in D.C. doing science advocacy and spends his free time making animal noises at his daughter Ellie.'
     },
     billy: {
         name: 'Billy Boyce',
         title: 'Groomsman',
         label: 'Josh\'s brother-in-law',
         img: 'billy2',
         img2: 'billy',
         story: 'When Naomi married Billy in 2012, I got a second brother. He coaches crew at Harvard (which we forgive him for) and teaches James, his one-year-old son, how to talk to girl babies.'
     },
     ham: {
         name: 'Josh Hamilton',
         title: 'Groomsman',
         label: 'Josh\'s friend and fellow Josh',
         img: 'ham',
         img2: 'ham2',
         story: 'Josh and I met in college and quickly bonded over our shared name. Josh is a medical student, and he and I have a standing wager that if I finish graduate school before him he has to give me free medical advice for life. If he graduates first, I have to give him materials science advice.'
     },
     robby: {
         name: 'Robby Siliciano',
         title: 'Groomsman',
         label: 'Josh\'s friend',
         img: 'robby',
         story: 'I met Robby Junior year of college, where we spent a lot of time discussing superhero movies and questionable TV shows. Robby studies economics at Harvard now, and would like everyone to know that that does not make him a scientist.'
     },
     aleksi: {
         name: 'Aleksi Lee',
         title: 'Groomsman',
         label: 'Josh\'s brother-in-law-to-be',
         img: 'aleksi',
         story: 'Aleksi is soon to be my brother-in-law. He is an mechanical engineer who also enjoys trekking the great outdoors, competing in judo competitions, doing crossfit, and telling people he does crossfit.'
     },
     anders: {
         name: 'Anders Lee',
         title: 'Groomsman',
         label: 'Josh\'s brother-in-law-to-be',
         img: 'anders',
         img2: 'anders2',
         story: 'Anders is also soon to be my brother-in-law. When he\'s not at work being an electrical engineer, he enjoys playing guitar, hanging out with his wife Emily, cooking, and taking snapchats of his food.'
     },
     james: {
         name: 'James Boyce',
         title: 'Ring bearer',
         label: 'Ring bearer and Josh\'s nephew',
         img: 'james',
         img2: 'james2',
         story: 'James is my 1-year-old nephew, Naomi and Billy\'s son. He is into eating, sleeping, and saying "hi." He is currently in an intensive training program learning to walk so that he can walk down the aisle on June 25th.'
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
            class: 'party-face'
        });
        
        $person.append($face);

        $person.append($('<p/>', {
            class: 'party-name',
            text: person.name
        }));

        $person.append($('<p/>', {
            class: 'party-title',
            text: person.title
        }));

        $('.party-rows .' + party).append($person);
    }
}

// clicking bridal party
function switchProfile (evt) {
    var isBride = evt.data.isBride;
    $('.party-rows .' + (isBride ? 'bride-tribe' : 'groom-crew') + ' .party-person').removeClass('active');
    $(this).addClass('active');
    $('.party-selected-' + (isBride ? 'bride' : 'groom')).attr('data-who', $(this).data('who'));
    
    var person = isBride ? bridesmaids[$(this).data('who')] : groomsmen[$(this).data('who')];
    $('.party-selected-' + (isBride ? 'bride' : 'groom') + ' .party-name').html(person.name);
    $('.party-selected-' + (isBride ? 'bride' : 'groom') + ' .party-title').html(person.label);
    $('.party-selected-' + (isBride ? 'bride' : 'groom') + ' .party-story').html(person.story);
}

$('.party-rows .bride-tribe .party-person').click({ isBride: true }, switchProfile);
$('.party-rows .groom-crew .party-person').click({ isBride: false}, switchProfile);

// "hover" main profile pic on touch device
$('.party-selected .party-face').on('touchstart', function (evt) {
    $(this).addClass('hover');
    evt.preventDefault();
}).on('touchend', function (evt) {
    $(this).removeClass('hover');
    evt.preventDefault();
});

// start with Amalia
$('#party-amalia').click();

// and Daniel
$('#party-daniel').click();
