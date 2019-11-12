$(".registerbtn").on("click", function(e) {
  e.preventDefault();
  var userData = {
    firstName: $("#FirstName").val(),
    lastName: $("#LastName").val(),
    email: $("#email").val(),
    // mobile: $("#mobile").val(),
    // homeAddress: $("#Home").val(),
    // postalAddress: $("#Post").val(),
    password: $("#password").val(),
    passwordr: $("#reEnterPassword").val()
  };
  $.post("/api/register", userData).then(function(data) {
    console.log(data);
    localStorage.setItem("email", data.email);
    window.location.href = "/landing";
  });
});

$(".loginbtn").on("click", function(e) {
  e.preventDefault();
  var loginData = {
    email: $("#email").val(),
    password: $("#password").val()
  };
  $.ajax({
    method: "POST",
    url: "/api/login",
    data: loginData
  }).then(function(data) {
    console.log(data);
    localStorage.setItem("email", data.email);
    window.location.href = "/landing";
  });
});
