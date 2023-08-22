$(function(){

    //menu
    $(".submenu").slideUp(0);
    $("nav > ul > li > a").mouseenter(function(){
        $(this).find("+ .submenu").stop().slideDown('slow');
        $(this).parent().mouseleave(function(){
            $(this).find(".submenu").stop().slideUp('slow');
        })
    })

    //slide
    let index = 0;
    setInterval(function(){
        if(index < 2){
            $("#areaB > div").animate({
                marginLeft: '-=800px'
            },'slow')
            index++;
        }else{
            $("#areaB > div").animate({
                marginLeft: '0px'
            },'fast')
            index = 0;
        }
    }, 3000)

    //pop
    $("#areaNotice > div > p:first-child").click(function(){
        $("#popWrap").css('display','block');
    })
    $("#popWrap > button").click(function(){
        $("#popWrap").css('display', 'none');
    })
    
})