"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [58],
  {
    563: function (t, i, e) {
      e.r(i),
        e.d(i, "handleDigestNotification", function () {
          return o;
        });
      var n = e(88),
        s = e(4),
        a = e(30),
        r = e(16),
        c = new n.b(
          "digestNotification",
          (t) => (
            t.assertTag("notification"),
            t.assertAttr("type", "encrypt"),
            t.child("digest"),
            { stanzaId: t.attrString("id") }
          )
        ),
        o = (0, n.c)("handleDigestNotification", c, (t) => {
          var i = t.stanzaId;
          return (0, a.b)()
            .waitUntilPersisted(r.e.requestPreKeyDigest())
            .then(() =>
              (0, s.v)("ack", {
                to: s.k,
                id: (0, s.b)(i),
                class: "notification",
              })
            );
        });
    },
  },
]);
