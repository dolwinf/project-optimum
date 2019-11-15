function getID() {
  var itemID = localStorage.getItem("itemID");
  $.ajax({
    method: "GET",
    url: "/items",
    data: { itemID: itemID }
  }).then(function(data) {
    console.log(data[0]);
    $("#item-name").val(data[0].Name);
    $("#item-url").val(data[0].ImageURL);
    $("#item-description").val(data[0].Description);
  });
}

getID();

$("#saveItem").on("click", function() {
  var editedObject = {
    Name: $("#item-name").val(),
    ImageURL: $("#item-url").val(),
    Description: $("#item-description").val()
  };
  $.ajax({
    method: "/POST",
    url: "items",
    data: editedObject
  }).then(function() {
    window.location.href = "/landing";
  });
});
