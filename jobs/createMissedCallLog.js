"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [77],
  {
    631: function (e, s, t) {
      t.r(s);
      var n = t(75),
        a = t(17),
        l = t(12);
      s.default = (0, n.c)()
        .finalStep("createMissedCallLog", (e) => {
          var s = e.key,
            t = e.ts;
          return (0, a.h)(s, t)
            .then((e) => {
              (0, l.c)("event", "callMissed", { peerJid: s.peer, id: e.id });
            })
            .then(a.eb)
            .then((e) => {
              (0, l.c)("event", "callLogsUpdated", { logs: e });
            });
        })
        .end();
    },
  },
]);
