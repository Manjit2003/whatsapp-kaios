"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [82],
  {
    604: function (e, r, a) {
      a.r(r),
        a.d(r, "deleteExpiredPreKeys", function () {
          return s;
        });
      var t = a(75),
        n = a(29),
        i = a(3),
        s = (0, t.c)()
          .finalStep("deleteExpiredPreKeys", (e) => {
            var r = e.expirationDays * i.b;
            return (0, n.v)().then((e) => {
              var a = -1;
              if (
                (e.forEach((e) => {
                  (0, i.n)(e.timestamp, r) ||
                    (a = Math.max(a, e.generation - 2));
                }),
                !(a < 0))
              ) {
                var t = -1;
                if (
                  (e.forEach((e) => {
                    e.generation <= a && (t = Math.max(t, e.lastPreKeyId));
                  }),
                  !(t < 0))
                )
                  return (0, n.j)(t);
              }
            });
          })
          .end();
    },
  },
]);
