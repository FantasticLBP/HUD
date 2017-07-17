function loadingWithMessage($message) {

	$("body").on("touchmove", function(event) {
		event.preventDefault;
	}, false);

	$('<div class="loader">' +
		'<div class="loader-inner ball-spin-fade-loader" style="position: absolute;left: 50%;top: 50%;">' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'</div>' +
		'<p style="position: absolute;left: 0%;top: 55%;width: 100%;text-align: center;font-size:1.7em;">' + $message + '</p>' +
		'</div>').appendTo($("body"));
}

function dismiss() {
	$(".loader").remove();
	$("body").off("touchmove");
}