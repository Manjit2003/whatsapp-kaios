"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [179],
  {
    663: function (e, a, t) {
      function n(e, a, t) {
        return new Promise((n) => {
          var r = document.createElement("canvas");
          (r.width = a), (r.height = 2 * t);
          var i = r.getContext("2d", { willReadFrequently: !0 });
          i.drawImage(e, 0, 0, a, t);
          for (
            var d = i.getImageData(0, 0, a, 2 * t), s = a * t * 4, o = 0;
            o < s;
            o += 4
          )
            (d.data[s + o] = d.data[o + 3]),
              (d.data[s + o + 1] = d.data[o + 3]),
              (d.data[s + o + 2] = d.data[o + 3]),
              (d.data[s + o + 3] = d.data[o + 3]);
          i.putImageData(d, 0, 0),
            r.toBlob(
              (e) => {
                n(e);
              },
              "image/jpeg",
              0.8
            );
        });
      }
      t.r(a),
        t.d(a, "processWebpToCanvas", function () {
          return i;
        });
      var r = new (t(297).a)(5);
      function i(e, a, t, i) {
        var d =
          !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        __LOG__(
          2
        )`WebP: processing webp as device doesn't support Webp natively`;
        var s = r.get(e);
        return (
          null == s &&
            ((s = i.sendAndReceive("backend", "decodeWebPImage", {
              buffer: t,
              scaleCount: d ? 2 : 1,
            })),
            r.set(e, s)),
          s
            .then((e) => {
              performance.now(), (a.width = e.width), (a.height = e.height);
              var t = new ImageData(
                new Uint8ClampedArray(e.rgba),
                e.width,
                e.height
              );
              return (
                a.getContext("2d").putImageData(t, 0, 0),
                d ? n(a, e.width, e.height) : null
              );
            })
            .then((a) => (null != a && i.saveAlphaJpegStickerBlob(e, a), !0))
            .catch(
              (e) => (
                __LOG__(4)`Stickers processing failed with the message: ${e}.`,
                SEND_LOGS("webp-processing-failed"),
                !1
              )
            )
        );
      }
    },
  },
]);
