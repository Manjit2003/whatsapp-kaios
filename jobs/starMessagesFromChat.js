"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [137],
  {
    592: function (e, t, s) {
      s.r(t),
        s.d(t, "starMessagesFromChatJob", function () {
          return n;
        }),
        s.d(t, "unstarMessagesFromChatJob", function () {
          return c;
        });
      var r = s(75),
        a = s(17),
        n = (0, r.c)()
          .finalStep("setStar", (e) => {
            var t = e.msgIds,
              s = e.chatId;
            return (0, a.Gc)(t, s);
          })
          .end(),
        c = (0, r.c)()
          .finalStep("deleteStar", (e) => {
            var t = e.msgIds,
              s = e.chatId;
            return (0, a.Lc)(t, s);
          })
          .end();
    },
  },
]);
