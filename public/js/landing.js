$(".logout").on("click", function(e) {
  e.preventDefault();
  $.ajax({
    method: "GET",
    url: "/logout"
  }).then(function() {
    window.location.href = "/";
  });
});

function checkOwner(item, id) {
  if (item.userId == id) {
    $("#deleteButton").append(
      "<button class='btn btn-danger deleteItem' id=" +
        item.id +
        " style='margin-top: 15%'>Delete</button>"
    );
  }
  $(".deleteItem").on("click", function(e) {
    e.preventDefault();
    console.log("clicked");
    var itemID = $(this).attr("id");

    $.ajax({
      url: "/delete",
      method: "POST",
      data: { id: itemID }
    }).then(function(e) {
      console.log("Why am i not deleted?");
      window.location.href = "/landing";
    });
  });
}

window.onload = function() {
  var id = this.localStorage.getItem("id");
  $.ajax({
    method: "GET",
    url: "/getdata"
  }).then(function(data) {
    data.forEach(function(item) {
      console.log(item);

      var result =
        "<div class='card' style='flex-direction: row;margin: 0.5rem;'><img src=" +
        item.ImageURL +
        " class='card-img-top' alt='...'><div class='card-body' style='background-color:#ffce6b'><h5 class='card-title'>" +
        item.Name +
        "</h5><p class='card-text'>" +
        item.Description +
        "</p><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal" +
        item.id +
        "'>Swapz It!</button><div id='deleteButton' >" +
        "</div></div></div>" +
        "<div class='modal fade' id='exampleModal" +
        item.id +
        "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>" +
        item.user.firstName +
        "</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'> Exchanger details:</br>" +
        "Name: " +
        item.user.firstName +
        " " +
        item.user.lastName +
        "</br>" +
        "Mobile: " +
        item.user.mobile +
        "</br>" +
        "Email: " +
        item.user.email +
        "</br>" +
        "</div><div class='modal-footer'><button type='button' class='btn btn-info' data-dismiss='modal'>Close</button>";

      $("#items").prepend(result);
      checkOwner(item, id);
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
