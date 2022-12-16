
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

testWebP(function(support) {
    if (support) {
        $("html").addClass("webp");
    } else {
        $("html").addClass("no-webp");
    }
});

"ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? $("html").addClass(
    "js_touch") : $("html").addClass("js_no_touch");
var calc_float_val = function(t) {
    var a = Number(t);
    return parseFloat(a).toFixed(2)
};

function dataURItoBlob(t) {
    var a, e;
    a = -1 !== t.split(",")[0].indexOf("base64") ? atob(t.split(",")[1]) : decodeURI(t.split(",")[1]), e = t.split(
        ",")[0].split(":")[1].split(";")[0];
    for (var s = new Array, i = 0; i < a.length; i++) s[i] = a.charCodeAt(i);
    return new Blob([new Uint8Array(s)], {
        type: e
    })
}
$(document).on("click", ".js_mod_collapse", function(t) {
    t.PreventDefault, $(this).toggleClass("js_vis"), $(this).hasClass("js_vis") ? ($(this).find("span")
        .text($(this).data("hide")), $(this).prev().css("height", "100%"), $(this).prev().animate({
            height: "auto"
        }, 1)) : ($(this).find("span").text($(this).data("show")), $(this).prev().css("height",
        "467px"), $(this).prev().animate({
        height: 467
    }, 1))
});

// check support passive events listeners
var supportsPassive = false;
document.createElement("div").addEventListener("test", _ => {}, {
    get passive() {
        supportsPassive = true
    }
});
/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */
$(function() {
    var $q = function(q, res) {
            if (document.querySelectorAll) {
                res = document.querySelectorAll(q);
            } else {
                var d = document,
                    a = d.styleSheets[0] || d.createStyleSheet();
                a.addRule(q, 'f:b');
                for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
                    l[b].currentStyle.f && c.push(l[b]);

                a.removeRule(0);
                res = c;
            }
            return res;
        },
        addEventListener = function(evt, fn) {
            window.addEventListener ?
                this.addEventListener(evt, fn, false) :
                (window.attachEvent) ?
                this.attachEvent('on' + evt, fn) :
                this['on' + evt] = fn;
        },
        _has = function(obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
        };

    function loadImage(el, fn) {
        var img = new Image(),
            src = el.getAttribute('data-src');
        img.onload = function() {
            if (!!el.parent)
                el.parent.replaceChild(img, el)
            else
                el.src = src;

            fn ? fn() : null;
        }
        img.src = src;
    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect()

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
    }

    var images = new Array(),
        query = $q('img.lazy'),
        processScroll = function() {
            for (var i = 0; i < images.length; i++) {
                if (elementInViewport(images[i])) {
                    loadImage(images[i], function() {
                        images.splice(i, i);
                    });
                }
            };
        };

    for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll', processScroll, supportsPassive ? {
        passive: true
    } : false);

});