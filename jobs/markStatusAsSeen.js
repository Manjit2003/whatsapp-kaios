"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [97],
  {
    591: function (e, t, a) {
      a.r(t);
      var r = a(75),
        n = a(17),
        i = a(28),
        s = a(11),
        p = a(7),
        d = a(6),
        l = a(4);
      t.default = (0, r.c)()
        .step("gatherMsg", (e) => {
          var t = e.authorJid,
            a = e.msgId;
          return (0, n.nb)(t, a);
        })
        .finalStep("updateDbAndSend", (e, t, a) => {
          var r = t.authorJid,
            u = (t.msgId, a.jobStartTime);
          if (0 !== e.length) {
            var c = [],
              h = [];
            return (
              e.forEach((e) => {
                c.push(e.msgId), h.push(e.externalId);
              }),
              (0, n.Tb)(r, c, u).then(() => {
                if ("none" !== d.j.get().readReceipts) {
                  var e = h[h.length - 1],
                    t = null;
                  if (
                    (h.length > 1 &&
                      (t = (0, l.v)(
                        "list",
                        null,
                        h
                          .slice(0, -1)
                          .map((e) => (0, l.v)("item", { id: (0, l.b)(e) }))
                      )),
                    "@psa" !== r)
                  ) {
                    var a = String(u),
                      n = (0, l.v)(
                        "receipt",
                        {
                          to: (0, l.g)(s.h),
                          type: "read",
                          id: (0, l.b)(e),
                          t: (0, l.b)(a),
                          participant: (0, l.g)(r),
                        },
                        t
                      );
                    return (0, i.l)(n, {
                      id: e,
                      class: "receipt",
                      type: "read",
                      from: s.h,
                      participant: (0, p.e)(r),
                    });
                  }
                }
              })
            );
          }
          __LOG__(2)`markStatusAsSeen no change`;
        })
        .end();
    },
  },
]);
