"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [88],
  {
    632: function (e, l, n) {
      n.r(l);
      var s = n(75),
        t = n(17),
        a = n(12);
      l.default = (0, s.c)()
        .finalStep("finalizeCallLog", (e) => {
          var l = e.key,
            n = e.callResult,
            s = e.duration,
            c = e.bytesTransferred,
            r = "connected" === n;
          return (0, t.u)(l, n, r ? s : null, r ? c : null)
            .then(
              (e) => (
                null == e ||
                  "missed" !== e.callResult ||
                  e.isFromMe ||
                  (0, a.c)("event", "callMissed", {
                    peerJid: l.peer,
                    id: e.id,
                  }),
                e
              )
            )
            .then(t.eb)
            .then((e) => {
              (0, a.c)("event", "callLogsUpdated", { logs: e });
            });
        })
        .end();
    },
  },
]);
