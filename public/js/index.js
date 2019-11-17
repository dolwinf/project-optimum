$(".registerbtn").on("click", function(e) {
  e.preventDefault();
  var userData = {
    firstName: $("#FirstName").val(),
    lastName: $("#LastName").val(),
    email: $("#Email").val(),
    // mobile: $("#mobile").val(),
    // homeAddress: $("#Home").val(),
    // postalAddress: $("#Post").val(),
    password: $("#password").val(),
    passwordr: $("#reEnterPassword").val()
  };
  if (userData.password !== userData.passwordr) {
    $("#errors").empty();
    $("#errors").append(
      "<p style='color: red; font-weight: bold'>Passwords don't match</p>"
    );
  } else if (
    userData.email == null ||
    userData.email == undefined ||
    userData.email == ""
  ) {
    $("#errors").empty();
    $("#errors").append(
      "<p style='color: red; font-weight: bold'>Please enter an email to register</p>"
    );
  } else if (
    userData.password == null ||
    userData.password == undefined ||
    userData.password == ""
  ) {
    $("#errors").empty();
    $("#errors").append(
      "<p style='color: red; font-weight: bold'>Please enter a password</p>"
    );
  } else {
    $.post("/api/register", userData).then(function(data) {
      if (Array.isArray(data.errors)) {
        $("#errors").empty();
        $("#errors").append(
          "<p style='color: red; font-weight: bold'>Email already exists</p>"
        );
      } else {
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", data.id);
        window.location.href = "/landing";
      }
    });
  }
});

$(".loginbtn").on("click", function(e) {
  e.preventDefault();
  var loginData = {
    email: $("#email").val(),
    password: $("#password").val()
  };
  if (
    loginData.email == null ||
    loginData.email == undefined ||
    loginData.email == "" ||
    loginData.password == null ||
    loginData.password == undefined
  ) {
    $("#errors1").empty();
    $("#errors1").append(
      "<p style='color: red; font-weight: bold'>Please enter a valid username and password</p>"
    );
  } else {
    $.post("/api/login", loginData).then(function(data) {
      if (data.errors) {
        $("#errors1").empty();

        data.errors.errors.forEach(function(item) {
          $("#errors1").append(
            "<p style='color: red; font-weight: bold'>" + item.msg + "</p>"
          );
        });
      } else {
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", data.id);
        window.location.href = "/landing";
      }
    });
  }
});
