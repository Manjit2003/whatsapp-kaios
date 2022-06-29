"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [20],
  {
    538: function (n, r, i) {
      i.r(r),
        i.d(r, "revokeGroupInvitations", function () {
          return l;
        });
      var t = i(28),
        e = i(4),
        o = i(75),
        a = i(46),
        u = i(30),
        d = i(16),
        s = i(17),
        p = i(83),
        v = { 404: (0, p.c)("no-invitation") },
        f = new a.a("revokeGroupInvitations", (n) => ({
          id: n.attrString("id"),
          participants: n.child("revoke").mapChildren((n) => {
            var r = (0, p.e)(n, v);
            return { jid: n.attrPhoneUserJid("jid"), error: r };
          }),
        })),
        c = {
          401: (0, p.d)("not-an-admin"),
          403: (0, p.d)("not-in-group"),
          404: (0, p.d)("group-not-found"),
          500: (0, p.d)("unknown"),
        };
      function l(n, r) {
        var i = (0, e.v)(
          "iq",
          { to: (0, e.g)(n), type: "set", xmlns: "w:g2", id: (0, e.t)() },
          (0, e.v)(
            "revoke",
            null,
            r.map((n) => (0, e.v)("participant", { jid: (0, e.g)(n.jid) }))
          )
        );
        return (0, t.e)(i, f).then((i) => {
          if (!i.success) return (0, p.f)(i, c);
          var t = i.result,
            e = [],
            o = [];
          return (
            t.participants.forEach((n) => {
              var i = r.find((r) => r.jid === n.jid);
              if (!i)
                return (
                  __LOG__(3)`Invitation not found for ${n.jid}`,
                  void SEND_LOGS("invitation-not-found")
                );
              n.error && o.push({ jid: n.jid, error: n.error }), e.push(i);
            }),
            Promise.resolve(e.length > 0 && (0, s.fc)(n, e))
              .then(() => {
                if (o.length)
                  return (0, u.b)().waitUntilPersisted(d.e.queryGroup(n));
              })
              .then(() => ({ failures: o }))
          );
        });
      }
      r.default = (0, o.c)()
        .finalStep("revokeGroupInvitations", (n) =>
          l(n.groupJid, n.invitations)
        )
        .end();
    },
  },
]);
