function loadingWithMessage($message) {
	console.log("show")
	$("body").on("touchmove", function(event) {
		event.preventDefault;
	}, false);

	if($message == "" || $message == undefined || $message == null){
		$('<div class="loader">' +
		'<div class="loader-inner ball-spin-fade-loader" style="position: absolute;left: calc((100% - 20px)/2);top: 50%;">' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'</div>' +
		'</div>').appendTo($("body"));
	}else{
		$('<div class="loader">' +
		'<div class="loader-inner ball-spin-fade-loader" style="position: absolute;left: calc((100% - 20px)/2);top: 45%;">' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'<div></div>' +
		'</div>' +
		'<p style="position: absolute;left: 0%;top: 55%;width: 100%;text-align: center;font-size:17px;color: #d71e5d !important;">' + $message + '</p>' +
		'</div>').appendTo($("body"));
	}
	
}

function dismiss() {
	$(".loader").remove();
	$("body").off("touchmove");
}