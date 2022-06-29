"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [52],
  {
    561: function (t, e, a) {
      a.r(e), a(72);
      var n = a(88),
        r = a(4),
        i = a(63),
        s = a(74),
        c = a(12),
        d = a(155),
        o = a(3),
        h = a(30),
        l = a(16),
        u = a(483),
        p = new n.b("incomingContactsNotification", (t) => {
          t.assertTag("notification");
          var e = t.attrString("id"),
            a = {
              from: t.attrWapJid("from"),
              ts: t.attrTime("t"),
              rawTs: t.attrString("t"),
              stanzaId: e,
            };
          if (t.hasChild("update")) {
            var n = t.child("update");
            return n.hasAttr("jid")
              ? Object.assign(
                  { type: "update", jid: n.attrPhoneUserJid("jid") },
                  a
                )
              : n.hasAttr("hash")
              ? Object.assign(
                  { type: "updateFromHash", hash: n.attrString("hash") },
                  a
                )
              : Object.assign({ type: "empty" }, a);
          }
          if (t.hasChild("add")) {
            var r = t.child("add");
            return Object.assign(
              { type: "add", hash: r.hasContent() ? r.contentBytes() : null },
              a
            );
          }
          if (t.hasChild("remove")) {
            var i = t.child("remove");
            return Object.assign(
              { type: "remove", jid: i.attrPhoneUserJid("jid") },
              a
            );
          }
          if (t.hasChild("sync")) {
            var s = t.child("sync");
            return Object.assign(
              { type: "sync", after: s.attrTime("after") },
              a
            );
          }
          return (
            __LOG__(4)`Unexpected 'contacts' notification`,
            Object.assign({ type: "empty" }, a)
          );
        });
      function f(t) {
        if (!t) return Promise.resolve();
        var e = t.jid,
          a = t ? (0, h.b)().waitUntilPersisted(l.e.getUserAbout(e)) : null;
        (0, c.c)("event", "clearUserLastSeen", { jid: e }),
          (0, c.c)("event", "avatarsUpdated", { cleared: [e] });
        var n = (0, s.getProfilePicTable)().clearRecord(e);
        return Promise.all([a, n]);
      }
      function v(t, e) {
        return (0, r.v)(
          "ack",
          {
            id: (0, r.b)(t.stanzaId),
            to: t.from,
            class: "notification",
            type: "contacts",
          },
          e
        );
      }
      e.default = (0, n.c)("handleContactsNotification", p, (t) => {
        switch (t.type) {
          case "updateFromHash":
            var e = t.hash;
            return (0, u.a)(e)
              .then((t) => (0, i.c)(t))
              .then((t) => Promise.all(t.map(f)))
              .then(() => v(t));
          case "update":
            var a = t.jid;
            return (0, i.b)(a)
              .then(f)
              .then(() => v(t));
          case "sync":
            var n = t.after - t.ts,
              r = (0, o.l)(n);
            return (0, d.d)("sync", r), v(t);
          default:
            return (
              __LOG__(
                2
              )`handleContactsNotification: unhandled notification of type ${t.type}`,
              v(t)
            );
        }
      });
    },
  },
]);
