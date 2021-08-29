

///////////////////////////////////project 1








let starter = document.querySelector('.starter')
let textnum = document.querySelector('#time');
let timeselect = document.querySelector('#text-button');
let errorTimer = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100')
let  timerMessage = document.querySelector('.message')
let timernum = document.querySelector('.c100 > span')
let timerloading = document.querySelector('.loading')
let timersuss = document.querySelector('.suss')

timeselect.addEventListener('click' , function(e) {
    let second = parseInt(textnum.value)

    if(isNaN(second)) {
        errorTimer.textContent = 'زمان را به درستی وارد کنید';
        errorTimer.classList.add('active');
        timersuss.classList.remove('active')
        // timerCircle.classList.remove('active')
        // timerMessage.classList.remove('active')
        //اگه اشتباه گفت باز پاک کن
        return;
    }
    errorTimer.classList.remove('active');

    // timerCircle.style.display = "block"
    // timerMessage.style.display = "block"

    //////یا 

    starter.classList.remove('active')
    timerCircle.classList.add('active');
    timerloading.classList.add('active');


    //در این حالت کلاسی با عنوان اکتیو ایجاد و دیسپلی بلاک براش میزاریم

    timernum.textContent = second;

    let originalsecond = second
    let lastpercent = 'p100'
    let timerid = setInterval(() => {

        if(lastpercent) timerCircle.classList.remove(lastpercent)

        if(second <= 0){
            clearInterval(timerid)
            timersuss.classList.add('active');
            timerloading.classList.remove('active');
            textnum.value = '' ;
            timerCircle.classList.remove('active');
            return;
        }  

        second -= 1;
        timernum.textContent = second;

 
        let percent = Math.abs(Math.floor(((((originalsecond - second) / originalsecond ) * 100))-100))
       
        lastpercent = `p${percent}`;

        timerCircle.classList.add(`p${percent}`)

    }, 1000);
    timersuss.classList.remove('active')

})









///////////////////////////////////project 2













let player = document.querySelector('.player')
let media = player.querySelector('video')
let control = document.querySelector('.control')
let controlbtn = document.querySelector('.control-btn')

let play = document.querySelector('.play')
let bwd = document.querySelector('.backward')
let fwd = document.querySelector('.forward')

let currentTime = document.querySelector('.currentTime')
let videotime = document.querySelector('.videoTime')

let timebar = document.querySelector('.controls__progressbar-current')

let volumeIcon = document.querySelector('.volume .icon')
let volumemute = document.querySelector('.volumemute')
let volumeBar = document.querySelector('.volume__progress')
let volumeinput = volumeBar.querySelector('.volume__progress input')

let fullscreen = document.querySelector('.fullscreen .fa')


fullscreen.addEventListener('click' , function() {



    if(!document.fullscreenElement) {
        if(player.requestFullscreen) {
            player.requestFullscreen()
        } else if(player.mozFullscreen) {
            player.Fullscreen()
        } else if (player.msFullscreen) {
            player.Fullscreen()
        } else if (player.webkitFullscreen) {
            player.webkitFullscreen()
        }
        media.classList.add('fullwidth')
        control.classList.add('fullwidth')
    } else {
        if(document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen()
        } else if (document.msCancelFullscreen) {
            document.msCancelFullscreen()
        } else if (document.webkitCancelFullscreen) {
            document.webkitCancelFullscreen()
        }
        media.classList.remove('fullwidth')
        control.classList.remove('fullwidth')
    }



})






media.volume = .5;

volumeinput.addEventListener('input' , function() {
    media.volume = this.value / 100;
    this.style = `background : linear-gradient(90deg, yellow , ${this.value}%, #e1e1e1 50%);`
})

volumemute.addEventListener('click' , function() {
    media.volume = 0;
})


volumeIcon.addEventListener('click' , function() {
    media.volume = volumeinput.value / 100;
    volumeBar.classList.toggle('active')
})


media.addEventListener('timeupdate' , function() {

    currentTime.textContent = getTime(media.currentTime)

    let timesad = (media.currentTime / media.duration) * 100;
    timebar.style = `background : linear-gradient(90deg, yellow ${timesad}%, #3d3d3d 0%);`;
    timebar.value = timesad;


})


timebar.addEventListener('input' , function() {
    media.currentTime = (this.value / 100) * media.duration ;
})


