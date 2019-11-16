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
      "<button class='btn btn-warning editItem' id=" +
        item.id +
        " style='margin-top: 8%; margin-right:4%'>Edit</button>" +
        "<button class='btn btn-danger deleteItem' id=" +
        item.id +
        " style='margin-top: 8%'>Delete</button>"
    );
  }

  $(".editItem").on("click", function() {
    var editItemID = $(this).attr("id");

    $.post("/editItems", { editItemID: editItemID }).then(function(data) {
      console.log(data);
      localStorage.setItem("itemID", data[0].id);
      window.location.href = "/editItem";
    });
  });

  $(".deleteItem").on("click", function(e) {
    e.preventDefault();

    var itemID = $(this).attr("id");

    $.ajax({
      url: "/delete",
      method: "POST",
      data: { id: itemID }
    }).then(function(e) {
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
      var result =
        "<div class='card' style='flex-direction: row;margin: 2.5rem; max-width: 1000px;'><img src=" +
        item.ImageURL +
        " class='card-img-top' style='width: 300px'alt='...'><div class='card-body' style='background-color:lightyellow'><h5 class='card-title'>" +
        item.Name +
        "</h5><p class='card-text'>" +
        item.Description +
        "</p><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal" +
        item.id +
        "'>Swapz It  <i class='fas fa-exchange-alt'></i></button><div id='deleteButton' >" +
        "</div></div></div>" +
        "<div class='modal fade' id='exampleModal" +
        item.id +
        "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>" +
        item.user.firstName +
        "</h5></i><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'><i class='far fa-address-book'></i> Exchanger details:</br>" +
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
