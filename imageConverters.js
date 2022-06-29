"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [11],
  {
    366: function (e, t, r) {
      function n(e) {
        return (self.simpleVerifyMp4FileIntegrity
          ? Promise.resolve()
          : r.e(177).then(r.t.bind(null, 447, 7))
        )
          .then(() => self.simpleVerifyMp4FileIntegrity("file.bin", e))
          .then(
            (e) => {
              if (null != e.error)
                return (
                  __LOG__(3)`mp4Check error code: ${e.error}`,
                  { type: "error", error: "format_error" }
                );
              var t = e.info.video || null;
              if (t) {
                var r = t.rotation % 360;
                r < 0 && (r += 360), (t.rotation = r);
              }
              return (
                t &&
                  t.rotation % 90 != 0 &&
                  (__LOG__(4)`mp4Check video has non-90 rotation ${t.rotation}`,
                  (t.rotation = null)),
                { type: "success", info: { video: t, audio: null } }
              );
            },
            (e) => (
              __LOG__(3)`mp4Check internal error: ${e}`,
              { type: "error", error: "format_error" }
            )
          );
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    475: function (e, t, r) {
      r.r(t),
        r.d(t, "extractDominantColorFromBlob", function () {
          return p;
        }),
        r.d(t, "PROFILE_PHOTO_SQUARE_MIN_PIXELS", function () {
          return O;
        }),
        r.d(t, "cropAndResizeProfilePicture", function () {
          return M;
        }),
        r.d(t, "scaleDownProfilePictureThumb", function () {
          return R;
        }),
        r.d(t, "cropAndResizeVCardPhoto", function () {
          return G;
        }),
        r.d(t, "cropAndResizeSquareBlob", function () {
          return $;
        }),
        r.d(t, "PREVIEW_PHOTO_MAX_SIZE", function () {
          return D;
        }),
        r.d(t, "scaleImageAndConvertToJpg", function () {
          return Q;
        }),
        r.d(t, "computeMicroThumb", function () {
          return K;
        }),
        r.d(t, "lockVideoProcessing", function () {
          return Y;
        }),
        r.d(t, "videoInfoAndPreview", function () {
          return ne;
        }),
        r.d(t, "extractFrame", function () {
          return ie;
        });
      var n = r(9),
        i = r.n(n),
        a = r(10),
        o = r(43),
        h = r(479),
        u = r(366),
        d = r(25),
        l = r(71),
        g = r(61),
        c = r(95),
        s = r(82),
        m = 192;
      function f(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 13,
            r = new Uint32Array(256),
            n = 0;
          n < e.length;
          n += 4 * t
        ) {
          var i = w(e[n], e[n + 1], e[n + 2]),
            a = ~~(0.2126 * e[n] + 0.7152 * e[n + 1] + 0.0722 * e[n + 2]),
            o =
              (((a & m) >> 6) << 4) |
              (((i[0] & m) >> 6) << 2) |
              ((i[2] & m) >> 6);
          (o *= 4),
            (r[o++] += e[n]),
            (r[o++] += e[n + 1]),
            (r[o++] += e[n + 2]),
            r[o]++;
        }
        return r;
      }
      function w(e, t, r) {
        var n,
          i = Math.max(e, t, r),
          a = Math.min(e, t, r),
          o = 0,
          h = (i + a) >> 1;
        if (i === a) n = 0;
        else {
          var u = i - a;
          switch (((n = h > 127 ? u / (510 - i - a) : u / (i + a)), i)) {
            case e:
              o = (t - r) / u + (t < r ? 6 : 0);
              break;
            case t:
              o = (r - e) / u + 2;
              break;
            case r:
              o = (e - t) / u + 4;
          }
          o /= 6;
        }
        return [255 * o, 255 * n, h];
      }
      function v(e, t) {
        for (var r = [], n = 0; n < t; n++) {
          var i = 4 * n,
            a = e[i + 3];
          a && r.push([a, i]);
        }
        return r;
      }
      function _(e) {
        e.sort(function (e, t) {
          return t[0] - e[0];
        });
      }
      function b(e, t, r) {
        var n,
          i = 0,
          a = [],
          o = Math.min(r, t.length);
        for (n = 0; n < o; n++) {
          var h = t[n][0],
            u = t[n][1],
            d = [~~(e[u] / h), ~~(e[u + 1] / h), ~~(e[u + 2] / h), h];
          a.push(d), (i += h);
        }
        for (n = 0; n < a.length; n++) a[n][3] /= i;
        return a;
      }
      function p(e) {
        var t = URL.createObjectURL(e);
        return new Promise((e, r) => {
          var n = document.createElement("img");
          (n.onload = () => {
            var r = document.createElement("canvas");
            (r.width = n.width), (r.height = n.height);
            var i = r.getContext("2d", { willReadFrequently: !0 });
            i.drawImage(n, 0, 0);
            var a = E(i.getImageData(0, 0, r.width, r.height));
            URL.revokeObjectURL(t), e(a);
          }),
            (n.onerror = () => {
              URL.revokeObjectURL(t), e("transparent");
            }),
            (n.src = t);
        });
      }
      function E(e) {
        var t = (function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 12,
            r = f(e),
            n = v(r, r.length / 4);
          return _(n), b(r, n, t);
        })(e.data);
        return (
          "#" +
          ((1 << 24) + (t[0][0] << 16) + (t[0][1] << 8) + t[0][2])
            .toString(16)
            .slice(1)
        );
      }
      var y = r(76),
        L = r(36),
        U = r(122),
        I = r(23),
        O = 192,
        x = new l.a(),
        P = Promise.resolve();
      function M(e) {
        return C(e, 1280).then((e) => {
          var t = e.naturalWidth,
            r = e.naturalHeight;
          if (t < O || r < O) throw new h.a();
          return z(e, 640, 15e4);
        });
      }
      function R(e) {
        return $(e, 32);
      }
      function G(e) {
        return (function (e, t, r) {
          if (!e.startsWith(o.a))
            throw new Error(
              "Image data url should start with base 64 scheme: " + e
            );
          return F(e, 192).then((e) =>
            (function (e, t, r) {
              __LOG__(2)`cropAndResize picture`;
              var n = H(e, 96),
                i = (e) => {
                  var t = (function (e, t) {
                    return e.toDataURL("image/jpeg", t);
                  })(n, e);
                  if ((0, o.f)(t) < 4e3) return t;
                  if (e > 0.2) return i(e - 0.1);
                  throw new Error("target image size not reached");
                };
              return i(0.8);
            })(e)
          );
        })(e);
      }
      function $(e, t, r) {
        return C(e, 2 * t).then((e) => z(e, t, r));
      }
      function z(e, t, r) {
        return __LOG__(2)`cropAndResize picture`, k(H(e, t), 0.8, r);
      }
      function k(e, t, r) {
        var n = (t) =>
          T(e, t).then((e) => {
            if (
              (__LOG__(
                2
              )`Quality ${t}: resulting blob has size ${e.size} (maxByteSize = ${r})`,
              null == r || e.size < r)
            )
              return e;
            if (t > 0.2) return n(t - 0.1);
            throw new Error("target image size not reached");
          });
        return n(t);
      }
      function T(e, t) {
        return (
          __LOG__(2)`canvasToBlob: ${e.width}x${e.height} canvas, quality=${t}`,
          new Promise((r) => {
            e.toBlob(r, "image/jpeg", t);
          })
        );
      }
      function A(e, t) {
        var r = new Image();
        return new Promise((n, i) => {
          (r.onload = n),
            (r.onerror = (e) => {
              __LOG__(4)`img.onError: ${(0, s.f)(e)}`,
                i(new Error("imageBlobToImgElement img.onerror"));
            }),
            (r.src = e + (null != t && 1 !== t ? "#-moz-samplesize=" + t : ""));
        }).then(() => r);
      }
      function C(e, t) {
        return F(self.URL.createObjectURL(e), t);
      }
      function F(e, t) {
        var r = t || (0, L.f)();
        return A(e, 8)
          .then((t) => {
            for (
              var n = 8 * Math.max(t.width, t.height), i = 1;
              i < 8 && !(n / i <= r);
              i *= 2
            );
            return (
              __LOG__(
                2
              )`imageBlobToImgElement: loading image using -moz-samplesize equal to ${i}`,
              8 === i ? t : A(e, i)
            );
          })
          .finally(() => {
            self.URL.revokeObjectURL(e);
          });
      }
      function H(e, t) {
        var r, n;
        __LOG__(2)`imgElementToSquareCanvasScalingAndCropping`;
        var i = 0,
          a = 0,
          o = e.naturalWidth,
          h = e.naturalHeight;
        o < h
          ? ((n = (h * t) / o),
            (n = Math.round(n)),
            (r = t),
            (a = -1 * Math.round((n - t) / 2)))
          : ((r = (o * t) / h),
            (r = Math.round(r)),
            (n = t),
            (i = -1 * Math.round((r - t) / 2)));
        var u = document.createElement("canvas"),
          d = u.getContext("2d", { willReadFrequently: !0 });
        return (u.width = t), (u.height = t), d.drawImage(e, i, a, r, n), u;
      }
      function W(e, t, r) {
        return e <= r && t <= r
          ? { width: e, height: t }
          : (e > t
              ? ((n = Math.round((t * r) / e)), (i = r))
              : ((i = Math.round((e * r) / t)), (n = r)),
            { width: i, height: n });
        var n, i;
      }
      function q(e, t) {
        return e > y.i
          ? { width: y.i, height: Math.floor((t * y.i) / e) }
          : { width: e, height: t };
      }
      function S(e, t, r) {
        __LOG__(2)`imgElementToCanvasScalingAndRotating`;
        var n = e.naturalWidth,
          i = e.naturalHeight,
          a = i,
          o = n;
        (90 !== r && 270 !== r) || ((a = n), (o = i));
        var u,
          d,
          l,
          g,
          c = W(o, a, t),
          s = c.width,
          m = c.height,
          f = document.createElement("canvas"),
          w = f.getContext("2d", { willReadFrequently: !0 });
        if (
          ((f.width = s),
          (f.height = m),
          __LOG__(
            2
          )`imgElementToCanvasScalingAndRotating: scaling to ${s}x${m}`,
          0 === r
            ? w.drawImage(e, 0, 0, s, m)
            : (w.save(),
              w.translate(s / 2, m / 2),
              w.rotate((r * Math.PI) / 180),
              90 === r || 270 === r
                ? ((u = -m / 2), (d = -s / 2), (l = m), (g = s))
                : ((u = -s / 2), (d = -m / 2), (l = s), (g = m)),
              w.drawImage(e, u, d, l, g),
              w.restore()),
          0 === e.naturalWidth || 0 === e.naturalHeight)
        )
          throw (
            (__LOG__(
              4
            )`Failed canvas drawing attempt: image of size ${n}x${i} got to size ${e.naturalWidth}x${e.naturalHeight} - probably unloaded, because of low memory`,
            new h.c(
              `Failed canvas drawing attempt: image got to size ${e.naturalWidth}x${e.naturalHeight} - probably unloaded, because of low memory`
            ))
          );
        return f;
      }
      function B(e, t) {
        return S(e, t, 0);
      }
      function j(e) {
        __LOG__(2)`imgElementToCanvasAsIs`;
        var t = document.createElement("canvas");
        return (
          (t.width = e.naturalWidth),
          (t.height = e.naturalHeight),
          t.getContext("2d", { willReadFrequently: !0 }).drawImage(e, 0, 0),
          t
        );
      }
      function V(e) {
        switch (e) {
          case "status":
            return {
              imageMaxEdge: (0, I.a)("status_image_max_edge"),
              imageQuality: (0, I.a)("status_image_quality"),
              imageMaxKbytes: (0, I.a)("image_max_kbytes"),
            };
          case "chat":
          case "unknown":
          case "frame":
            return {
              imageMaxEdge: (0, I.a)("image_max_edge"),
              imageQuality: (0, I.a)("image_quality_2") / 100,
              imageMaxKbytes: (0, I.a)("image_max_kbytes"),
            };
          default:
            return {
              imageMaxEdge: (0, I.a)("status_image_max_edge"),
              imageQuality: (0, I.a)("status_image_quality"),
              imageMaxKbytes: (0, I.a)("image_max_kbytes"),
            };
        }
      }
      var D = 72,
        J = 0.5;
      function Q(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          n = V(t);
        return N(e, n, r).catch(
          (0, U.a)(
            h.c,
            (t) => (
              __LOG__(4)`Memory pressure error: ${t.message}`,
              __LOG__(2)`Giving it one more shot`,
              (0, c.a)(7e3).then(() => N(e, n, r))
            )
          )
        );
      }
      function N(e, t, r) {
        var n = t.imageMaxEdge,
          i = t.imageMaxKbytes,
          o = t.imageQuality,
          h = t.imagePreviewMaxEdge,
          u = void 0 === h ? D : h;
        return (0, a.h)(e)
          .then((e) => {
            var t;
            try {
              (t = (function (e) {
                var t = new d.a(e),
                  r = new d.a(),
                  n = t.readUint16();
                if (65496 !== n) throw new Error("Not a valid JPEG");
                r.writeUint16(n);
                for (var i = !1, a = !1, o = !1, h = {}; !i; ) {
                  var u = t.readUint8();
                  if (a && 255 !== u) r.writeUint8(u);
                  else {
                    var l = (u << 8) | t.readUint8();
                    if (a && (65280 === l || (l >= 65488 && l <= 65495)))
                      r.writeUint16(l);
                    else if (((a = !1), 65497 === l))
                      r.writeUint16(l), (i = !0);
                    else if (
                      (l >= 65472 && l <= 65475) ||
                      (l >= 65477 && l <= 65479) ||
                      (l >= 65480 && l <= 65483) ||
                      (l >= 65485 && l <= 65487)
                    ) {
                      if (o)
                        throw new Error(
                          "Multiple start of frame markers detected in one image"
                        );
                      r.writeUint16(l);
                      var g = t.readUint16();
                      if (
                        (r.writeUint16(g),
                        r.writeUint8(t.readUint8()),
                        (h.height = t.readUint16()),
                        (h.width = t.readUint16()),
                        r.writeUint16(h.height),
                        r.writeUint16(h.width),
                        0 === h.height || 0 === h.width)
                      )
                        throw new Error(
                          "Incorrect dimensions, width and height must be greater than zero"
                        );
                      var c = t.readUint8(),
                        s = 3 * c;
                      if (g - 2 !== s + 6)
                        throw new Error(
                          "Incorrect start of baseline frame data, length is incorrect"
                        );
                      r.writeUint8(c), r.writeBuffer(t.readBuffer(s)), (o = !0);
                    } else if (l >= 65504 && l <= 65519) {
                      var m = t.readUint16() - 2;
                      t.advance(m);
                    } else if (
                      65476 === l ||
                      65499 === l ||
                      65534 === l ||
                      65501 === l
                    ) {
                      r.writeUint16(l);
                      var f = t.readUint16();
                      r.writeUint16(f), r.writeBuffer(t.readBuffer(f - 2));
                    } else {
                      if (65498 !== l)
                        throw new Error(
                          "Incorrect segment marker " + l.toString(16)
                        );
                      r.writeUint16(l), (a = !0);
                    }
                  }
                }
                return (h.content = r.readBuffer()), h;
              })(e)),
                __LOG__(
                  2
                )`Successfully parsed JPEG image with dimensions ${t.width}x${t.height}`;
            } catch (e) {
              __LOG__(2)`Failed to parse JPEG image: ${e.message}`;
            }
            var a = 0 !== r;
            return t &&
              !a &&
              t.width <= n &&
              t.height <= n &&
              t.content.byteLength <= 1024 * i
              ? (__LOG__(
                  2
                )`Using parsed JPEG image without any transformations`,
                {
                  content: new Blob([t.content], { type: "image/jpeg" }),
                  width: t.width,
                  height: t.height,
                })
              : C(new Blob([e])).then((e) => {
                  if (0 === e.naturalWidth || 0 === e.naturalHeight)
                    throw new Error("Loaded empty image");
                  var t;
                  return k(
                    (t =
                      e.naturalWidth <= n && e.naturalHeight <= n && !a
                        ? j(e)
                        : S(e, n, r)),
                    o,
                    1024 * i
                  ).then((e) => ({
                    content: e,
                    width: t.width,
                    height: t.height,
                  }));
                });
          })
          .then((e) => {
            var t = e.width <= u && e.height <= u;
            return C(e.content, 2 * u).then((r) => {
              var n = t ? j(r) : B(r, u);
              return k(n, J)
                .then(a.h)
                .then((t) => {
                  var r = n
                    .getContext("2d", { willReadFrequently: !0 })
                    .getImageData(0, 0, n.width, n.height);
                  return {
                    fullImage: e.content,
                    fullImageWidth: e.width,
                    fullImageHeight: e.height,
                    preview: t,
                    previewWidth: n.width,
                    previewHeight: n.height,
                    bg: E(r),
                  };
                });
            });
          });
      }
      function K(e) {
        return C(e).then((t) => {
          var r = t.naturalWidth,
            n = t.naturalHeight;
          if (e.size <= 1300)
            return (0, a.h)(e).then((e) => ({
              microThumb: e,
              fullThumbWidth: r,
              fullThumbHeight: n,
            }));
          var i = B(t, D);
          return k(i, J, 1300)
            .catch(() =>
              k(i, 0.1).then(
                (e) => (
                  __LOG__(
                    4
                  )`computeMicroThumb: failed to reduce size. Ended with ${e.size}`,
                  SEND_LOGS("compute-micro-thumb"),
                  e
                )
              )
            )
            .then(a.h)
            .then((e) => ({
              microThumb: e,
              fullThumbWidth: r,
              fullThumbHeight: n,
            }));
        });
      }
      function X(e, t, r, n) {
        __LOG__(
          2
        )`videoToCanvasFixRotation: trying fix rotation of a video frame: ${t}x${r}`;
        var i = document.createElement("canvas");
        (i.width = t), (i.height = r);
        var a = i.getContext("2d", { willReadFrequently: !0 });
        switch (n) {
          case 90:
            a.translate(t, 0), a.rotate(0.5 * Math.PI);
            break;
          case 180:
            a.translate(t, r), a.rotate(Math.PI);
            break;
          case 270:
            a.translate(0, r), a.rotate(1.5 * Math.PI);
        }
        return (
          90 === n || 270 === n
            ? a.drawImage(e, 0, 0, r, t)
            : a.drawImage(e, 0, 0, t, r),
          i
        );
      }
      function Z(e, t) {
        var r = e.width,
          n = e.height;
        return 270 === t || 90 === t
          ? { width: n, height: r }
          : { width: r, height: n };
      }
      function Y() {
        var e = new g.a();
        return (P = e.promise), e;
      }
      var ee = 1;
      function te(e, t) {
        var r = ee++;
        return (
          __LOG__(2)`loadVideo #${r}: queuing`,
          x.enqueue(() =>
            P.then(() => {
              var n = self.URL.createObjectURL(e),
                i = document.createElement("video");
              return new Promise((e, t) => {
                __LOG__(2)`loadVideo #${r}: loading`,
                  (i.src = n),
                  (i.preload = "metadata"),
                  i.addEventListener("loadeddata", e),
                  (i.onerror = (e) => {
                    __LOG__(4)`loadVideo.onError: ${(0, s.f)(e)}`,
                      t(new Error("loadVideo video.onerror"));
                  });
              })
                .then(() => t(i))
                .finally(() => {
                  __LOG__(2)`loadVideo #${r}: closing`,
                    self.URL.revokeObjectURL(n),
                    i.removeAttribute("src"),
                    i.load();
                });
            })
          )
        );
      }
      function re(e, t, r) {
        var n = document.createElement("canvas");
        (n.width = t), (n.height = r);
        var i = n.getContext("2d", { willReadFrequently: !0 });
        return (
          i.drawImage(e, 0, 0, e.width, e.height, 0, 0, t, r),
          { repainted: n, bg: E(i.getImageData(0, 0, t, r)) }
        );
      }
      function ne(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
        return (0, u.a)(e).then((r) => {
          if ("error" === r.type)
            throw new Error("videoInfoAndPreview: parse fail: " + r.error);
          r.type;
          var n = r.info.video;
          if (!n) throw new Error("videoInfoAndPreview: not video!");
          var o = n.rotation,
            h = n.duration,
            u = Z({ width: n.width, height: n.height }, o),
            d = u.width,
            l = u.height;
          if (isNaN(h))
            throw new Error(
              "videoInfoAndPreview: video loaded, but has unknown length"
            );
          if (!isFinite(h))
            throw new Error(
              "videoInfoAndPreview: video loaded, but has no predefined length"
            );
          if (0 === d || 0 === l)
            throw new Error(
              "videoInfoAndPreview: video loaded but one of dimensions is zero"
            );
          var g = Math.ceil(h),
            c = W(d, l, t),
            s = c.width,
            m = c.height,
            f = q(d, l),
            w = f.width,
            v = f.height;
          return te(e, (e) => {
            var t = X(e, w, v, o),
              r = re(t, s, m),
              n = r.repainted,
              h = r.bg;
            return Promise.all([T(n, J).then(a.h), T(t, 0.8)]).then((e) => {
              var t = i()(e, 2),
                r = t[0],
                n = t[1];
              return {
                width: d,
                height: l,
                duration: g,
                preview: r,
                rotation: o,
                highResPreview: n,
                bg: h,
              };
            });
          });
        });
      }
      function ie(e, t) {
        return te(e, (e) => {
          var r = Z({ width: e.videoWidth, height: e.videoHeight }, t),
            n = q(r.width, r.height);
          return T(X(e, n.width, n.height, t), 0.8);
        });
      }
    },
    479: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return h;
        });
      var n = r(82),
        i = (0, n.d)("ImageTooSmall", !1),
        a = (0, n.d)("MemoryPressureError", !1),
        o = (0, n.d)("LocationGiveUpError", !1),
        h = (0, n.d)("UnmountedError", !1);
    },
  },
]);
