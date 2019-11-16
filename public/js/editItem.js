var id = localStorage.getItem("itemID");

$.ajax({
  method: "GET",
  url: "/items/" + id
}).then(function(data) {
  console.log(data);
  $("#item-name").val(data.Name);
  $("#item-url").val(data.ImageURL);
  $("#item-description").val(data.Description);
});

$("#saveItem").on("click", function(e) {
  e.preventDefault();
  var editedObject = {
    id: localStorage.getItem("itemID"),
    Name: $("#item-name").val(),
    ImageURL: $("#item-url").val(),
    Description: $("#item-description").val()
  };
  $.ajax({
    method: "POST",
    url: "/items",
    data: editedObject
  }).then(function(data) {
    window.location.href = data.redirect;
  });
});
