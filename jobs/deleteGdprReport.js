"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [83],
  {
    627: function (e, t, r) {
      r.r(t),
        r.d(t, "deleteGdprReport", function () {
          return c;
        });
      var p = r(28),
        d = r(4),
        o = r(46),
        n = r(12),
        s = r(105),
        a = r(75),
        l = new o.a("parseDeleteGdprReportResponse", (e) => ({
          status: "none",
        })),
        c = (0, a.c)()
          .finalStep("deleteGdprReport", () =>
            Promise.all([
              (0, s.getChunkTable)().deleteGdprReport(),
              (0, p.e)(
                (0, d.v)(
                  "iq",
                  {
                    xmlns: "urn:xmpp:whatsapp:account",
                    to: d.k,
                    type: "get",
                    id: (0, d.t)(),
                  },
                  (0, d.v)("gdpr", { action: "delete" })
                ),
                l
              ).then((e) => {
                e.success
                  ? (0, n.c)("event", "gdprReportUpdated", {
                      gdprReport: e.result,
                    })
                  : (__LOG__(
                      2
                    )`deleteGdprReport: unhandled error code ${e.errorCode} : ${e.errorText}`,
                    (0, n.c)("event", "gdprReportUpdated", {
                      gdprReport: { status: "error", reason: "delete_failed" },
                    }));
              }),
            ]).then(() => {})
          )
          .end();
    },
  },
]);
