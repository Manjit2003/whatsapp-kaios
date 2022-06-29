"use strict";
(function (e) {
  var t = {};
  function r(o) {
    if (t[o]) return t[o].exports;
    var n = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            o,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return o;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/"),
    r((r.s = 433));
})({
  433: function (e, t, r) {
    e.exports = r(434);
  },
  434: function (e, t, r) {
    self.bootstrapQueue = new Promise((e) => {
      var t = !1,
        r = (r, o) => {
          navigator.mozSetMessageHandler(r, (n) => {
            if (t) self.WARN && __LOG__(3)`bootstrapQueue dropping ${r}`;
            else {
              t = !0;
              try {
                self.LOG && __LOG__(2)`bootstrapQueue handler for ${r}`,
                  e(o(n));
              } catch (t) {
                e(), self.ERROR && __LOG__(4)`bootstrapQueue error in ${r}`;
              }
            }
          });
        };
      r("serviceworker-notification", (e) => ({
        type: "notification",
        data: JSON.parse(e.msg),
      })),
        r("activity", (e) => ({ type: "activity", source: e.source }));
    });
  },
});
