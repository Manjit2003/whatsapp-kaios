"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [96],
  {
    602: function (e, t, a) {
      a.r(t);
      var n = a(75),
        i = a(17),
        p = a(28),
        r = a(4),
        d = a(7),
        s = a(6);
      t.default = (0, n.c)()
        .step("markPlayed", (e) => {
          var t = e.msgId;
          return (0, i.Rb)(t);
        })
        .finalStep("sendPlayedReceipt", function (e, t, a) {
          var n = e.msg,
            i = e.externalId,
            l = t.jid,
            c = a.jobStartTime;
          if (n && i) {
            if ("none" !== s.j.get().readReceipts || null != (0, d.p)(l)) {
              var o = n.meta.author !== l ? n.meta.author : null,
                u = String(c),
                f = (0, r.v)("receipt", {
                  to: (0, r.g)(l),
                  type: "played",
                  id: (0, r.b)(i),
                  t: (0, r.b)(u),
                  participant: o ? (0, r.g)(o) : r.d,
                });
              return (0, p.l)(f, {
                id: i,
                class: "receipt",
                type: "played",
                from: l,
                participant: o ? (0, d.e)(o) : null,
              }).then(() => {});
            }
            __LOG__(
              2
            )`sendPlayedReceipt read receipt setting off, not sending receipt`;
          } else __LOG__(2)`sendPlayedReceipt msg disappeared`;
        })
        .end();
    },
  },
]);
