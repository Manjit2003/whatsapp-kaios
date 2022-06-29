"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [123],
  {
    643: function (e, n, t) {
      t.r(n),
        t.d(n, "refreshTrustedContactSenderTokenJob", function () {
          return _;
        }),
        t.d(n, "resendTrustedContactSenderTokenJob", function () {
          return v;
        });
      var r = t(27),
        s = t.n(r),
        o = t(28),
        i = t(4),
        d = t(46),
        u = t(75),
        c = t(236),
        a = t(119),
        p = t(223),
        f = t(23),
        l = t(2),
        k = new d.a("sendTrustedContactSenderToken", (e) => {}),
        _ = (0, u.c)()
          .finalStep(
            "sendIq",
            (function () {
              var e = s()(function* (e, n) {
                var t = e.jid,
                  r = e.ts;
                if (!(0, f.a)("trusted_contacts_sender"))
                  return (
                    __LOG__(4)`sendTrustedContactSenderToken unexpected call`,
                    "skip"
                  );
                var s = r,
                  o = yield (0, c.c)(t);
                if (o && o.ts > s) return "skip";
                if (o && !(0, p.a)(o)) return "skip";
                var i = yield T(t, s);
                return "sent" === i && (yield (0, c.e)(t, s)), i;
              });
              return function (n, t) {
                return e.apply(this, arguments);
              };
            })()
          )
          .end(),
        v = (0, u.c)()
          .finalStep(
            "sendIq",
            (function () {
              var e = s()(function* (e) {
                var n = e.jid;
                if (!(0, f.a)("trusted_contacts_sender"))
                  return (
                    __LOG__(4)`sendTrustedContactSenderToken unexpected call`,
                    "skip"
                  );
                var t = yield (0, c.c)(n);
                return t ? T(n, t.ts) : "skip";
              });
              return function (n) {
                return e.apply(this, arguments);
              };
            })()
          )
          .end();
      function T(e, n) {
        return n < (0, p.c)(l.g.TC_SENDER)
          ? "skip"
          : (0, o.e)(
              (0, i.v)(
                "iq",
                { to: i.k, type: "set", xmlns: "privacy", id: (0, i.t)() },
                (0, i.v)(
                  "tokens",
                  null,
                  (0, i.v)("token", {
                    type: "trusted_contact",
                    jid: (0, i.g)(e),
                    t: (0, i.f)(n),
                  })
                )
              ),
              k
            ).then((e) => {
              if (!e.success) {
                if (4 === Math.floor(e.errorCode / 100))
                  return (
                    __LOG__(
                      4
                    )`Failed to send token generation request: ${e.errorCode} ${e.errorText}`,
                    SEND_LOGS("error-token-generation"),
                    "skip"
                  );
                throw new a.e({ algo: { type: "constant", delay: 3e5 } });
              }
              return "sent";
            });
      }
    },
  },
]);
