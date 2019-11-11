$("#profile").click(function () {
    $("#profile-form").show(2000);
});

$("#profile").blur(function () {
    $("#profile-form").hide(2000);
    $("#profile-form")[0].reset();
});

$("#add-item").click(function () {
    $("#add-form").show(2000);
});

$("#add-item").focusout(function () {
    $("#add-form").hide(2000);
    $("#add-form")[0].reset();
});
// TODO delete after data insert
$(".username").text("N00bKiller69");

