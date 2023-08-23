$(function(){
    //menu
    $(".submenu").slideUp(0);
    $("#navBack").slideUp(0);
    $("nav").mouseenter(function(){
        $('.submenu').stop().slideDown('slow');
        $("#navBack").stop().slideDown('slow');
        $(this).mouseleave(function(){
            $('.submenu').stop().slideUp("slow");
            $("#navBack").stop().slideUp('slow');
        })
    })

    //slide
    let index = 0;
    setInterval(function(){
        if(index < 2){
            $("#areaB > div").animate({
                marginTop : '-=300px'
            },'slow')
            index++;
        }else{
            $("#areaB > div").animate({
                marginTop : '0px'
            },'slow')
            index = 0;
        }
    },2000)

    //pop
    $("#notice > div > p:first-child").click(function(){
        $("#popwrap").css("display","block");
    })
    $("#popwrap > button").click(function(){
        $("#popwrap").css("display","none");
    })
})