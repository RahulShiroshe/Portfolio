$(document).ready(function(){
    $('#menu').click(function(){
        // console.log("click")
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-time')
        $('header').removeClass('toggle')

        if($(window).scrollTop() > 0){
            $('.top img').show();
        }else{
            $('.top img').hide(); 
        }
    });

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();
        console.log("click a href")

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear');
    })
})

document.getElementById("myform").addEventListener("submit", function(e){
    e.preventDefault()

    document.getElementById("f-root").innerHTML = `<div style="text-transform: none;"><div>Your form is submitted succesfully</div><div>Thank you</div></div>`;
} )
