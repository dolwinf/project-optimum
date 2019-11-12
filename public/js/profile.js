// $(document).on("click", "#add-item", function () {
//     $("html, body").animate({
//         scrollTop: $("#add-item").offset().top
//     }, 1000)
// });

// // TODO delete after data insert
// $("#username").text("N00bKiller69");
$("#profile-save").on("click", function(e) {
  e.preventDefault();

  var loginData = {
    name: $("#firstname").val(),
    email: $("#email").val()
  };
  $.ajax({
    method: "POST",
    url: "/editProfile",
    data: loginData
  }).then(function(data) {
    console.log(data);
  });
});

window.onload = function() {
  var email = this.localStorage.getItem("email");
  $.ajax({
    method: "GET",
    url: "/users/" + email
  }).then(function(data) {
    console.log(data);
    $("#firstname").val(data.firstName);
    $("#email").val(data.email);
  });
};
