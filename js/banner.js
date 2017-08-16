	window.onresize = function(){
  		$('#img_box img').width($('#img-wrap').width());
  	}
    $(document).ready(function() {
    	$('#img_box img').width($('#img-wrap').width());
        var total = $("#img_box img").length;

        $("#imglink1 span").css({
            "background": "#0063c8",
        });

        $(".thumblink").click(function() {
            var imgnumber = parseInt($(this).attr('id').replace("imglink", ""));
            var move = -($("#img"+imgnumber).width() * (imgnumber - 1));

            $("#img_box").animate({
                left: move
            }, 500);

            $("#imgthumb_box").find("span").removeAttr("style");
            $(this).find("span").css({
                "background": "#0063c8",
            });
            return false;
        });

        $("#navigate a").click(function() {
            var imgwidth = $("#img1").width();
            var box_left = $("#img_box").css("left");
            var el_id = $(this).attr("id");
            var move, imgnumber;

            if (box_left == 'auto') {
                box_left = 0;
            } else {
                box_left = parseInt(box_left.replace("px", ""));
            }

            // if prev
            if (el_id == 'linkprev') {
                if ((box_left - imgwidth) == -(imgwidth)) {
                    move = -(imgwidth * (total - 1));
                } else {
                    move = box_left + imgwidth;
                }

                imgnumber = -(box_left / imgwidth);
                if (imgnumber == 0) {
                    imgnumber = total;
                }
            } else if (el_id == 'linknext') {
                // if in the last image, move to first
                if (-(box_left) == (imgwidth * (total - 1))) {
                    move = 0;
                } else {
                    move = box_left - imgwidth;
                }

                imgnumber = Math.abs((box_left / imgwidth)) + 2;
                if (imgnumber == (total + 1)) {
                    imgnumber = 1;
                }
            } else if (el_id == 'linkfirst') {
                move = 0;
                imgnumber = 1;
            } else if (el_id == 'linklast') {
                move = -(imgwidth * (total - 1));
                imgnumber = total;
            }

            // styling selected image
            $("#imgthumb_box").find("span").removeAttr("style");
            $("#imglink"+imgnumber).find("span").css({
                "background": "#0063c8",
            });

            $("#navigate a").hide();
            $("#navigate span").show();

            $("#img_box").animate({
                left: move+'px'
            }, 400, function() {
                $("#navigate a").show();
                $("#navigate span").hide();
            });

            return false;
        });
    });
	/* 代码整理：懒人之家 lanrenzhijia.com */