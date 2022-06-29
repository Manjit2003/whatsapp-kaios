"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [72],
  {
    579: function (r, t, e) {
      e.r(t);
      var a = e(28),
        i = e(4),
        n = e(6),
        d = e(75),
        o = e(46),
        p = e(30),
        s = e(16),
        u = e(83),
        c = e(201),
        l = {
          401: (0, u.c)("add-not-allowed"),
          406: (0, u.c)("business-not-allowed"),
          408: (0, u.c)("user-left-recently"),
          409: (0, u.c)("already-in-group"),
          500: (0, u.c)("too-many-participants"),
          403: (0, u.b)("add-request-required", (r) => {
            var t = r.child("add_request");
            return {
              code: t.attrString("code"),
              expiration: t.attrTime("expiration"),
            };
          }),
        },
        h = new o.a("addGroupParticipantsReplyParser", (r) => ({
          id: r.attrString("id"),
          participants: r.child("add").mapChildren((r) => {
            var t = (0, u.e)(r, l);
            return { jid: r.attrPhoneUserJid("jid"), error: t };
          }),
        })),
        f = {
          401: (0, u.d)("not-an-admin"),
          403: (0, u.d)("not-in-group"),
          404: (0, u.d)("group-not-found"),
          429: (0, u.d)("rate-limit"),
          500: (0, u.d)("unknown"),
        };
      t.default = (0, d.c)()
        .finalStep("addGroupParticipants", (r, t, e) => {
          var d = e.jobStartTime,
            o = r.groupJid,
            l = r.participants,
            g = (0, i.v)(
              "iq",
              { to: (0, i.g)(o), type: "set", xmlns: "w:g2", id: (0, i.t)() },
              (0, i.v)(
                "add",
                null,
                l.map((r) => (0, i.v)("participant", { jid: (0, i.g)(r) }))
              )
            );
          return (0, a.e)(g, h).then((r) => {
            if (!r.success) return (0, u.f)(r, f);
            var t = r.result,
              e = [],
              a = [];
            return (
              t.participants.forEach((r) => {
                r.error && "already-in-group" !== r.error.reason
                  ? a.push({ jid: r.jid, error: r.error })
                  : e.push(r.jid);
              }),
              (0, c.j)("add", o, {
                id: t.id,
                participants: e,
                author: n.r.get(),
                ts: d,
              })
                .then(() => {
                  if (a.length)
                    return (0, p.b)().waitUntilPersisted(s.e.queryGroup(o));
                })
                .then(() => ({ failures: a }))
            );
          });
        })
        .end();
    },
  },
]);
