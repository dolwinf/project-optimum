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
    localStorage.setItem("x-auth-token", data.token);
    var returnedToken = localStorage.getItem("x-auth-token");
    $.ajax({
      method: "GET",
      url: "/landing",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("x-auth-token", returnedToken);
      },
      success: function(xhr) {
        // xhr.setRequestHeader("x-auth-token", returnedToken);
        window.location.href = "/landing";
      }
    });
  });
});
