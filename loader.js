function loadingWithMessage($message, $type) {
    $("body").on("touchmove", function(event) {
        event.preventDefault;
    }, false);
    var animationCss = "";
    if ($type == 1){
        animationCss = "ball-spin-fade-loader";
    }else if($type == 2){
        animationCss = "line-spin-fade-loader";
    }else if($type == 3){
		animationCss = "semi-circle-spin";
    }else if($type == 4){
		animationCss = "ball-clip-rotate-pulse";
    }else if($type == 5){
		animationCss = "ball-clip-rotate-multiple";
    }else if($type == 6){
		animationCss = "line-scale";
    }else if($type == 7){
		animationCss = "pacman";
    }else if($type == 8){
		animationCss = "line-scale-party";
    }else if($type == 9){
		animationCss = "ball-zig-zag-deflect";
    }


    if ($message == "" || $message == undefined || $message == null) {
        $('<div class="loader">' +
            '<div class="loader-inner ' + animationCss + '" style="position: absolute;left: calc((100% - 20px)/2);top: 50%;">' +
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
    } else {
        $('<div class="loader">' +
            '<div class="loader-inner ' + animationCss + '" style="position: absolute;left: calc((100% - 20px)/2);top: 45%;">' +
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