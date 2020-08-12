$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const reasonInput = $("input#reason").val();
    const dateInput = $("input#date").val();
    const timeInput = $("input#time").val();
    
    $(".name").text(nameInput);
    $(".reason").text(reasonInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);
  

    $("#success").show();

    event.preventDefault();
  });
});