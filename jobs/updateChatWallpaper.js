"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [140],
  {
    637: function (e, t, a) {
      a.r(t);
      var n = a(75),
        r = a(30),
        l = a(16),
        p = a(17);
      t.default = (0, n.c)()
        .finalStep("updateChatWallpaper", (e, t) => {
          var a = t.chatBackgroundSettings,
            n = t.chat,
            s = t.updateAllChats;
          return s || !n
            ? (function (e, t) {
                var a = Promise.resolve();
                return (
                  t && (a = a.then(() => (0, p.ic)())),
                  a
                    .then(() => {
                      var t = e;
                      return (0, r.b)().waitUntilCompleted(
                        l.e.updateGeneralSettings(t)
                      );
                    })
                    .then(() => {})
                );
              })(a, s)
            : (0, p.tc)(n.id, a);
        })
        .end();
    },
  },
]);
