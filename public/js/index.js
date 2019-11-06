$(".registerbtn").on("click", function(data) {
	console.log("clicked");

	var userData = {
		email: $(".email").val(),
		password: $(".password").val(),
		passwordr: $(".passwordr").val()
	};
	$.post("/api/users", userData).then(function(data) {
		console.log(data);
	});
});
