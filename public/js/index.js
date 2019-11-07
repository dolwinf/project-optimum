$(".registerbtn").on("click", function(data) {
  var userData = {
    email: $(".email").val(),
    password: $(".password").val(),
    passwordr: $(".passwordr").val()
  };
  $.post("/api/users", userData).then(function(data) {
    console.log(data);
  });
});

$(".loginbtn").on("click", function(data) {
  var loginData = {
    email: $(".email").val(),
    password: $(".password").val()
  };
  console.log(loginData);
  $.post("/login", loginData).then(function(data) {
    console.log(data);
  });
});
