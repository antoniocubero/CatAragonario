$(document).ready(function(){
    $("#screen_change").click(function(){
        $("#list_desp").toggleClass("list_opened")
    })

    $("#burguer").click(function(){
        $("#burguer").toggleClass("clickd")
    })

    $("#main_btn1").click(function(){
        $("#main_btn2").removeClass("clickd")
        $("#main_btn3").removeClass("clickd")
        $("#main_btn1").addClass("clickd")
    })
    $("#main_btn2").click(function(){
        $("#main_btn1").removeClass("clickd")
        $("#main_btn3").removeClass("clickd")
        $("#main_btn2").addClass("clickd")
    })
    $("#main_btn3").click(function(){
        $("#main_btn1").removeClass("clickd")
        $("#main_btn2").removeClass("clickd")
        $("#main_btn3").addClass("clickd")
    })
})