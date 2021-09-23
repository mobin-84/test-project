


var owlObject = {

    rtl : true,
    margin : 20,
    dots : false,
    responsive : {
        0 : {
            items : 1,
        } ,
        600 : {
            items : 3,
        } ,
        1000 : {
            items : 4,
        } ,
        1200 : {
            items : 6,
        }
    }

}











// //////////////////////////////


var sliderSS = $('.special-suggest')

sliderSS.owlCarousel({

    rtl : true ,
    items : 1 ,
    loop : true ,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true

})


// /////////////////////////////////////////



var specialSuggest = $('#product-special-suggest')

specialSuggest.owlCarousel(owlObject)




// /////////////////////////////////




var bestSellers = $('#best-sellers')

bestSellers.owlCarousel(owlObject)

$('#best-sellers__prev').click(function() {
    bestSellers.trigger('next.owl.carousel');
});

$('#best-sellers__next').click(function() {
    bestSellers.trigger('prev.owl.carousel');
});


//////////////////////////////


var NewProduct = $('#new-product')

NewProduct.owlCarousel(owlObject)

$('#new-product__prev').click(function() {
    NewProduct.trigger('next.owl.carousel');
});

$('#new-product__next').click(function() {
    NewProduct.trigger('prev.owl.carousel');
});







