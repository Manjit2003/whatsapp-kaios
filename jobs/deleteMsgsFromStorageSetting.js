"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [84],
  {
    612: function (e, s, t) {
      t.r(s);
      var a = t(75),
        r = t(17);
      s.default = (0, a.c)()
        .finalStep("deleteMsgsFromStorageSetting", (e) => {
          var s = e.msgIds;
          return (0, r.o)(s, "user_action").then((e) => {
            var s = e.deletedMediaStats;
            WAM.log("regular", 2350, void 0, [5, 0, s.size, 6, 0, s.numFiles]);
          });
        })
        .end();
    },
  },
]);
