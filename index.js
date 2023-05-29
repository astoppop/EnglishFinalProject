const scrollTo = (element) => {
    $('html, body').animate({ scrollTop: element.offset().top - $('.filler').height() }, 500);
}

$('.links li .home').click(() => { scrollTo($('.section.home')); });
$('.links li .importance-intersectionality').click(() => { scrollTo($('.section.importance-intersectionality')); });
$('.links li .tips').click(() => { scrollTo($('.section.tips')); });
$('.links li .works').click(() => { scrollTo($('.section.works')); });

const quotes = [
    '"Stories are compasses and architecture; we navigate by them, we build our sanctuaries and our prisons out of them, and to be without a story is to be lost in the vastness of a world that spreads in all directions like arctic tundra or sea ice." -Rebecca Solnit',
    '"Stories are the most powerful delivery tool for information, more powerful and enduring than any other art form." -Richard Powers',
    '"We tell ourselves stories in order to live." -Joan Didion',
    '"The stories we tell literally make the world. If you want to change the world, you need to change your story." -Michael Margolis',
    '"The human mind is a story processor, not a logic processor." -Jonathon Haidt',
    '"Stories are the creative conversion of life itself into a more powerful, clearer, more meaningful experience." -Robert McKee',
    '"Stories are the currency of human contact." -Robert McKee',
    '"We tell stories to understand ourselves, others, and the world around us." -Rachel Naomi Remen',
    '"The universe is made of stories, not of atoms." -Muriel Rukeyser',
    '"The stories we live and tell ourselves shape our reality." -Brené Brown',
    '"The stories we tell about ourselves, our communities, and our world have the power to shape our shared future." -Christiana Figueres',
];

const updateMarquee = (marquee) => {
    if (!marquee.is(':hover')) {
        marquee.css({ left: marquee.offset().left - 3 });
        const first = marquee.children().first();
        if (first.offset().left + first.width() <= 0) {
            marquee.css({ left: marquee.offset().left + first.width() + 200 });
            first.appendTo(marquee);
        }
    }
    requestAnimationFrame(() => { updateMarquee(marquee) });
};

$('.quotes').each((i, element) => {
    let shuffled = quotes
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    let p = $('<p>');
    p.appendTo(element);
    for (let quote of shuffled) {
        let span = $('<span>');
        span.text(quote);
        span.appendTo(p);
    }
    requestAnimationFrame(() => { updateMarquee(p) });
});

