function reset(){
    document.body.style.backgroundColor="white"
}

$(document).ready(function(){
    $("#red").click(function(){
        $("body").css("background-color", "red",);
    });
    $("#blue").click(function(){
        $("body").css("background-color", "blue");
    });
    $("#green").click(function(){
        $("body").css("background-color", "green");
    });
    $("#yellow").click(function(){
        $("body").css("background-color", "yellow");
    });
  });