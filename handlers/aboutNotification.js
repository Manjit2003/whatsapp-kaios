"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [48],
  {
    565: function (t, a, n) {
      n.r(a);
      var e = n(88),
        s = n(4),
        o = n(17),
        i = n(219),
        r = n(483),
        c = new e.b("incomingAboutNotification", (t) => {
          t.assertTag("notification");
          var a = { stanzaId: t.attrString("id") },
            n = t.attrPhoneUserJid("from"),
            e = t.hasChild("set") && t.child("set");
          return e && !e.hasAttr("hash")
            ? Object.assign(
                {
                  type: "change",
                  from: n,
                  pushname: t.attrString("notify"),
                  content: e.contentString(),
                  ts: t.attrTime("t"),
                },
                a
              )
            : e && e.hasAttr("hash")
            ? Object.assign(
                { type: "changeForHash", hash: e.attrString("hash"), from: n },
                a
              )
            : Object.assign({ type: "unknown", from: n }, a);
        });
      a.default = (0, e.c)("handleAboutNotification", c, function (t) {
        var a;
        switch ((__LOG__(2)`handleAboutNotification: received`, t.type)) {
          case "change":
            a = Promise.all([
              (0, o.bd)(t.from, t.pushname),
              (0, o.Nc)(t.from, {
                status: "loaded",
                content: t.content,
                ts: t.ts,
              }),
            ]);
            break;
          case "changeForHash":
            a = (0, r.a)(t.hash).then((t) => (0, i.statusQuerySync)(t));
            break;
          default:
            __LOG__(
              3
            )`handleAboutNotification: unhandled notification of type ${t.type}`,
              (a = Promise.resolve());
        }
        return a.then(() =>
          (function (t) {
            return (0, s.v)("ack", {
              id: (0, s.b)(t.stanzaId),
              to: (0, s.g)(t.from),
              class: "notification",
              type: "status",
            });
          })(t)
        );
      });
    },
  },
]);
