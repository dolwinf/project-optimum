$(".registerbtn").on("click", function(e) {
  e.preventDefault();
  var userData = {
    email: $(".email").val(),
    password: $(".password").val(),
    passwordr: $(".passwordr").val()
  };
  $.post("/api/register", userData).then(function(data) {
    console.log(data);
    window.location.href = "/landing";
  });
});

$(".loginbtn").on("click", function(e) {
  e.preventDefault();
  var loginData = {
    email: $(".email").val(),
    password: $(".password").val()
  };
  $.ajax({
    method: "POST",
    url: "/api/login",
    data: loginData
  }).then(function(data) {
    console.log(data.token);
    window.location.href = "/landing";
  });
});
