"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [126],
  {
    625: function (t, e, n) {
      n.r(e),
        n.d(e, "setAbout", function () {
          return b;
        });
      var r = n(27),
        s = n.n(r),
        u = n(28),
        a = n(4),
        o = n(46),
        i = n(6),
        c = n(75),
        p = n(83),
        d = n(12),
        f = { 406: (0, p.d)("bad-request"), 500: (0, p.d)("server-error") },
        l = new o.a(
          "aboutResponse",
          (t) => (t.assertAttr("type", "result"), { id: t.attrInt("id") })
        ),
        b = (0, c.c)()
          .finalStep("setAbout", (t) => {
            var e = t.content;
            return (0, u.e)(
              (function (t) {
                return (0, a.v)(
                  "iq",
                  { to: a.k, type: "set", xmlns: "status", id: (0, a.t)() },
                  (0, a.v)("status", null, t)
                );
              })(e),
              l
            ).then(
              (function () {
                var t = s()(function* (t) {
                  if (!t.success) return (0, p.f)(t, f);
                  yield i.a.set(e),
                    (0, d.c)("event", "aboutUpdated", { about: e });
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            );
          })
          .end();
    },
  },
]);
