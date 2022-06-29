"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [74],
  {
    634: function (e, l, s) {
      s.r(l);
      var a = s(75),
        n = s(17),
        t = s(12);
      l.default = (0, a.c)()
        .finalStep("clearAllCallLogs", () =>
          (0, n.f)()
            .then(n.eb)
            .then((e) => {
              (0, t.c)("event", "callLogsUpdated", { logs: e });
            })
        )
        .end();
    },
  },
]);
