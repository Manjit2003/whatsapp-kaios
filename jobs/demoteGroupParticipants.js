"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [86],
  {
    576: function (r, t, e) {
      e.r(t);
      var i = e(28),
        n = e(4),
        a = e(6),
        p = e(75),
        s = e(46),
        d = e(30),
        o = e(16),
        u = e(83),
        c = e(201),
        l = {
          404: (0, u.c)("not-a-participant"),
          406: (0, u.c)("is-superadmin"),
        },
        h = new s.a("demoteGroupParticipantsReplyParser", (r) => ({
          success: !0,
          id: r.attrString("id"),
          participants: r.child("demote").mapChildren((r) => {
            var t = (0, u.e)(r, l);
            return { jid: r.attrPhoneUserJid("jid"), error: t };
          }),
        })),
        f = {
          401: (0, u.d)("not-an-admin"),
          403: (0, u.d)("not-in-group"),
          404: (0, u.d)("group-not-found"),
          500: (0, u.d)("unknown"),
        };
      t.default = (0, p.c)()
        .finalStep("demoteGroupParticipants", (r, t, e) => {
          var p = e.jobStartTime,
            s = r.groupJid,
            l = r.participants,
            m = (0, n.v)(
              "iq",
              { to: (0, n.g)(s), type: "set", xmlns: "w:g2", id: (0, n.t)() },
              (0, n.v)(
                "demote",
                null,
                l.map((r) => (0, n.v)("participant", { jid: (0, n.g)(r) }))
              )
            );
          return (0, i.e)(m, h).then((r) => {
            if (!r.success) return (0, u.f)(r, f);
            var t = r.result,
              e = [],
              i = [];
            return (
              t.participants.forEach((r) => {
                r.error
                  ? e.push({ jid: r.jid, error: r.error })
                  : i.push(r.jid);
              }),
              (0, c.j)("demote", s, {
                id: t.id,
                participants: i,
                author: a.r.get(),
                ts: p,
              })
                .then(() => {
                  if (e.length)
                    return (0, d.b)().waitUntilPersisted(o.e.queryGroup(s));
                })
                .then(() => ({ failures: e }))
            );
          });
        })
        .end();
    },
  },
]);
