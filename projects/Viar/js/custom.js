$(document).ready(function () {



    

    document.addEventListener("DOMContentLoaded", function(event) {

        var loadLater = document.querySelector('.loadLater');
        var head = document.querySelector('head');
        if(loadLater && head){
            head.insertAdjacentHTML('beforeend', loadLater.innerHTML);
        }
    });
  function setPrice() {
    let s_price = $(".popup-photo input[name='new_price']").val();
    let c_price = $(".popup-photo input[name='new_people_count_price']").val();
    if (!c_price) {
      c_price = 0;
    }
    let o_price = parseFloat(s_price) + parseFloat(c_price);
    console.log(s_price, c_price);
    $(".kviz-price span").text(o_price);
    $(".popup-photo input[name='overall_price']").val(o_price);
  }

  $(".js-fast_order").click(function (e) {
    e.preventDefault();
    $(".popup-fit").fadeOut();
    $(".popup-photo").delay(500).fadeIn();
  });

  $(".js-detail_order").click(function (e) {
    /*e.preventDefault();*/
    $(".popup-frame").fadeOut();
    $(".js-popup").fadeOut();
    $("body").removeClass("open-frame");
    document.querySelector("#generator").scrollIntoView({
      behavior: "smooth",
    });
  });

  $(".js-examples").click(function (e) {
    e.preventDefault();

    let _id = $(this).data("catid");

    let size = $(this).data("size");

    let url = $(this).data("url");

    $("body").addClass("open-frame");
    $(".popup-frame").css("display", "flex").hide().fadeIn();
    $(".popup-fit").fadeIn();

    if (url) {
      $(".js-detail_order").attr("href", url);
    } else {
      $(".js-detail_order").attr(
        "href",
        $(".portraits-btn__style").attr("href")
      );
    }
    if (_id) {
      $(".popup-photo .select-style option[data-catid='" + _id + "']").prop(
        "selected",
        "selected"
      );
      $(`.select-size`).css("display", "none");
      $(`.select-size[data-catid='${_id}']`).css("display", "block");
      $(".popup-photo input[name='new_catid']").val(_id);
      if (size) {
        size = size.substring(0, size.length - 2);
        size = size.trim();
        size = size.split("х");
        $(`.select-size[data-catid='${_id}']`)
          .find("option[value='" + size[0] + "x" + size[1] + "']")
          .prop("selected", "selected");
        let price = $(`.select-size[data-catid='${_id}']`)
          .find("option:selected")
          .data("price");
        $(".popup-photo input[name='new_size']").val(size[0] + "x" + size[1]);
        $(".popup-photo input[name='new_price']").val(price);
        setPrice();
      } else {
        size = $(`.select-size[data-catid='${_id}']`)
          .find("option:selected")
          .val();
        let price = $(`.select-size[data-catid='${_id}']`)
          .find("option:selected")
          .data("price");

        $(".popup-photo input[name='new_size']").val(size);
        $(".popup-photo input[name='new_price']").val(price);
        setPrice();
      }

      if ($(`.kviz-popup--portrait select[data-catid='${_id}']`).length > 0) {
        $(".popup-photo").addClass("portrait-popup");
        $(`.kviz-popup--portrait select`).css("display", "none");
        $(`.kviz-popup--portrait select[data-catid='${_id}']`).css(
          "display",
          "block"
        );
        let count = $(
          `.kviz-popup--portrait select[data-catid='${_id}'] option:selected`
        ).val();
        let count_price = $(
          `.kviz-popup--portrait select[data-catid='${_id}'] option:selected`
        ).data("count-price");
        $(".popup-photo input[name='new_people_count']").val(count);
        $(".popup-photo input[name='new_people_count_price']").val(count_price);
        setPrice();
      } else {
        $(".popup-photo").removeClass("portrait-popup");
        $(`.kviz-popup--portrait select`).css("display", "none");
        $(".popup-photo input[name='new_people_count']").val(null);
        $(".popup-photo input[name='new_people_count_price']").val(null);
        setPrice();
      }
    }
  });

  $(`.select-size[data-catid='1']`).css("display", "block");

  $(".select-style").on("change", function () {
    let _id = $(this).find(":selected").data("catid");
    $(`.select-size[data-catid]`).css("display", "none");
    $(`.select-size[data-catid='${_id}']`).css("display", "block");
    $(".popup-photo input[name='new_catid']").val(_id);
    let price = $(`.select-size[data-catid='${_id}'] option:selected`).data(
      "price"
    );
    let size = $(`.select-size[data-catid='${_id}'] option:selected`).val();
    size = size.trim();
    $(".popup-photo input[name='new_size']").val(size);
    $(".popup-photo input[name='new_price']").val(price);
    setPrice();
    if ($(`.kviz-popup--portrait select[data-catid='${_id}']`).length > 0) {
      $(".popup-photo").addClass("portrait-popup");
      $(`.kviz-popup--portrait select`).css("display", "none");
      $(`.kviz-popup--portrait select[data-catid='${_id}']`).css(
        "display",
        "block"
      );
      let count = $(
        `.kviz-popup--portrait select[data-catid='${_id}'] option:selected`
      ).val();
      let count_price = $(
        `.kviz-popup--portrait select[data-catid='${_id}'] option:selected`
      ).data("count-price");
      $(".popup-photo input[name='new_people_count']").val(count);
      $(".popup-photo input[name='new_people_count_price']").val(count_price);
      setPrice();
    } else {
      $(".popup-photo").removeClass("portrait-popup");
      $(`.kviz-popup--portrait select`).css("display", "none");
      $(".popup-photo input[name='new_people_count']").val(null);
      $(".popup-photo input[name='new_people_count_price']").val(null);
      setPrice();
    }
  });

  $(".select-count").on("change", function () {
    let count = $(this).find(":selected").val();
    let count_price = $(this).find(":selected").data("count-price");
    $(".popup-photo input[name='new_people_count']").val(count);
    $(".popup-photo input[name='new_people_count_price']").val(count_price);
    setPrice();
  });

  $(".select-size").on("change", function () {
    let price = $(this).find(":selected").data("price");
    let size = $(this).find(":selected").val();
    size = size.trim();

    $(".popup-photo input[name='new_size']").val(size);
    $(".popup-photo input[name='new_price']").val(price);
    setPrice();
  });

  $(".file-input").on("change", function (e) {
    var filename = $(this).val().replace(/.*\\/, "");
    var _size = this.files[0].size;
    var _input = this;
    var fSExt = new Array("Bytes", "KB", "MB", "GB"),
      i = 0;
    while (_size > 900) {
      _size /= 1024;
      i++;
    }
    var exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
    let counterFile = $(this).get(0).files.length;

    let files = e.target.files;
    $(_input).prop("readonly", true);

    if (filename) {
      $(this).closest(".file-save").find(".abs-close").fadeIn();
      $(this).siblings(".js-file-preview").hide();
      $(this).siblings(".js-file-upload").hide();
      $(this).siblings(".js-file-multiple").css({ display: "flex" });
      $(this).addClass("file-input_save");
    } else {
      $(this).siblings(".js-file-preview").css({ display: "flex" });
      $(this).siblings(".js-file-upload").hide();
      $(this).siblings(".js-file-multiple").hide();
      $(this).removeClass("file-input_save");
    }

    $(this)
      .closest(".file-save")
      .find(".abs-close")
      .on("click", function () {
        $(_input).prop("readonly", false);
        $(_input).val(null);
        $(this).hide();
        $(_input).siblings(".js-file-preview").show();
        $(_input).siblings(".js-file-upload").hide();
        $(_input).siblings(".js-file-multiple").hide();
      });
  });
  var fileValid = false;
  var messegeValid = false;
  $(".kviz-file-input").change(function () {
    fileValid = true;
  });
  $(".kviz-messege__tab").click(function () {
    messegeValid = true;
  });

  setTimeout(function () {
    $(".loader-canvas button input").on("change", function () {
      var container = $(this).closest(".product-download");

      console.log(this);
      container.find(".abs-close").fadeIn();
      container.find(".js-file-preview").hide();
      container.find(".js-file-upload").hide();
      container.find(".js-file-multiple").css({ display: "flex" });
      $(this).addClass("file-input_save");

      container.find(".abs-close").on("click", function () {
        $(this).prop("readonly", false);
        $(this).val(null);
        $(this).hide();
        container.find(".js-file-preview").show();
        container.find(".js-file-upload").hide();
        container.find(".js-file-multiple").hide();
      });
    });
  }, 1000);

  $(".why-composition-inner form, .why-form").on("submit", function () {
    $(this).find(".loading-bar").css("display", "flex").hide().fadeIn();
  });

  function getCookie(name) {
    var matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  var _timeIn = 0;
  var alertwin = getCookie("alertwin");
  if (alertwin != "no") {
    $(document).mouseleave(function (e) {
      console.log(_timeIn, !_timeIn);
      if (!_timeIn) {
        if (e.clientY < 10) {
          if ($("body").hasClass("open-frame")) {
            if (!$(".popup-why").is(":visible")) {
              $(".js-popup").fadeOut();
              $(".popup-why").delay(500).fadeIn("fast");
            }
          } else {
            $("body").addClass("open-frame");
            $(".popup-frame").css("display", "flex").hide().fadeIn();
            $(".popup-why").delay(500).fadeIn("fast");
            _timeIn++;
          }

          var date = new Date();
          date.setDate(date.getDate() + 1);
          document.cookie =
            "alertwin=no; path=/; expires=" + date.toUTCString();
        }
      }
    });
  }

  $(".popup-why .popup-log-check").on("click", function () {
    let parent = $(this).closest("ul");
    parent.find(".popup-log-check").removeClass("log-check_active");
    $(this).removeClass("log-check_active");
  });

  $(".popup-why .popup-log-check").on("click", function () {
    let qId = $(this).data("question");
    console.log($(".question-input"));
    $(".popup-why").fadeOut();
    $(".popup-callback").delay(500).fadeIn("fast");
    console.log(qId);
    $("input[name='why_id']").val(qId);
  });

  $(".kviz-c-row>div label span img").hover(
    function () {
      $(this).closest(".kviz-radio").addClass("hovered");
    },
    function () {
      $(this).closest(".kviz-radio").removeClass("hovered");
    }
  );

  if ($(".portraits-slider").length > 0) {
    $(".portraits-slider").slick({
      infinite: true,
      slidesToShow: 1,
      prevArrow: ".portraits-prev",
      nextArrow: ".portraits-next",
      fade: true,
      dots: true,
      appendDots: ".portraits-dots",
      responsive: [
        {
          breakpoint: 700,
          settings: {
            dots: false,
          },
        },
      ],
    });
  }

  document.querySelectorAll('a[href^="#generator"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  
  document.addEventListener('touchstart', onTouchStart, {passive: true});
});
