"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [132],
  {
    584: function (t, e, n) {
      n.r(e);
      var r = n(28),
        s = n(4),
        u = n(75),
        c = n(46),
        o = n(83),
        a = {
          401: (0, o.d)("not-authorized"),
          403: (0, o.d)("not-in-group"),
          404: (0, o.d)("no-such-group"),
          500: (0, o.d)("unknown"),
        },
        i = new c.a("setGroupParticipants", (t) => {
          if (t.hasChild("error")) {
            var e = t.child("error");
            return {
              success: !1,
              code: e.attrInt("code"),
              text: e.attrString("text"),
            };
          }
          return { success: !0 };
        });
      e.default = (0, u.c)()
        .finalStep("setGroupParticipants", (t) => {
          var e = t.groupJid,
            n = t.adminOnly,
            u = (0, s.v)(
              "iq",
              { to: (0, s.g)(e), type: "set", xmlns: "w:g2", id: (0, s.t)() },
              n ? (0, s.v)("locked", null) : (0, s.v)("unlocked", null)
            );
          return (0, r.e)(u, i).then((t) =>
            t.success ? "success" : (0, o.f)(t, a)
          );
        })
        .end();
    },
  },
]);
