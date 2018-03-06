$(document).ready(function(){
    $("li a").hover(
        function(){$(this).css("background-color", "rgba(241, 215, 186, 0.2)");}, 
        function(){$(this).css("background-color", "transparent");}
    );
    $("li a").click(
        function(){$(this).css("color", "#7d4627");}
    );
});
