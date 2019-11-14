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
    firstName: $("#firstname").val(),
    lastName: $("#lastName").val(),
    email: $("#email").val(),
    lastName: $("#lastname").val(),
    mobile: $("#phone").val(),
    homeAddress: $("#inputAddress").val()
  };
  $.ajax({
    method: "POST",
    url: "/editProfile",
    data: loginData
  }).then(function(data) {
    window.location.href = "/landing";
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
    $("#lastname").val(data.lastName);
    $("#phone").val(data.mobile);
    $("#inputAddress").val(data.homeAddress);
  });
};

$("#create-item").on("click", function(e) {
  e.preventDefault();
  var newItem = {
    itemName: $("#item-name").val(),
    itemURL: $("#item-url").val(),
    itemDescription: $("#item-description").val(),
    id: localStorage.getItem("id")
  };
  $.ajax({
    method: "POST",
    url: "/createItem",
    data: newItem
  }).then(function() {
    window.location.href = "/landing";
  });
});
