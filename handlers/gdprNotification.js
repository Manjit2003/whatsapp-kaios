"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [54],
  {
    566: function (e, t, a) {
      a.r(t);
      var i = a(46),
        n = a(4),
        d = a(88),
        o = a(403),
        c = a(12),
        r = new i.a(
          "incomingGdprNotification",
          (e) => (
            e.assertTag("notification"),
            {
              stanzaId: e.attrString("id"),
              parsedDocumentNode: (0, o.b)(e.child("document")),
            }
          )
        );
      t.default = (0, d.c)("handleGdprNotification", r, (e) => {
        return (
          __LOG__(2)`handleGdprNotification: received`,
          (0, c.c)("event", "gdprReportUpdated", {
            gdprReport: e.parsedDocumentNode,
          }),
          (0, c.c)("event", "gdprReportReadyReceived", {}),
          (t = e.stanzaId),
          (0, n.v)("ack", {
            id: (0, n.b)(t),
            to: n.k,
            class: "notification",
            type: "status",
          })
        );
        var t;
      });
    },
  },
]);
