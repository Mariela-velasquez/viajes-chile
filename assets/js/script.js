//toltip//enviar a correo
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
    $("#success-alert").hide();
    $("#enviarCorreo").click(function showAlert() {
      $("#success-alert")
        .fadeTo(2000, 500)
        .slideUp(500, function () {
          $("#success-alert").slideUp(500);
        });
    });
  });

// titulos en rojos (quienes somos)
$( document ).ready( function (){
    $( "h5" ).dblclick( function (){
    $( this ).css({
    "color" : "red" ,
    });
    });
    });