!(function (a) {
    a.addModule(function (a) {
      "use strict";
      return {
        name: "Range",
        selector: '.range-input',
        options: {
          realElementClass: "jcf-real-element",
          fakeStructure:
            '<span class="jcf-range"><span class="jcf-range-wrapper"><span class="bg-size"></span><span class="jcf-range-track"><span class="jcf-range-handle"></span></span></span></span>',
          dataListMark: '<span class="jcf-range-mark"></span>',
          rangeDisplayWrapper: '<span class="jcf-range-display-wrapper"></span>',
          rangeDisplay: '<span class="jcf-range-display"></span>',
          handleSelector: ".jcf-range-handle",
          bgSize: '.bg-size',
          trackSelector: ".jcf-range-track",
          activeHandleClass: "jcf-active-handle",
          verticalClass: "jcf-vertical",
          orientation: "horizontal",
          range: !1,
          dragHandleCenter: !0,
          snapToMarks: !0,
          snapRadius: 5,
          minRange: 0,
        },
        matchElement: function (a) {
          return a.is(this.selector);
        },
        init: function () {
          this.initStructure(), this.attachEvents(), this.refresh();
        },
        initStructure: function () {
          for (
            this.page = a("html"),
              this.realElement = a(this.options.element).addClass(
                this.options.hiddenClass
              ),
              this.fakeElement = a(this.options.fakeStructure)
                .insertBefore(this.realElement)
                .prepend(this.realElement),
              this.track = this.fakeElement.find(this.options.trackSelector),
              this.trackHolder = this.track.parent(),
              this.handle = this.fakeElement.find(this.options.handleSelector),
              this.createdHandleCount = 0,
              this.activeDragHandleIndex = 0,
              this.isMultiple =
                this.realElement.prop("multiple") ||
                "string" == typeof this.realElement.attr("multiple"),
              this.values = this.isMultiple
                ? this.realElement.attr("value").split(",")
                : [this.realElement.val()],
              this.handleCount = this.isMultiple ? this.values.length : 1,
              this.rangeDisplayWrapper = a(
                this.options.rangeDisplayWrapper
              ).insertBefore(this.track),
              ("min" === this.options.range || "all" === this.options.range) &&
                (this.rangeMin = a(this.options.rangeDisplay)
                  .addClass("jcf-range-min")
                  .prependTo(this.rangeDisplayWrapper)),
              ("max" === this.options.range || "all" === this.options.range) &&
                (this.rangeMax = a(this.options.rangeDisplay)
                  .addClass("jcf-range-max")
                  .prependTo(this.rangeDisplayWrapper));
            this.createdHandleCount < this.handleCount;
  
          )
            this.createdHandleCount++,
              this.handle
                .clone()
                .addClass("jcf-index-" + this.createdHandleCount)
                .insertBefore(this.handle),
              this.createdHandleCount > 1 &&
                (this.rangeMid || (this.rangeMid = a()),
                (this.rangeMid = this.rangeMid.add(
                  a(this.options.rangeDisplay)
                    .addClass("jcf-range-mid")
                    .prependTo(this.rangeDisplayWrapper)
                )));
          this.handle.detach(),
            (this.handle = null),
            (this.handles = this.fakeElement.find(this.options.handleSelector)),
            this.handles.eq(0).addClass(this.options.activeHandleClass),
            (this.isVertical = "vertical" === this.options.orientation),
            (this.directionProperty = this.isVertical ? "top" : "left"),
            (this.offsetProperty = this.isVertical ? "bottom" : "left"),
            (this.eventProperty = this.isVertical ? "pageY" : "pageX"),
            (this.sizeProperty = this.isVertical ? "height" : "width"),
            (this.sizeMethod = this.isVertical ? "innerHeight" : "innerWidth"),
            this.fakeElement.css(
              "touchAction",
              this.isVertical ? "pan-x" : "pan-y"
            ),
            this.isVertical &&
              this.fakeElement.addClass(this.options.verticalClass),
            (this.minValue = parseFloat(this.realElement.attr("min"))),
            (this.maxValue = parseFloat(this.realElement.attr("max"))),
            (this.stepValue = parseFloat(this.realElement.attr("step")) || 1),
            (this.minValue = isNaN(this.minValue) ? 0 : this.minValue),
            (this.maxValue = isNaN(this.maxValue) ? 100 : this.maxValue),
            1 !== this.stepValue &&
              (this.maxValue -= (this.maxValue - this.minValue) % this.stepValue),
            (this.stepsCount = (this.maxValue - this.minValue) / this.stepValue),
            this.createDataList();
            console.log(this.offsetProperty)
        },
        attachEvents: function () {
          this.realElement.on({ focus: this.onFocus }),
            this.trackHolder.on("jcf-pointerdown", this.onTrackPress),
            this.handles.on("jcf-pointerdown", this.onHandlePress);
        },
        createDataList: function () {
          var b = this,
            c = [],
            d = this.realElement.attr("list");
          d &&
            (a("#" + d)
              .find("option")
              .each(function () {
                var d,
                  e,
                  f = parseFloat(this.value || this.innerHTML);
                isNaN(f) ||
                  ((e = b.valueToOffset(f)),
                  c.push({ value: f, offset: e }),
                  (d = a(b.options.dataListMark)
                    .text(f)
                    .attr({ "data-mark-value": f })
                    .css(b.offsetProperty, e + "%")
                    .appendTo(b.track)));
              }),
            c.length && (b.dataValues = c));
        },
        getDragHandleRange: function (a) {
          var b = -(1 / 0),
            c = 1 / 0;
          return (
            a > 0 &&
              (b = this.valueToStepIndex(
                parseFloat(this.values[a - 1]) + this.options.minRange
              )),
            a < this.handleCount - 1 &&
              (c = this.valueToStepIndex(
                parseFloat(this.values[a + 1]) - this.options.minRange
              )),
            { minStepIndex: b, maxStepIndex: c }
          );
        },
        getNearestHandle: function (b) {
          this.isVertical && (b = 1 - b);
          var c = this.handles.eq(0),
            d = 1 / 0,
            e = this;
          return (
            this.handleCount > 1 &&
              this.handles.each(function () {
                var f = parseFloat(this.style[e.offsetProperty]) / 100,
                  g = Math.abs(f - b);
                d > g && ((d = g), (c = a(this)));
              }),
            c
          );
        },
        onTrackPress: function (a) {
          var b, c, d;
          a.preventDefault(),
            this.realElement.is(":disabled") ||
              this.activeDragHandle ||
              ((b = this.track[this.sizeMethod]()),
              (c = this.track.offset()[this.directionProperty]),
              (this.activeDragHandle = this.getNearestHandle(
                (a[this.eventProperty] - c) / this.trackHolder[this.sizeMethod]()
              )),
              (this.activeDragHandleIndex = this.handles.index(
                this.activeDragHandle
              )),
              this.handles
                .removeClass(this.options.activeHandleClass)
                .eq(this.activeDragHandleIndex)
                .addClass(this.options.activeHandleClass),
              (d = this.activeDragHandle[this.sizeMethod]() / 2),
              (this.dragData = {
                trackSize: b,
                innerOffset: d,
                trackOffset: c,
                min: c,
                max: c + b,
              }),
              this.page.on({
                "jcf-pointermove": this.onHandleMove,
                "jcf-pointerup": this.onHandleRelease,
              }),
              "mouse" === a.pointerType && this.realElement.focus(),
              this.onHandleMove(a));
        },
        onHandlePress: function (b) {
          var c, d, e;
          b.preventDefault(),
            this.realElement.is(":disabled") ||
              this.activeDragHandle ||
              ((this.activeDragHandle = a(b.currentTarget)),
              (this.activeDragHandleIndex = this.handles.index(
                this.activeDragHandle
              )),
              this.handles
                .removeClass(this.options.activeHandleClass)
                .eq(this.activeDragHandleIndex)
                .addClass(this.options.activeHandleClass),
              (c = this.track[this.sizeMethod]()),
              (d = this.track.offset()[this.directionProperty]),
              (e = this.options.dragHandleCenter
                ? this.activeDragHandle[this.sizeMethod]() / 2
                : b[this.eventProperty] -
                  this.handle.offset()[this.directionProperty]),
              (this.dragData = {
                trackSize: c,
                innerOffset: e,
                trackOffset: d,
                min: d,
                max: d + c,
              }),
              this.page.on({
                "jcf-pointermove": this.onHandleMove,
                "jcf-pointerup": this.onHandleRelease,
              }),
              "mouse" === b.pointerType && this.realElement.focus());
        },
        onHandleMove: function (b) {
          var c,
            d,
            e,
            f,
            g,
            h = this;
          if (
            ((c = this.isVertical
              ? this.dragData.max +
                (this.dragData.min - b[this.eventProperty]) -
                this.dragData.innerOffset
              : b[this.eventProperty] - this.dragData.innerOffset),
            c < this.dragData.min
              ? (c = this.dragData.min)
              : c > this.dragData.max && (c = this.dragData.max),
            b.preventDefault(),
            this.options.snapToMarks && this.dataValues)
          ) {
            var i = c - this.dragData.trackOffset;
            (d =
              ((c - this.dragData.trackOffset) / this.dragData.trackSize) * 100),
              a.each(this.dataValues, function (a, b) {
                var c = (b.offset / 100) * h.dragData.trackSize,
                  e = c - h.options.snapRadius,
                  f = c + h.options.snapRadius;
                return i >= e && f >= i ? ((d = b.offset), !1) : void 0;
              });
          } else
            d = ((c - this.dragData.trackOffset) / this.dragData.trackSize) * 100;
          (e = Math.round((d * this.stepsCount) / 100)),
            this.handleCount > 1 &&
              ((g = this.getDragHandleRange(this.activeDragHandleIndex)),
              e < g.minStepIndex
                ? (e = Math.max(g.minStepIndex, e))
                : e > g.maxStepIndex && (e = Math.min(g.maxStepIndex, e))),
            (f = e * (100 / this.stepsCount)),
            this.dragData.stepIndex !== e &&
              ((this.dragData.stepIndex = e),
              (this.dragData.offset = f),
              this.activeDragHandle.css(
                this.offsetProperty,
                this.dragData.offset + "%"
              ),
              (this.values[this.activeDragHandleIndex] =
                "" + this.stepIndexToValue(e)),
              this.updateValues(),
              this.realElement.trigger("input"));
              $(this.options.bgSize).css('width', `${this.dragData.offset}%`)
              console.log(this.dragData.offset)
        },
        onHandleRelease: function () {
          var a;
          "number" == typeof this.dragData.offset &&
            ((a = this.stepIndexToValue(this.dragData.stepIndex)),
            this.realElement.val(a).trigger("change")),
            this.page.off({
              "jcf-pointermove": this.onHandleMove,
              "jcf-pointerup": this.onHandleRelease,
            }),
            delete this.activeDragHandle,
            delete this.dragData;
        },
        onFocus: function () {
          this.fakeElement.hasClass(this.options.focusClass) ||
            (this.fakeElement.addClass(this.options.focusClass),
            this.realElement.on({ blur: this.onBlur, keydown: this.onKeyPress }));
        },
        onBlur: function () {
          this.fakeElement.removeClass(this.options.focusClass),
            this.realElement.off({ blur: this.onBlur, keydown: this.onKeyPress });
        },
        onKeyPress: function (a) {
          var b = 38 === a.which || 39 === a.which,
            c = 37 === a.which || 40 === a.which;
          if (9 === a.which && this.handleCount > 1) {
            if (a.shiftKey && this.activeDragHandleIndex > 0)
              this.activeDragHandleIndex--;
            else {
              if (
                a.shiftKey ||
                !(this.activeDragHandleIndex < this.handleCount - 1)
              )
                return;
              this.activeDragHandleIndex++;
            }
            a.preventDefault(),
              this.handles
                .removeClass(this.options.activeHandleClass)
                .eq(this.activeDragHandleIndex)
                .addClass(this.options.activeHandleClass);
          }
          (c || b) &&
            (a.preventDefault(), this.step(b ? this.stepValue : -this.stepValue));
        },
        updateValues: function () {
          var a = this.values.join(",");
          this.values.length > 1
            ? (this.realElement.prop("valueLow", this.values[0]),
              this.realElement.prop(
                "valueHigh",
                this.values[this.values.length - 1]
              ),
              this.realElement.val(a),
              this.realElement.val() !== a &&
                this.realElement.val(this.values[this.values.length - 1]))
            : this.realElement.val(a),
            this.updateRanges();
        },
        updateRanges: function () {
          var a,
            b = this;
          this.rangeMin &&
            ((a = this.handles[0]),
            this.rangeMin
              .css(this.offsetProperty, 0)
              .css(this.sizeProperty, a.style[this.offsetProperty])),
            this.rangeMax &&
              ((a = this.handles[this.handles.length - 1]),
              this.rangeMax
                .css(this.offsetProperty, a.style[this.offsetProperty])
                .css(
                  this.sizeProperty,
                  100 - parseFloat(a.style[this.offsetProperty]) + "%"
                )),
            this.rangeMid &&
              this.handles.each(function (a, c) {
                var d, e;
                a > 0 &&
                  ((d = b.handles[a - 1]),
                  (e = b.rangeMid[a - 1]),
                  (e.style[b.offsetProperty] = d.style[b.offsetProperty]),
                  (e.style[b.sizeProperty] =
                    parseFloat(c.style[b.offsetProperty]) -
                    parseFloat(d.style[b.offsetProperty]) +
                    "%"));
              });
        },
        step: function (a) {
          var b = parseFloat(this.values[this.activeDragHandleIndex || 0]),
            c = b,
            d = this.minValue,
            e = this.maxValue;
          isNaN(b) && (c = 0),
            (c += a),
            this.handleCount > 1 &&
              (this.activeDragHandleIndex > 0 &&
                (d =
                  parseFloat(this.values[this.activeDragHandleIndex - 1]) +
                  this.options.minRange),
              this.activeDragHandleIndex < this.handleCount - 1 &&
                (e =
                  parseFloat(this.values[this.activeDragHandleIndex + 1]) -
                  this.options.minRange)),
            c > e ? (c = e) : d > c && (c = d),
            c !== b &&
              ((this.values[this.activeDragHandleIndex || 0] = "" + c),
              this.updateValues(),
              this.realElement.trigger("input").trigger("change"),
              this.setSliderValue(this.values));
        },
        valueToStepIndex: function (a) {
          return (a - this.minValue) / this.stepValue;
        },
        stepIndexToValue: function (a) {
          return this.minValue + this.stepValue * a;
        },
        valueToOffset: function (a) {
          var b = this.maxValue - this.minValue,
            c = (a - this.minValue) / b;
          return 100 * c;
        },
        getSliderValue: function () {
          return a.map(this.values, function (a) {
            return parseFloat(a) || 0;
          });
        },
        setSliderValue: function (a) {
          var b = this;
          this.handles.each(function (c, d) {
            d.style[b.offsetProperty] = b.valueToOffset(a[c]) + "%";
          });
        },
        refresh: function () {
          var a = this.realElement.is(":disabled");
          this.fakeElement.toggleClass(this.options.disabledClass, a),
            this.setSliderValue(this.getSliderValue()),
            this.updateRanges();
        },
        destroy: function () {
          this.realElement
            .removeClass(this.options.hiddenClass)
            .insertBefore(this.fakeElement),
            this.fakeElement.remove(),
            this.realElement.off({
              keydown: this.onKeyPress,
              focus: this.onFocus,
              blur: this.onBlur,
            });
        },
      };
    });
  })(jcf);
  