"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [93],
  {
    593: function (e, n, s) {
      s.r(n),
        s.d(n, "keepMessagesFromChatJob", function () {
          return a;
        }),
        s.d(n, "unkeepMessagesFromChatJob", function () {
          return c;
        });
      var r = s(75),
        t = s(406),
        a = (0, r.c)()
          .finalStep("keep", (e) => {
            var n = e.msgIds,
              s = e.chatId;
            return (0, t.a)(n, s);
          })
          .end(),
        c = (0, r.c)()
          .finalStep("unkeep", (e) => {
            var n = e.msgIds,
              s = e.chatId;
            return (0, t.c)(n, s);
          })
          .end();
    },
  },
]);
