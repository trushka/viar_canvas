$(document).ready(function() {
    let select = $(".select-wrapper select");
    select.each(function (i, e) {
      new SlimSelect({
        select: e,
        showSearch: false,
      });
    });

    $('.type-item').click(function() {
        $('.type-item').removeClass('active');
        $(this).addClass('active');
    })
})