"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [103],
  {
    578: function (r, t, e) {
      e.r(t);
      var i = e(28),
        n = e(4),
        a = e(6),
        p = e(75),
        o = e(46),
        s = e(30),
        u = e(83),
        d = e(16),
        c = e(201),
        l = {
          404: (0, u.c)("not-a-participant"),
          406: (0, u.c)("is-superadmin"),
        },
        h = new o.a("removeGroupParticipantsReplyParser", (r) => ({
          id: r.attrString("id"),
          participants: r.child("remove").mapChildren((r) => {
            var t = (0, u.e)(r, l);
            return { jid: r.attrPhoneUserJid("jid"), error: t };
          }),
        })),
        v = {
          401: (0, u.d)("not-an-admin"),
          403: (0, u.d)("not-in-group"),
          404: (0, u.d)("group-not-found"),
          500: (0, u.d)("unknown"),
        };
      t.default = (0, p.c)()
        .finalStep("removeGroupParticipants", (r, t, e) => {
          var p = e.jobStartTime,
            o = r.groupJid,
            l = r.participants,
            f = (0, n.v)(
              "iq",
              { to: (0, n.g)(o), type: "set", xmlns: "w:g2", id: (0, n.t)() },
              (0, n.v)(
                "remove",
                null,
                l.map((r) => (0, n.v)("participant", { jid: (0, n.g)(r) }))
              )
            );
          return (0, i.e)(f, h).then((r) => {
            if (!r.success) return (0, u.f)(r, v);
            var t = r.result,
              e = [],
              i = [];
            return (
              t.participants.forEach((r) => {
                r.error && "not-a-participant" !== r.error.reason
                  ? e.push({ jid: r.jid, error: r.error })
                  : i.push(r.jid);
              }),
              (0, c.j)("remove", o, {
                id: t.id,
                participants: i,
                author: a.r.get(),
                ts: p,
              })
                .then(() => {
                  if (e.length)
                    return (0, s.b)().waitUntilPersisted(d.e.queryGroup(o));
                })
                .then(() => ({ failures: e }))
            );
          });
        })
        .end();
    },
  },
]);
