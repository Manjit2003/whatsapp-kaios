"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [133],
  {
    580: function (e, t, s) {
      s.r(t);
      var r = s(28),
        u = s(4),
        c = s(75),
        n = s(46),
        o = s(83),
        a = {
          401: (0, o.d)("not-authorized"),
          403: (0, o.d)("not-in-group"),
          404: (0, o.d)("no-such-group"),
          406: (0, o.d)("not-acceptable"),
          500: (0, o.d)("unknown"),
        },
        d = new n.a("setGroupSubject", (e) => {
          if (e.hasChild("error")) {
            var t = e.child("error");
            return {
              success: !1,
              code: t.attrInt("code"),
              text: t.attrString("text"),
            };
          }
          return { success: !0 };
        });
      t.default = (0, c.c)()
        .finalStep("setGroupSubject", (e) => {
          var t = e.groupJid,
            s = e.subject,
            c = (0, u.v)(
              "iq",
              { to: (0, u.g)(t), type: "set", xmlns: "w:g2", id: (0, u.t)() },
              (0, u.v)("subject", null, s)
            );
          return (0, r.e)(c, d).then((e) =>
            e.success ? "success" : (0, o.f)(e, a)
          );
        })
        .end();
    },
  },
]);
