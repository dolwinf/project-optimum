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
  var id = this.localStorage.getItem("id");
  $.ajax({
    method: "GET",
    url: "/getdata"
  }).then(function(data) {
    data.forEach(function(item) {
      var result =
        "<div class='card' style='flex-direction: row;margin: 0.5rem;'><img src=" +
        item.ImageURL +
        " class='card-img-top' alt='...'><div class='card-body' style='background-color:#ffce6b'><h5 class='card-title'>" +
        item.Name +
        "</h5><p class='card-text'>" +
        item.Description +
        "</p><button type='button' class='btn btn-primary swapz' id=" +
        item.userId +
        " data-toggle='modal' data-target='#exampleModal'>Swapz It!</button></div></div>" +
        "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>" +
        item.Name +
        "</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'> Exchanger details:</br>" +
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

$(".swapz").on("click", function(e) {
  var id = $(this).attr("id");
  e.preventDefault();
  $ajax({
    url: "/getUserID",
    method: "GET",
    data: id
  }).then(function(data) {
    console.log(data);
  });
});
