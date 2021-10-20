$(document).ready(function() {
  $("form#person1").submit(function(event) {
    event.preventDefault();
  const name = $("#name").val();
  const address = $("#address").val();
  const email = $("#email").val();
  const phone = $("#phone").val();

  $("#entries").text("This is your new contact that you just added: " + "name: " + name  + "Address : " + address + "Email: " + email + "Phone number: " + phone);
  });
});