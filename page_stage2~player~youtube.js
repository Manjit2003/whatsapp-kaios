"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [12],
  {
    478: function (n, a, l) {
      var t = l(1);
      l(13),
        (a.a = (n) => {
          var a = n.className;
          return (0, t.f)(
            32,
            "svg",
            a,
            (0, t.f)(32, "path", null, null, 1, {
              d:
                "M4 3.1v13.8c0 .9 1 1.5 1.8 1 3.1-1.7 9.4-5.2 12.5-6.9.8-.5.8-1.6 0-2.1L5.8 2C5 1.6 4 2.2 4 3.1z",
            }),
            2,
            { viewBox: "0 0 20 20" }
          );
        });
    },
    498: function (n, a, l) {
      l.d(a, "a", function () {
        return u;
      });
      var t = l(1),
        e = l(13),
        s = l(22),
        i = l.n(s),
        f = l(383);
      function u(n) {
        var a = n.progress,
          l = n.hidden,
          s = n.playSideways,
          u = n.withSoftkeys,
          r = n.withOptions,
          v = 100 * a + "%",
          c = {},
          d = {};
        return (
          s ? ((c.height = v), (d.top = v)) : ((c.width = v), (d.left = v)),
          (0, t.f)(
            1,
            "div",
            (0, i.a)("GT", l && "Ga", s ? "GV" : "GU", u ? "GW" : null),
            [
              (0, t.f)(
                1,
                "div",
                (0, i.a)("GX"),
                [
                  (0, t.f)(1, "div", "GY", null, 1, { style: e.h(c) }),
                  (0, t.f)(1, "div", "GZ", null, 1, { style: e.h(d) }),
                ],
                4
              ),
              r
                ? (0, t.f)(
                    1,
                    "div",
                    (0, i.a)("Gb"),
                    (0, t.b)(2, f.a, { className: "Gc" }),
                    2
                  )
                : null,
            ],
            0
          )
        );
      }
    },
  },
]);
