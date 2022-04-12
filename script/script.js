$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
        if(this.scrollY <= 20){
            $('.home-content').addClass("reveal")
        }else{
            $('.home-content').removeClass("reveal")
        }
        if(this.scrollY > 20){
            $('.about-content').addClass("reveal")
        }else{
            $('.about-content').removeClass("reveal")
        }
        if(this.scrollY > 900){
            $('.hard-skills-content').addClass("reveal")
        }else{
            $('.hard-skills-content').removeClass("reveal")
        }
    
    })

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })


    var typed = new Typed(".typing", {
        strings:["Web Developer", "Kotlin Android Developer", "Designer", "Help Desk Analyst "],
        typedSpeed:50,
        backSpeed:100,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings:["Web Developer", "Kotlin Android Developer", "Designer", "Help Desk Analyst"],
        typedSpeed:50,
        backSpeed:100,
        loop:true
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive:{
            0: {
                items: 1,
                nav:false
            },
            600: {
                items: 2,
                nav:false
            },
            1000: {
                items: 3,
                nav:false
            }
        }
    });

    
})

