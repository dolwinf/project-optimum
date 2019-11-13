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
      var result =
        "<div class='card' style='width: 18rem; margin-top: 2%; margin-left: 3%'><img src=" +
        item.ImageURL +
        " class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" +
        item.Name +
        "</h5><p class='card-text'>" +
        item.Description +
        "</p><a href='#' class='btn btn-primary'>Swapz It!</a></div></div>";
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
