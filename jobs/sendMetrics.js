"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [119],
  {
    607: function (e, t, r) {
      r.r(t);
      var s = r(28),
        n = r(46),
        o = r(4),
        a = r(170),
        c = r(75),
        d = new n.a("sendMetrics", (e) => ({}));
      t.default = (0, c.c)()
        .finalStep("sendMetrics", {
          code: () => {
            var e = Math.floor(Date.now() / 1e3);
            return (0, a.b)("regular")
              .then((t) => {
                var r = t.map((t) => {
                  var r = (0, o.v)(
                    "iq",
                    { xmlns: "w:stats", id: (0, o.t)(), type: "set", to: o.k },
                    (0, o.v)("add", { t: (0, o.f)(e) }, t.content)
                  );
                  return (0, s.e)(r, d)
                    .then((e) => {
                      e.success
                        ? __LOG__(2)`Successfully sent buffer ${t.key} to WAM`
                        : __LOG__(
                            3
                          )`Failed to send metrics IQ with buffer ${t}, error code: ${e.errorCode}`;
                    })
                    .then(() => (0, a.h)(t.key));
                });
                return Promise.all(r);
              })
              .then(() => {});
          },
          stopRetryIf: {
            timePassedSeconds: 600,
            onStopRetry: () => {
              __LOG__(2)`sendMetrics timed out, will be restarted later`;
            },
          },
        })
        .end();
    },
  },
]);
