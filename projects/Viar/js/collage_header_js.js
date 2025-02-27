    (function ($) {

      $.fn.jmspinner = function (value) {
        var small = 'small';
        var custom = 'custom';
        var large = 'large';
        var div_bounces = '';
        var div = document.createElement('div');
        var plc = $(div).prop('class', 'spin_loading');
        var inner = document.createElement('div');
        var center_loading = $(inner).prop('class', 'spinner');
        var made = $(plc).html(center_loading);
        var bce1 = document.createElement('div');
        var bce2 = document.createElement('div');
        var bce3 = document.createElement('div');
        var div_btn_1 = $(bce1).prop('class', 'bounce1');
        var div_btn_2 = $(bce2).prop('class', 'bounce2');
        var div_btn_3 = $(bce3).prop('class', 'bounce3');
        // returning the bounce divs to the template

        //var div_inner_bounces = $(div_bounces).html(div_btn);
        var divs_bts;
        var index = 0;
        var loading = [];
        loading.push(div_btn_1, div_btn_2, div_btn_3);

        $.each(loading, function (i, index) {

          divs_bts = $(center_loading).append(index);

        });

        if (value == 'small') {
          var small = $(divs_bts).addClass('small');
          this.html(small);
          return this;
        }
        if (value == 'large') {
          var large = $(divs_bts).addClass('large');
          this.html(large);
          return this;
        }
        if (value == null) {
          var detf = $(divs_bts).addClass('default');
          this.html(detf);
          return this;
        }

        if (value == false) {
          this.find('.spinner').remove();
          return this;
        }

      }

    }(jQuery));

    $(document).ready(function () {
      $(".close-content, .n-p-btn-back").on("click", function () {
        $(".popup").removeClass("active");
        if ($(this).closest('.popup').hasClass('popup-bask-add')) {
          $("html, body").animate({
            scrollTop: 0
          }, 0);
          document.location.reload(true);
        }
        if ($(this).closest('.popup').hasClass('popup-act-act')) {
          document.location.reload(true);
        }
      }),

        $(".close-popup").on("click", function () {
          $(".popup").removeClass("active")
        }), $(".office.off").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-login-registration").addClass("active")
        }), $(".login").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-login").addClass("active")
        }), $(".registration").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-registration").addClass("active")
        }), $(".forgotYour_js").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-forgotYour").addClass("active")
        }), $(".datas_js").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-dates").addClass("active")
        }), $(".friend_js").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-lnvite-friend").addClass("active")
        }), $(".printScreen_js").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-print-screen").addClass("active")
        }), $(".photo_js").on("click", function () {
          $(".popup").removeClass("active"), $(".popup-photo").addClass("active")
        }), $(".invited_js").on("click", function () {
          $(this).toggleClass("active"), $(this).next().toggleClass("active")
        })
    });

    $(document).ready(function () {

      $(document).on('change, keyup', '.js_users_count', function (e) {
        var val = $(this).val();
        var cat_data_price = $('.js_persons_all').data('var');
        var size_price = $(this).next('input').val();

        var total = parseInt(val) * parseInt(cat_data_price) * parseInt(size_price);
        $(this).closest('.item').find('.js__total').text(total);
      });

      $(document).on('change', '.js_select_cc', function (e) {
        var tel_place = $(this).find(":selected").data('tel');
        $(this).closest('.select').next('.js_phone_cc').val(tel_place).focus();
      });

      // forget password
      $(document).on('submit', '.js_forget_pass', function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();

        $('.js_forget_pass').find('button').attr("disabled", true);
        var route_forget = $(this).attr('action');
        var user_email = $('.js__mail_forget').val();
        $.ajax({
          method: 'POST',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          url: route_forget,
          data: {
            email: user_email
          },
          success: function (response) {
            $('.js_forget_pass button').removeAttr("disabled");
            if (response) {
              console.log(response);

              if (response.msg) {
                $('.popup').removeClass('active');
                $('.popup-print').addClass('active');
              }
            }
          },
          error: function (error) {
            $('.js_forget_pass button').removeAttr("disabled");
          }
        });
      });

      $(document).on('click', '.js_scroll_calc', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $("html, body").animate({
          scrollTop: $(id).offset().top
        }, 'fast');
      });

      // copy coupon
      $(document).on('click', '.js_user_copy', function (e) {
        var code = $('.js_code_cup').val();
        const el = document.createElement('textarea');
        el.value = code;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      });

      $(document).on('keyup', '.js_prod_count', function (e) {
        var val = $(this).val();
        var index = $(this).data('index');

        if (val == 0) return;

        var form_data = new FormData;
        form_data.append('count', val);
        form_data.append('index', index);

        // update count
        $.ajax({
          processData: false,
          contentType: false,
          type: 'POST',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          url: '/basket/update/count',
          data: form_data,
          success: function (response) {
            if (response) {
              var data = jQuery.parseJSON(response);
              if (data.success) {
                location.reload();
              }
            }
          },
          error: function (error) {
            console.log(error);
          }
        });


      });

      $(document).on('submit', '.js_print_sale', function (e) {
        e.preventDefault();
        var $input = $("#js_print_sale");
        var form_data = new FormData;
        form_data.append('image', $input.prop('files')[0]);

        $('.js_spinner').addClass('spinner');

        var cur_btn = $(this).find('button');
        cur_btn.attr('disabled', true);

        $.ajax({
          processData: false,
          contentType: false,
          type: 'POST',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          url: '/user/send_screen',
          data: form_data,
          success: function (response) {
            cur_btn.removeAttr('disabled');
            $('.js_spinner').removeClass('spinner');
            if (response) {
              if (response.message == 'Invalid filesize or extension.') {
                var msg = $('body').data('err_file');
                alert(msg);
              }

              if (response.message ==
                'The image must be a file of type: png, bmp, jpg, jpeg.') {
                var msg = $('body').data('err_file');
                alert(msg);
              }

              if (response.message == 'Success') {
                var msg = $('body').data('suc_send_fb_sale');
                $('.popup-print-screen').removeClass('active');
                $('.popup-print').addClass('active');
                $('.popup-print').find('.js_mod_text').text(msg);
              }
            }
          },
          error: function (error) {
            cur_btn.removeAttr('disabled');
            $('.js_spinner').removeClass('spinner');
            console.log(error);
          }
        });

      });

      $(document).on('submit', '.js_dates_form', function (e) {
        e.preventDefault();
        var date1 = $('.js_date1').val();
        var torj1 = $('.js_torj1').val();
        var date2 = $('.js_date2').val();
        var torj2 = $('.js_torj2').val();

        var form_data = new FormData;
        form_data.append('date1', date1);
        form_data.append('torj1', torj1);
        form_data.append('date2', date2);
        form_data.append('torj2', torj2);

        $.ajax({
          processData: false,
          contentType: false,
          type: 'POST',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          url: $('#routes_links').data('send_dates'),
          data: form_data,
          success: function (response) {
            if (response) {
              if (response.message == 1 || response.message == '1') {
                $('.popup-dates').removeClass('active');
                $('.popup-act-act').addClass('active');
                var msg = $('body').data('suc_dates');
                $('.popup-act-act').find('.p__mod__title').children('span').eq(
                  0).text(msg);
              }
            }
          },
          error: function (error) {
            console.log(error);
          }
        });
      });

      $(document).on('submit', '.js_free_image', function (e) {
        e.preventDefault();
        var form_data = new FormData;
        var is_return = 0;

        $('.js_spinner').jmspinner('large');

        let TotalImages = $('#js_free_img')[0].files.length;
        let images = $('#js_free_img')[0];
        for (let i = 0; i < TotalImages; i++) {
          var file_size = images.files[i].size / 1024 / 1024;
          if ((file_size > 50) || (TotalImages > 10)) {
            var err_msg = $('body').data('err_file');
            alert(err_msg);
            is_return = 1;
            break;
          }
          form_data.append('images[]', images.files[i]);
        }

        if (is_return == 1) {
          return;
        }

        $.ajax({
          processData: false,
          contentType: false,
          type: 'POST',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          url: $('#routes_links').data('user_free_img'),
          data: form_data,
          success: function (response) {
            $('.js_spinner').jmspinner(false);
            if (response) {
              if (response.message == 'Invalid filesize or extension.') {
                var msg = $('body').data('err_file');
                alert(msg);
              }

              if (response.message == 'Success') {
                var msg = $('body').data('suc_send');
                $('.popup-photo').removeClass('active');
                $('.popup-act-conf').find('.p__mod__title').html(msg);
                $('.popup-act-conf').addClass('active');
              }
            }
          },
          error: function (error) {
            $('.js_spinner').jmspinner(false);
            console.log(error);
          }
        });

      });

      $(document).on('submit', '.js_coupon_form', function (e) {
        e.preventDefault();

        var coupon = $(".js_coupon").val();
        var form_data = new FormData;
        form_data.append('coupon', coupon);

        $.ajax({
          processData: false,
          contentType: false,
          type: 'POST',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          url: $('#routes_links').data('coupon_use'),
          data: form_data,
          success: function (response) {
            if (response) {
              if (response.finded == 1) {
                document.location.reload(true);
              }

            }
          },
          error: function (error) {
            console.log(error);
          }
        });

      });

      $(document).on('submit', '.js_gift_form', function (e) {
        e.preventDefault();
        var form_data = new FormData;


        var summ = $('.js_summ').val();
        if (summ == 0) {
          summ = $('.js_custom_summ').val();
        }

        var name = $(this).data('name');
        var date = $('.js_date').val();
        var sender = $('.js_sender').val();
        var res = $('.js_receiver').val();
        var torjname = $('.js_torj_title').val();
        var torjtext = $('.js_torj_text').val();
        var card_type = $('input[name="el_type"]:checked').val();
        var hide_nom = $('.js_hide_nom').is(":checked");

        form_data.append('name', name);
        form_data.append('summ', summ);
        form_data.append('date', date);
        form_data.append('sender', sender);
        form_data.append('res', res);
        form_data.append('torjname', torjname);
        form_data.append('torjtext', torjtext);
        form_data.append('card_type', card_type);
        form_data.append('hide_nom', hide_nom); // false/true

        $.ajax({
          processData: false,
          contentType: false,
          type: 'POST',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          url: $('#routes_links').data('send_gift_card'),
          data: form_data,
          success: function (response) {
            if (response) {
              var res = JSON.parse(response);
              if (res.success) {
                $('.popup-bask-add').addClass('active');
                var cur_count = $('#smallCart').text();
                var new_val = parseInt(cur_count);
                $('#smallCart').text(++new_val);
              } else {
                alert(res.message);
              }

            }
          },
          error: function (error) {
            console.log(error);
          }
        });





      });

      $(document).on('click', '.modular-shapes button', function (e) {
        $(this).addClass('js__selected');
        $(this).siblings().removeClass('js__selected');
      });

    });

    var Events = function () {
      this.Events = {};
    }

    Events.prototype.addEventListener = function (type, callback, useCapture) {
      if (!this.Events[type]) {
        this.Events[type] = [];
      }

      if (useCapture) {
        this.Events[type].unshift(callback);
      } else {
        this.Events[type].push(callback);
      }
    }

    Events.prototype.removeEventListener = function (type, callback) {
      if (this.Events[type]) {
        var list = this.Events[type];


        var counter = 0;

        while (counter < list.length) {
          if (list[counter] == callback) {
            list.splice(counter, 1);
            break;
          }
          counter++;
        }

        if (list.length == 0) {
          delete this.Events[type];
        }
      }
    }

    Events.prototype.dispatch = function (type, obj) {
      if (this.Events[type]) {
        for (var key in this.Events[type])
          if (this.Events[type][key](obj)) return true;
      }
    }

    var MouseEvents = function (dom, trigger) {
      this.dom = dom;
      this.trigger = trigger;
      this.isDown = false;

      var mousedown = function (e) {
        this.isDown = true;
        var data = this.getData(e);
        this.trigger.dispatch("mousedown", data);
      }.bind(this);

      var touchstart = function (e) {
        this.isDown = true;
        var data = this.getDataTouch(e);
        this.trigger.dispatch("mousedown", data);
      }.bind(this);

      var touchmove = function (e) {
        var data = this.getDataTouch(e);
        if (data.is || this.isDown) this.trigger.dispatch("mousemove", data);
      }.bind(this);

      var touchend = function (e) {
        if (this.isDown) {
          var data = this.getDataTouch(e);
          this.isDown = false;
          this.trigger.dispatch("mouseup", data);

        }

      }.bind(this);

      var mousemove = function (e) {
        var data = this.getData(e);
        if (data.is || this.isDown) this.trigger.dispatch("mousemove", data);
      }.bind(this);

      var mouseup = function (e) {
        if (this.isDown) {
          var data = this.getData(e);
          this.trigger.dispatch("mouseup", data);
          this.isDown = false;
        }
      }.bind(this);

      var wheel = function (e) {
        var data = this.getData(e);
        data.deltaY = e.deltaY || e.detail || e.wheelDelta;
        if (this.trigger.dispatch("wheel", data)) e.preventDefault();

      }.bind(this);

      this.on = function () {
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
        dom.addEventListener('mousedown', mousedown);
        dom.addEventListener("wheel", wheel);
        dom.addEventListener('touchstart', touchstart);
        dom.addEventListener('touchmove', touchmove);
        dom.addEventListener('touchend', touchend);

      }

      this.off = function () {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
        dom.removeEventListener('mousedown', mousedown);
        dom.removeEventListener("wheel", wheel);
        dom.removeEventListener('touchstart', touchstart);
        dom.removeEventListener('touchmove', touchmove);
        dom.removeEventListener('touchend', touchend);
      }
    }

    MouseEvents.prototype.getData = function (domEvent) {
      var rect = this.dom.getBoundingClientRect();

      var data = {
        Pos: {},
        SinglePos: {}
      };

      data.Pos.x = domEvent.clientX - rect.left;
      data.Pos.y = domEvent.clientY - rect.top;
      data.SinglePos.x = (1 / this.dom.clientWidth) * data.Pos.x;
      data.SinglePos.y = (1 / this.dom.clientHeight) * data.Pos.y;
      data.is = (data.SinglePos.x >= 0 && data.SinglePos.y >= 0 && data.SinglePos.x <= 1 && data.SinglePos.y <=
        1);

      return data;
    }

    MouseEvents.prototype.getDataTouch = function (domEvent) {
      var rect = this.dom.getBoundingClientRect();

      var data = {
        Pos: {},
        SinglePos: {}
      };

      data.Pos.x = domEvent.changedTouches[0].clientX - rect.left;
      data.Pos.y = domEvent.changedTouches[0].clientY - rect.top;

      data.SinglePos.x = (1 / this.dom.clientWidth) * data.Pos.x;
      data.SinglePos.y = (1 / this.dom.clientHeight) * data.Pos.y;

      data.is = (data.SinglePos.x >= 0 && data.SinglePos.y >= 0 && data.SinglePos.x <= 1 && data.SinglePos.y <=
        1);

      return data;
    }

    function InteriorGenerator(canvas, width = 500) {
      Events.call(this);

      new MouseEvents(canvas, this).on();

      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');

      this.width = width;

      this.ram_width = 0;
      this.portrait_height = 200;
      this.portrait_width = 200;
      this.interior_height = 500;
      this.interior_width = 500;

      this.canvas.height = this.interior_height;
      this.canvas.width = this.interior_width;

      this.portrait_pos_x = 0;
      this.portrait_pos_y = 0;

      this.zoom = 1;

      this.offset_x = 0;
      this.offset_y = 0;

      this.InitTranslatePortrait();
      this.InitManipulation();
    }

    InteriorGenerator.prototype = Object.assign({}, Events.prototype);

    InteriorGenerator.prototype.ratio = function () {
      return this.zoom * (this.canvas.width / this.interior_width);
    }

    InteriorGenerator.prototype.ram_side = function (len, offset) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.ram_width, this.ram_width - 0.1);
      this.ctx.lineTo(this.ram_width, len - this.ram_width + 0.1);
      this.ctx.lineTo(0, len);
      this.ctx.lineTo(0, 0);
      this.ctx.clip();
      var scale = this.ram_width / this.ram_img.width;
      this.ctx.scale(scale, scale);
      this.ctx.drawImage(this.ram_img, 0, -offset);
      this.ctx.restore();
    }

    InteriorGenerator.prototype.ram = function () {
      this.ctx.save();
      var offset = 0;

      this.ram_side(this.portrait_height, offset);
      offset += this.portrait_height;

      this.ctx.save();
      this.ctx.translate(0, this.portrait_height);
      this.ctx.rotate(-Math.PI / 2);
      this.ram_side(this.portrait_width, offset);
      offset += this.portrait_width;
      this.ctx.restore();
      this.ctx.save();
      this.ctx.translate(this.portrait_width, this.portrait_height);
      this.ctx.rotate(Math.PI);
      this.ram_side(this.portrait_height, offset);
      offset += this.portrait_height;
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.portrait_width, 0);
      this.ctx.rotate(Math.PI / 2);
      this.ram_side(this.portrait_width, offset);
      offset += this.portrait_width;
      this.ctx.restore();
      this.ctx.restore();
    }

    InteriorGenerator.prototype.interior = function () {
      if (this.interior_img) {
        this.ctx.save();
        var s = Math.max(this.interior_width / this.interior_img.width, this.interior_height / this.interior_img
          .height);
        this.ctx.scale(s, s);
        this.ctx.drawImage(this.interior_img, 0, 0);
        this.ctx.restore();
      }
    }

    InteriorGenerator.prototype.Portrait = function () {
      if (this.portrait_img) {
        this.ctx.save();
        var w = this.portrait_width - (this.ram_width * 2);
        var h = this.portrait_height - (this.ram_width * 2);

        let s = Math.min(w / this.portrait_img.width, h / this.portrait_img.height);

        this.ctx.translate(this.ram_width, this.ram_width);
        this.ctx.scale(s, s);

        if (this.portrait_clips) {
          var region = new Path2D();

          for (var i = 0; i < this.portrait_clips.length; i++) {
            var clip = this.portrait_clips[i];

            region.rect(clip.x * this.portrait_img.width, clip.y * this.portrait_img.height, clip.width *
              this.portrait_img.width, clip.height * this.portrait_img.height);
          }

          this.ctx.clip(region, "evenodd");
        }

        this.ctx.drawImage(this.portrait_img, 0, 0);
        this.ctx.restore();
      }

      if (this.ram_img) this.ram();


    }

    InteriorGenerator.prototype.render = function () {
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.save();
      var ratio = this.ratio();

      this.ctx.scale(ratio, ratio);
      this.ctx.translate(-this.offset_x, -this.offset_y);

      this.interior();

      this.ctx.translate(this.portrait_pos_x, this.portrait_pos_y);

      this.ctx.translate(-this.portrait_width / 2, -this.portrait_height / 2);

      this.Portrait();

      this.ctx.restore();

    }


    InteriorGenerator.prototype.addZoom = function (value, pos_center) {
      this.zoom = this.zoom * value;
      if (this.zoom < 1) this.zoom = 1;
      if (this.zoom > 7) this.zoom = 7;

      var ratio = this.ratio();

      this.offset_x -= (pos_center.x / ratio) - ((pos_center.x / ratio) * value);
      this.offset_y -= (pos_center.y / ratio) - ((pos_center.y / ratio) * value);

      this.offset_x = Math.max(Math.min(((this.interior_width * ratio) - this.canvas.width) / ratio, this
        .offset_x), 0);
      this.offset_y = Math.max(Math.min(((this.interior_height * ratio) - this.canvas.height) / ratio, this
        .offset_y), 0);

      this.render();
    }

    InteriorGenerator.prototype.plus_Zoom = function () {
      var ratio = this.ratio();
      this.addZoom(1.2, {
        x: (this.portrait_pos_x * ratio) - (this.offset_x * ratio),
        y: (this.portrait_pos_y * ratio) - (this.offset_y * ratio)
      })
    }

    InteriorGenerator.prototype.minus_Zoom = function () {
      var ratio = this.ratio();
      this.addZoom(0.8, {
        x: (this.portrait_pos_x * ratio) - (this.offset_x * ratio),
        y: (this.portrait_pos_y * ratio) - (this.offset_y * ratio)
      })
    }


    InteriorGenerator.prototype.InitManipulation = function () {
      var wheel = function (e) {
        var delta = e.deltaY || e.detail || e.wheelDelta;
        this.addZoom(delta > 0 ? 0.8 : 1.2, e.Pos);
        return true;
      }.bind(this);

      this.addEventListener("wheel", wheel);
      var mousedown = function (e_d) {
        var old_offset_x = this.offset_x;
        var old_offset_y = this.offset_y;

        this.canvas.style.cursor = "move";

        var mousemove = function (e_m) {
          var ratio = this.ratio();

          this.offset_x = old_offset_x + ((e_d.Pos.x - e_m.Pos.x) / ratio);
          this.offset_y = old_offset_y + ((e_d.Pos.y - e_m.Pos.y) / ratio);
          this.offset_x = Math.max(Math.min(((this.interior_width * ratio) - this.canvas.width) /
            ratio, this.offset_x), 0);
          this.offset_y = Math.max(Math.min(((this.interior_height * ratio) - this.canvas.height) /
            ratio, this.offset_y), 0);
          this.render();

          return true;

        }.bind(this);

        var mouseup = function () {
          this.canvas.style.cursor = "default";

          this.removeEventListener("mousemove", mousemove);
          this.removeEventListener("mouseup", mouseup);

        }.bind(this);

        this.addEventListener("mousemove", mousemove);
        this.addEventListener("mouseup", mouseup);

        this.render();

      }.bind(this);

      this.addEventListener("mousedown", mousedown);

    }

    InteriorGenerator.prototype.InitTranslatePortrait = function () {
      var mousedown = function (e_d) {
        var ratio = this.ratio();

        var x = (e_d.Pos.x / ratio) + this.offset_x;
        var y = (e_d.Pos.y / ratio) + this.offset_y;

        if (x > this.portrait_pos_x - (this.portrait_width / 2) && x < this.portrait_pos_x + (this
          .portrait_width / 2) &&
          y > this.portrait_pos_y - (this.portrait_height / 2) && y < this.portrait_pos_y + (this
            .portrait_height / 2)) {

          this.canvas.style.cursor = "move";

          var old_x = this.portrait_pos_x;
          var old_y = this.portrait_pos_y;

          var mousemove = function (e_m) {
            var ratio = this.ratio();

            this.portrait_pos_x = old_x + ((e_m.Pos.x - e_d.Pos.x) / ratio);
            this.portrait_pos_y = old_y + ((e_m.Pos.y - e_d.Pos.y) / ratio);

            this.PortraitIn();

            this.render();

            return true;

          }.bind(this);



          var mouseup = function () {
            this.canvas.style.cursor = "default";
            this.removeEventListener("mousemove", mousemove);
            this.removeEventListener("mouseup", mouseup);

          }.bind(this);

          this.addEventListener("mousemove", mousemove);
          this.addEventListener("mouseup", mouseup);

          return true;
        }

      }.bind(this);

      this.addEventListener("mousedown", mousedown);
    }

    InteriorGenerator.prototype.PortraitIn = function () {
      this.portrait_pos_x = Math.max(this.portrait_pos_x, this.portrait_width / 2);
      this.portrait_pos_y = Math.max(this.portrait_pos_y, this.portrait_height / 2);
      this.portrait_pos_x = Math.min(this.interior_width - (this.portrait_width / 2), this.portrait_pos_x);
      this.portrait_pos_y = Math.min((this.interior_height / 1.7) - (this.portrait_height / 2), this
        .portrait_pos_y);
    }

    InteriorGenerator.prototype.setPortrait = function (src, canvas_width, canvas_height, clips) {
      var img = new Image();
      img.src = src;

      img.onload = function () {
        this.portrait_img = img;
        this.portrait_canvas_width = canvas_width;
        this.portrait_canvas_height = canvas_height;
        this.portrait_width = (this.ram_width * 2) + this.portrait_canvas_width;
        this.portrait_height = (this.ram_width * 2) + this.portrait_canvas_height;
        this.portrait_clips = clips;

        this.PortraitIn();

        this.render();
      }.bind(this);
    }

    InteriorGenerator.prototype.setRam = function (src, ram_width = 0) {
      this.ram_width = ram_width;
      this.portrait_width = (this.ram_width * 2) + this.portrait_canvas_width;
      this.portrait_height = (this.ram_width * 2) + this.portrait_canvas_height;

      this.PortraitIn();

      if (src) {
        var img = new Image();
        img.src = src;

        img.onload = function () {
          this.ram_img = img;
          this.render();
        }.bind(this);

      } else {
        this.ram_img = undefined;
        this.render();
      }
    }

    InteriorGenerator.prototype.setPortraitPosDefault = function () {
      this.portrait_pos_x = (this.interior_width / 2);
      this.portrait_pos_y = (this.interior_height / 4);
    }

    InteriorGenerator.prototype.setInterior = function (src) {

      var img = new Image();
      img.src = src;
      img.onload = function () {
        this.interior_img = img;


        this.maximum_updata();

        this.interior_height = this.interior_width * (this.interior_img.height / this.interior_img.width);
        this.setPortraitPosDefault();

        this.render();
      }.bind(this);
    }

    InteriorGenerator.prototype.maximum_updata = function () {
      if (this.interior_img) {

        var ratio = Math.min(this.maximum_height / this.interior_img.height, this.maximum_width / this
          .interior_img.width);
        this.canvas.width = this.interior_img.width * ratio;
        this.canvas.height = this.interior_img.height * ratio;
        this.render();
      }
    }

    InteriorGenerator.prototype.maximum = function (width, height) {
      this.maximum_width = width;
      this.maximum_height = height;
      this.maximum_updata();
    }


    InteriorGenerator.prototype.setWidth = function (value) {
      this.width = value;
      this.canvas.width = this.width;

      if (this.interior_img)
        this.canvas.height = this.interior_img.height * (this.width / this.interior_img.width);

      this.render();
    }

    InteriorGenerator.prototype.setInteriorWidth = function (width) {
      this.interior_width = width;

      if (this.interior_img) {
        this.interior_height = this.interior_width * (this.interior_img.height / this.interior_img.width);
        this.setPortraitPosDefault();

        this.render();
      }
    }