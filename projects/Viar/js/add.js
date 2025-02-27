document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(function () {
    var input = document.querySelector("#phone");
    var input2 = document.querySelector("#phone2");
    var input3 = document.querySelector("#phone3");
    var input4 = document.querySelector("#phone4");
    var input5 = document.querySelector("#phone5");
    var count_ar = [
      "al",
      "ad",
      "at",
      "by",
      "be",
      "ba",
      "bg",
      "hr",
      "cz",
      "dk",
      "ee",
      "fo",
      "fi",
      "fr",
      "de",
      "gi",
      "gr",
      "va",
      "hu",
      "is",
      "ie",
      "it",
      "lv",
      "li",
      "lt",
      "lu",
      "mk",
      "mt",
      "md",
      "mc",
      "me",
      "nl",
      "no",
      "pl",
      "pt",
      "ro",
      "ru",
      "sm",
      "rs",
      "sk",
      "si",
      "es",
      "se",
      "ch",
      "ua",
      "gb",
    ];
    if (window.intlTelInput) {
      if (input) {
        window.intlTelInput(input, {
          initialCountry: "lv",
          onlyCountries: count_ar,
          utilsScript: "/js/utils.js?1613236686837",
        });
      }
      if (input2) {
        window.intlTelInput(input2, {
          initialCountry: "lv",
          onlyCountries: count_ar,
          utilsScript: "/js/utils.js?1613236686837",
        });
      }
      if (input3) {
        window.intlTelInput(input3, {
          initialCountry: "lv",
          onlyCountries: count_ar,
          utilsScript: "/js/utils.js?1613236686837",
        });
      }
      if (input4) {
        window.intlTelInput(input4, {
          initialCountry: "lv",
          onlyCountries: count_ar,
          utilsScript: "/js/utils.js?1613236686837",
        });
      }
      if (input5) {
        window.intlTelInput(input5, {
          initialCountry: "lv",
          onlyCountries: count_ar,
          utilsScript: "/js/utils.js?1613236686837",
        });
      }
    }
  }, 4000);
  $(document).on("submit", ".js_login_form", function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      method: "POST",
      dataType: "JSON",
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      data: {
        email: $(".js_login_form input[name=email]").val(),
        password: $(".js_login_form input[name=password]").val(),
      },
      success: function (msg) {
        if (msg.status == true) {
          $(".js_login_form input[name=email]").val("");
          $(".js_login_form input[name=password]").val("");
          $(".js_login_form div.error").html("");
          location.href = $(".js_login_form").data("redirect");
        } else {
          $('.js_login_form [data-name="email"]').text(msg.errors);
        }
      },
      error: function (jqXHR, exception) {},
    });
  });
  $(document).on("submit", "#reg_form", function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      method: "POST",
      dataType: "JSON",
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      data: {
        name: $(".popup-registration input[name=name]").val(),
        surname: $(".popup-registration input[name=surname]").val(),
        email: $(".popup-registration input[name=email]").val(),
        phone: $(".popup-registration input[name=phone]").val(),
        password: $(".popup-registration input[name=password]").val(),
        password_confirmation: $(
          ".popup-registration input[name=password_confirmation]"
        ).val(),
      },
      success: function (msg) {
        console.log(msg);
        if (msg === true) {
          let data_redirect = $("#reg_form").data("redirect");
          $(".popup-registration input[name=email]").val("");
          $(".popup-registration input[name=password]").val("");
          $(".popup-registration input[name=password_confirmation]").val("");
          $(".popup-registration input[name=invited]").val("");
          $(".popup-registration div.error").html("");
          location.href = data_redirect;
        }
      },
      error: function (response) {
        const errors = response.responseJSON.errors;
        $(".err_msg").text();
        $.each(errors, function (key, value) {
          if (key === "name") {
            $(".err_name").text(value[0]);
          }
          if (key === "surname") {
            $(".err_surname").text(value[0]);
          }
          if (key === "email") {
            $(".err_email").text(value[0]);
          }
          if (key === "phone") {
            $(".err_phone").text(value[0]);
          }
          if (key === "password") {
            $(".err_pass").text(value[0]);
          }
        });
      },
    });
    return false;
  });
  $(document).on("click", ".popup-log-save a, .js_forget_btn", function (e) {
    e.preventDefault();
    $(".js-popup").hide();
    $(".popup-forget").show();
  });
  $(document).on("submit", ".js_forget_pass_new", function (e) {
    e.preventDefault();
    const data_msg = $(".js_forget_pass_new").data("msg");
    const route_forget = $(this).attr("action");
    const user_email = $(".js__mail_forget").val();
    $.ajax({
      method: "POST",
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      url: route_forget,
      data: { email: user_email },
      success: function (response) {
        if (response) {
          if (response.msg) {
            alert(data_msg);
            $(".popup-close").trigger("click");
          }
        }
      },
    });
  });
});
