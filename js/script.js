


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



//////////////////////////login


$('#open-login-box').click(function() {
    // $('.login').css('display' , 'flex')
    $('.login').addClass('show-login');
    $('body').addClass('no-scroll')
});

$('#login-close').click(function(){
    $('.login').removeClass('show-login')
    $('body').removeClass('no-scroll')
});

$('.login').click(function(e){
    if(e.target !== this)
    return;

    $('.login').removeClass('show-login')
    $('body').removeClass('no-scroll')
});


// //////////////////////////sign


$('#open-sign-box').click(function() {
    // $('.login').css('display' , 'flex')
    $('.sign').addClass('show-sign');
    $('body').addClass('no-scroll')
});

$('#sign-close').click(function(){
    $('.sign').removeClass('show-sign')
    $('body').removeClass('no-scroll')
});

$('.sign').click(function(e){
    if(e.target !== this)
    return;

    $('.sign').removeClass('show-sign')
    $('body').removeClass('no-scroll')
});


// ///////////////////  drop menu 

$('.drop-a').on('click' , function(event){
    event.preventDefault();
    var selected = $(this);
    selected.next('ul').removeClass('is-hidden')
                        .end()
                        .parent('.has-children')
                        .parent('ul')
                        .addClass('move-out');

});

$('.go-back').on('click' , function(event){
    event.preventDefault();
    var selected = $(this);
    selected.parent('ul').addClass('is-hidden')
                        .parent('.has-children')
                        .parent('ul')
                        .removeClass('move-out');
});


$('.drop-content').menuAim({
    activate : function(row) {
      $(row).children().addClass('is-active');
    },
    deactivate: function(row) {
      $(row).children().removeClass('is-active');
    },
    exitMenu:function() {
      $('.drop-content').find('.is-active').removeClass('is-active');
      return true;
    }
  })


let menuBtn = document.querySelector('.menu-item > a')
let menuItem = document.querySelector('.item-menu-drop-down')

menuBtn.addEventListener('click' , function() {
     if(menuItem.classList.contains('hidden-menu')){
        menuItem.classList.remove('hidden-menu')
     }else{
         menuItem.classList.add('hidden-menu')
     }
})


// ///////////////// show pass


let showPass=document.querySelector("#show");
let pass=document.querySelector("#pass");
let passRepeat=document.querySelector("#pass-repeat")
showPass.addEventListener('change',function(){
  if(this.checked){
    pass.type="text";
    passRepeat.type="text";
  }else{
   pass.type="password";
   passRepeat.type="password";
  }
});


let signBtn = document.querySelector(".sign-btn")

signBtn.addEventListener('click' , function(e){
    e.preventDefault()
    let passErr=document.querySelector(".curent-pass-repeat")
    if( pass.value === passRepeat.value ){
        passErr.style.display = "none"
    } else {
        passErr.style.display = "block"
    }
    let numberSign = document.querySelector('.number-sign')
    let curentNumber = document.querySelector('.curent-number')

    if(Math(numberSign.length) === '10') {
        curentNumber.style.display = "none"
    } else {
        curentNumber.style.display = "block"
    }
})







