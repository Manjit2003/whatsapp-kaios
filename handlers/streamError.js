"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [68],
  {
    573: function (e, r, t) {
      t.r(r);
      var o = t(88),
        c = t(28),
        a = new o.b(
          "streamErrorParser",
          (e) => (
            e.assertTag("stream:error"),
            e.hasChild("conflict")
              ? { type: "conflict" }
              : e.hasAttr("code")
              ? { type: "code", code: e.attrInt("code") }
              : (__LOG__(4)`Unrecognized stream:error: ${e}`, { type: "other" })
          )
        );
      r.default = (0, o.c)(
        "handleStreamError",
        a,
        (e) => (
          "code" === e.type && e.code >= 500 && e.code < 600 && (0, c.d)(),
          "CLOSE_SOCKET"
        )
      );
    },
  },
]);
