"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [136],
  {
    609: function (e, r, a) {
      a.r(r),
        a.d(r, "changeTwoFactorPin", function () {
          return u;
        }),
        a.d(r, "changeTwoFactorEmail", function () {
          return f;
        });
      var n = a(28),
        t = a(4),
        o = a(46),
        c = a(75),
        i = a(292),
        l = a(6),
        s = new o.a("setTwoFactor", (e) => {});
      r.default = (0, c.c)()
        .finalStep("setTwoFactor", (e) => {
          var r = e.pin,
            a = e.email;
          return (0, n.e)(d(r.join(""), a), s).then((e) => {
            if (!e.success)
              throw new Error(
                `Failed to set 2fa: ${e.errorCode} ${e.errorText}`
              );
            var n = null != a;
            __LOG__(2)`Successfully set 2fa ${n ? "with" : "without"} email`,
              (0, i.b)(r, 0, n);
          });
        })
        .end();
      var u = (0, c.c)()
          .finalStep("changeTwoFactorPin", (e) => {
            var r = e.pin;
            return (0, n.e)(d(r.join("")), s).then((e) => {
              if (!e.success)
                throw new Error(
                  `Failed to change 2fa pin: ${e.errorCode} ${e.errorText}`
                );
              __LOG__(2)`Successfully changed 2fa pin`, (0, i.f)(r, 0);
            });
          })
          .end(),
        f = (0, c.c)()
          .finalStep("changeTwoFactorEmail", (e) => {
            var r = e.email,
              a = l.K.get();
            return "disabled" === a.status
              ? (__LOG__(
                  4
                )`Unable to change 2fa email : two factor is disabled`,
                Promise.resolve())
              : (0, n.e)(d(a.pin, r), s).then((e) => {
                  if (!e.success)
                    throw new Error(
                      `Failed to change 2fa email: ${e.errorCode} ${e.errorText}`
                    );
                  __LOG__(2)`Successfully changed 2fa email`, (0, i.d)();
                });
          })
          .end();
      function d(e, r) {
        var a = [(0, t.v)("code", null, e)];
        return (
          null != r && a.push((0, t.v)("email", null, r)),
          (0, t.v)(
            "iq",
            {
              to: t.k,
              type: "set",
              xmlns: "urn:xmpp:whatsapp:account",
              id: (0, t.t)(),
            },
            new t.n("2fa", void 0, a)
          )
        );
      }
    },
  },
]);