play.addEventListener('click' , function() {

    videotime.textContent = getTime(media.duration)

    if(media.paused) {
        togglePlayIcon()
        media.play()
    } else {
        togglePlayIcon()
        media.pause()
    }   

})

bwd.addEventListener('click' , function() {
    media.currentTime = media.currentTime - 5;
})

fwd.addEventListener('click' , function() {
    media.currentTime = media.currentTime + 10;
})


function togglePlayIcon() {
    let playicon = document.querySelector('.play i')
    playicon.classList.toggle('fa-pause')
    playicon.classList.toggle('fa-play')
}


function getTime(time) {
    let min = Math.floor(time / 60) ;
    let sec = Math.floor(time - (min * 60)) ;

    let minval;
    let secval;

    if(min < 10) {
        minval = '0' + min ;
    } else {
        minval = min
    }
    if(sec < 10) {
        secval = '0' + sec ;
    } else {
        secval = sec ;
    }

    return currentTime.textContent = minval + ':' + secval ;

}












///////////////////////////////////project 3















let note = document.querySelector('.nowplaying')
let keys = document.querySelectorAll('.key')
let hints = document.querySelectorAll('span.hints')

window.addEventListener('keydown' , function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`.audio-piano[data-key="${e.keyCode}"]`)

    if(! key) return;

    const keynote = key.getAttribute('data-note')
    
    key.classList.add('playing')
    note.innerHTML = keynote;
    audio.currentTime = 0;
    audio.play()

})

function removeTransition() {
    this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend' , removeTransition))

hints.forEach(function(elm , index){
    // elm.style = `transition-delay = ${index * 50}ms`
    elm.setAttribute('style' , `transition-delay : ${index * 50}ms`)
}) 













///////////////////////////////////project 4











let heroB = document.querySelector('.hero-body')
let hero = document.querySelector('.hero')
let heroT = hero.querySelector('.hero-text')
let walk = 100; //500px

hero.addEventListener('mousemove' , function(event) {
    let { offsetWidth : width , offsetHeight : height} = hero;
    let {offsetX : x , offsetY : y} = event;

    x += event.target.offsetLeft;
    y += event.target.offsetTop;

    let Xwalk = Math.round((x / width * walk) - (walk / 2))
    let Ywalk = Math.round((y / width * walk) - (walk / 2))

    heroT.style.textShadow = `
    
    ${Xwalk}px ${Ywalk}px 0 rgba(238 , 82 , 83 , .7),
    ${Xwalk * -1}px ${Ywalk}px 0 rgba(52 , 31 , 151 , .7),
    ${Ywalk}px ${Xwalk * -1}px 0 rgba(243 , 104 , 224 , .7),
    ${Ywalk * -1}px ${Xwalk}px 0 rgba( 254, 202 ,57 , .7)
    `


})











///////////////////////////////////project 5








let data = [
    { id : 1 , title : 'آیتم شماره 1' , text : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' } ,
    { id : 2 , title : 'آیتم شماره 2' , text : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' } ,
    { id : 3 , title : 'آیتم شماره 3' , text : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' } ,
    { id : 4 , title : 'آیتم شماره 4' , text : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' } ,
]

new draggable({
    elList : document.querySelector('#list'),
    list : data ,
    template : (item) => {
        return `

        <div class="list-item" id="${item.id}">
        <div class="list-head">
            <span class="head-id">${item.id}</span>
        </div>
        <div class="list-content">
            <span class="list-title">${item.title}</span>
            <p>${item.text}</p>
        </div>

        `
    },
    update : (list) => {
        // console.log('new list' ,list)
    }
})








///////////////////////////////////project 6










let items = document.querySelectorAll('.nav-ul li')

items.forEach((items) => {
    items.addEventListener('click' , function(e) {

        e.preventDefault(); // غیر فعال کردن انتثال به صفحه تگ a 

        document.querySelector('.nav-ul li.selected').classList.remove('selected');
        this.classList.add('selected');

        let databox = this.getAttribute('data-content')
        
        document.querySelector('.tab-content ul li.select-active').classList.remove('select-active')
        document.querySelector(`.tab-content ul li[data-content="${databox}"]`).classList.add('select-active')

    })
})













///////////////////////////////////project 7




