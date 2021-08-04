$(document).ready(function () {
    $(".header__burger").click(function () {
        $(".main-nav").toggleClass("active");
    });
    
    $(".moto-colors__list li").click(function () {
        $(".moto-colors__list li").removeClass("active");
        $(this).addClass("active");

        $(".moto-colors__block").css("background-image", "url(" + $(this).attr("data-color-img") + ")");
    });



    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 20
        }, 500, 'linear');
    });





    $("#contact-form").submit(function () {
        var form = $(this);
        var msg = form.serialize();
        var formData = new FormData($(this)[0]);
        var faults = form.find('input').filter(function () {
            return $(this).data('required') && $(this).val() === "";
        }).addClass('error');
        console.log(faults);
        if((faults.length)){
            return false;
        }
        else{
            $.ajax({
                type: "POST",
                url: "/mail.php",
                data: JSON.stringify(formData),
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data) {
                    openPopup($("#popup_ty"));
                    $(this).trigger('reset');
                },
                error:  function(xhr, str){
                    alert("Возникла ошибка!");
                }
            });
        }
        return false;
    });
    $("#contact-form_handler").submit(function () {
        var form = $(this);
        var msg = form.serialize();
        var formData = new FormData($(this)[0]);
        var faults = form.find('input').filter(function () {
            return $(this).data('required') && $(this).val() === "";
        }).addClass('error');
        console.log(faults);
        if((faults.length)){
            return false;
        }
        else{
            $.ajax({
                type: "POST",
                url: "/mail2.php",
                data: JSON.stringify(formData),
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data) {
                    openPopup($("#popup_ty"));
                    $(this).trigger('reset');
                },
                error:  function(xhr, str){
                    alert("Возникла ошибка!");
                }
            });
        }
        return false;
    });
});

let page_position = $(window).scrollTop();

$(window).on('scroll resize', function () {
    let current_page_position = $(window).scrollTop();
    if ($(window).scrollTop() > $(".header__top").innerHeight()) {
        $("body").addClass("fixed-header");
        $("body").addClass("fixed-header_animate");
        // $("body").css("padding-top", $(".header").innerHeight() + "px");
        if (page_position < current_page_position) {
            $(".header").css("top", "-" + $(".header__top").innerHeight() + "px");
        } else {
            $(".header").css("top", "0px");
        }
        page_position = current_page_position;
    } else {
        $("body").removeClass("fixed-header_animate");
        $("body").removeClass("fixed-header");
        // $("body").css("padding-top", "0px");
    }
});



function openPopup(popup) {
	$(popup).show();
	$("body").addClass("hidden");
	$(popup).find(".popup_close").click(function () {
		$(popup).hide();
		$("body").removeClass("hidden");
	});
	$(popup).find(".button_close").click(function () {
		$(popup).hide();
		$("body").removeClass("hidden");
	});
	$(popup).click(function (e) {
		var div = $(".popup-block");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$("body").removeClass("hidden");
			$(this).hide();
		}
	});
};