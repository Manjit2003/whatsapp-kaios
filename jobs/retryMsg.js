"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [110],
  {
    596: function (e, s, i) {
      i.r(s);
      var r = i(75),
        t = i(17),
        d = i(24),
        n = i(30),
        a = i(16);
      s.default = (0, r.c)()
        .finalStep("loadFromDb", (e) => {
          var s = e.msgId,
            i = e.origin;
          return (0, t.hc)(s).then((e) => {
            if (e) {
              var r = e.outgoingTo;
              return (0, d.e)(e.dbMsg)
                ? (0, n.b)().waitUntilPersisted(
                    a.e.uploadMedia(e.dbMsg.id, e.jid, r, i)
                  )
                : (0, n.b)().waitUntilPersisted(
                    a.e.sendWrittenMsg(e.dbMsg.rowId, e.jid, r, void 0, i)
                  );
            }
            __LOG__(2)`retryMsg no message ${s} or has already been sent`;
          });
        })
        .end();
    },
  },
]);
