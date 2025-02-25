$( document ).ready(function() {
    console.log( "don't click on the copyright symbol" );

    $('#secretTV').hover(

        function(){
            $(this).css("background-color", "red");
            alert('Watch Andor if you have not');
            }
    ); 
    
});