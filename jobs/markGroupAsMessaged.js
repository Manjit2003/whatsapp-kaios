"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [95],
  {
    600: function (e, s, a) {
      a.r(s);
      var n = a(17),
        c = a(75),
        t = a(12);
      s.default = (0, c.c)()
        .finalStep("markGroupAsMessaged", (e) => {
          var s = e.chatId,
            a = e.groupJid;
          n.Kb(s, a).then((e) => {
            null != e &&
              (0, t.c)("event", "msgsReceived", {
                newMsgs: [],
                changedMsgs: [],
                affectedChats: [e],
              });
          });
        })
        .end();
    },
  },
]);
