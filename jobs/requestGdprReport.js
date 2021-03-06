"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [106],
  {
    626: function (e, r, t) {
      t.r(r),
        t.d(r, "requestGdprReport", function () {
          return u;
        });
      var p = t(28),
        s = t(4),
        d = t(46),
        a = t(12),
        n = t(75),
        o = new d.a("parseRequestGdprReportResponse", (e) => ({
          status: "pending",
          availabilityDate: e.child("gdpr").attrTime("timestamp"),
        })),
        u = (0, n.c)()
          .finalStep("requestGdprReport", () =>
            (0, p.e)(
              (0, s.v)(
                "iq",
                {
                  xmlns: "urn:xmpp:whatsapp:account",
                  to: s.k,
                  type: "get",
                  id: (0, s.t)(),
                },
                (0, s.v)("gdpr", { action: "request" })
              ),
              o
            ).then((e) => {
              e.success
                ? (0, a.c)("event", "gdprReportUpdated", {
                    gdprReport: e.result,
                  })
                : (__LOG__(
                    2
                  )`requestGdprReport: unhandled error code ${e.errorCode} : ${e.errorText}`,
                  (0, a.c)("event", "gdprReportUpdated", {
                    gdprReport: { status: "error", reason: "request_failed" },
                  }));
            })
          )
          .end();
    },
  },
]);
