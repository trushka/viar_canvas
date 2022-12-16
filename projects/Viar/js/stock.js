$(function() {


    $('.so-slider').slick({
        slidesToShow: 5,
        variableWidth: true,
        infinite: false,
        prevArrow: ".so-arr",
        nextArrow: ".so-next",
    })



    $('.js-popup-msg').click(function (e) {
        e.preventDefault();
        $('body').addClass('open-frame');
        $('.popup-frame').css("display", "flex").hide().fadeIn();
        $('.stock-data-input').fadeIn();
    });
    $('.js-popup-friend').click(function (e) {
        e.preventDefault();
        $('body').addClass('open-frame');
        $('.popup-frame').css("display", "flex").hide().fadeIn();
        $('.stock-promo-input').fadeIn();
    });
    $('.js-popup-bonus').click(function (e) {
        e.preventDefault();
        $('body').addClass('open-frame');
        $('.popup-frame').css("display", "flex").hide().fadeIn();
        $('.stock-screen-input').fadeIn();
    });


    $('.js--copy').on('click', function(e) {
        e.preventDefault()
        let text = $('.promo-block b').text();
        navigator.clipboard.writeText(text);

    })

    $(document).on('click', '.stock-data-input .sm-btn', function(e) {
        e.preventDefault();
        let first_date = $(this).closest('.stock-data-input').find("input[name='firstDate']").val();
        let second_date = $(this).closest('.stock-data-input').find("input[name='secondDate']").val();
        if (first_date && second_date) {
            $.ajax({
                type: "post",
                dataType: "json",
                headers: {
                  "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
                url: "any",
                data: {
                  firstDate: first_date,
                  secondDate: second_date
                },
                success: function (response) {
                  console.log(response)
                },
              });
        }
    })

    $(document).on('click', '.stock-promo-input .sm-btn', function(e) {
        e.preventDefault();
            let promo_code = $(this).closest('.stock-promo-input').find('.promo-block b').text();
            $.ajax({
                type: "post",
                dataType: "json",
                headers: {
                  "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
                url: "any",
                data: {
                  promoCode: promo_code,
                },
                success: function (response) {
                  console.log(response)
                },
              });
    })
    $(document).on('click', '.stock-screen-input .sm-btn', function(e) {
        e.preventDefault();
            let img = $(this).closest('.stock-promo-input').find('.file-popup');
            console.log(img)
            $.ajax({
                type: "post",
                dataType: "json",
                headers: {
                  "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
                url: "any",
                data: {
                  screen: img,
                },
                success: function (response) {
                  console.log(response)
                },
              });
    })
})