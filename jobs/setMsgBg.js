"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [134],
  {
    628: function (e, t, n) {
      n.r(t);
      var r = n(75),
        s = n(3),
        o = n(12),
        u = n(17);
      t.default = (0, r.c)()
        .finalStep("extractAndSet", {
          requirements: [r.d],
          code: (e) => {
            var t = e.msgId;
            return (0, u.W)(t).then((e) => {
              var n = e.msg,
                r = e.quote;
              if (null != n || null != r)
                return (0, o.e)("page", "getDominantColors", {
                  msg: n,
                  quote: r,
                }).then((e) => {
                  var n = e.msg,
                    r = e.quote;
                  return (0, u.Cc)(t, n, r);
                });
            });
          },
          stopRetryIf: {
            timePassedSeconds: s.d,
            onStopRetry: (e) => {
              e.msgId;
            },
          },
        })
        .end();
    },
  },
]);
