const scrollTo = (element) => {
    $('html, body').animate({ scrollTop: element.offset().top - $('.filler').height() }, 500);
    // console.log(element.height);
}

$('.links li .home').click(() => { scrollTo($('.section.home')); });
$('.links li .importance-intersectionality').click(() => { scrollTo($('.section.importance-intersectionality')); });
$('.links li .tips').click(() => { scrollTo($('.section.tips')); });
$('.links li .works').click(() => { scrollTo($('.section.works')); });