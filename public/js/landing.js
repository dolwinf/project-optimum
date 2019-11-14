$(".logout").on("click", function(e) {
  e.preventDefault();
  $.ajax({
    method: "GET",
    url: "/logout"
  }).then(function() {
    window.location.href = "/";
  });
});

window.onload = function() {
  $.ajax({
    method: "GET",
    url: "/getdata"
  }).then(function(data) {
    data.forEach(function(item) {
      var firstName = "Tom";
      var lastName = "Smith";
      var mobile = "0468 555 123";
      var email = "tom@gmail.com";
      var homeAddress = "89/290 Kents St, Sydney NSW 2000, Australia";

      var result =
        "<div class='card' style='flex-direction: row;margin: 0.5rem;'><img src=" +
        item.ImageURL +
        " class='card-img-top' alt='...'><div class='card-body' style='background-color:#ffce6b'><h5 class='card-title'>" +
        item.Name +
        "</h5><p class='card-text'>" +
        item.Description +
        "</p><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>Swapz It!</button></div></div>" +
        "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>" +
        item.Name +
        "</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'> Exchanger details:</br>" +
        "Name: " +
        firstName +
        " " +
        lastName +
        "</br>" +
        "Mobile: " +
        mobile +
        "</br>" +
        "Email: " +
        email +
        "</br>" +
        "Home Address: " +
        homeAddress +
        "</div><div class='modal-footer'><button type='button' class='btn btn-info' data-dismiss='modal'>Close</button>";

      $("#items").prepend(result);
    });
  });
};

$(".editProfile").on("click", function(e) {
  e.preventDefault();
  window.location.href = "/profile";
});

$(".addItem").on("click", function(e) {
  e.preventDefault();
  window.location.href = "/addItem";
});
