"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [46],
  {
    553: function (n, s, e) {
      e.r(s),
        e.d(s, "loadMsgRange", function () {
          return r;
        });
      var a = e(259),
        t = e(58);
      function r(n) {
        return (0, a.b)()
          .loadDbMsgRange(n.chatId, n.anchor, n.range)
          .then((n) => {
            if (n) {
              var s = n.dbMsgs,
                e = n.containsOldest,
                a = n.containsNewest;
              return { msgs: s.map(t.c), containsOldest: e, containsNewest: a };
            }
            return __LOG__(3)`loadMsgRange no msgs in range`, null;
          });
      }
    },
  },
]);
