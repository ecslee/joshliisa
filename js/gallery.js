$(document).ready(function () {
    var bucket = "https://s3-us-west-2.amazonaws.com/gallery.joshandaliisa.com/",
        imgTitle = "AJ-engagement-",
        imgs = [
            102, 103, 106, 108, 109,
            110, 111, 114, 116, 118,
            120, 122, 123, 125, 127, 129,
            131, 134, 135,
            141, 144, 145, 147,
            150, 154,
            160, 166, 167, 168, 169,
            172, 173, 174, 175, 179,
            182, 183, 184, 185, 186
        ],
        dimensions = {};
    
    for (var n = 0; n < imgs.length; n++) {
        // get image dimensions when loaded
        var img = new Image();
        img.src = bucket + "images/" + imgTitle + imgs[n] + ".jpg";
        img["data-num"] = imgs[n];
        $(img).one("load", function (evt) {
            var num = this["data-num"];
            dimensions[num] = {
                w: this.width,
                h: this.height,
                portrait: this.height > this.width
            };
            $(".gallery-img[data-num='" + num + "']").addClass(dimensions[num].portrait ? "portrait" : "landscape");
        });
        
        // add image to view
        var $img = $("<img/>", {
            "data-num": imgs[n],
            class: "gallery-img col-xs-4 col-md-6",
            src: bucket + "thumbnails/" + imgTitle + imgs[n] + ".jpg"
        });
        $("#gallery").append($img);
        
    }
    
    $(".gallery-img").click(function () {
        $(".gallery-img").removeClass("selected");
        $(this).addClass("selected");
        var background = "url(" + bucket + "images/" + imgTitle + $(this).data("num") + ".jpg)";
        $("#preview").css("background-image", background);
        if (dimensions[$(this).data("num")] && !dimensions[$(this).data("num")].portrait) {
            $("#preview").css("background-position", "center center");
        } else {
            $("#preview").css("background-position", "center 25%");
        }
    });
    $(".gallery-img").eq(0).click();
});