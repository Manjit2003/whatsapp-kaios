"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [85],
  {
    608: function (e, t, o) {
      o.r(t);
      var a = o(28),
        r = o(4),
        l = o(46),
        n = o(75),
        s = o(292),
        c = new l.a("deleteTwoFactor", () => {});
      t.default = (0, n.c)()
        .finalStep("deleteTwoFactor", () =>
          Promise.all([
            (0, s.a)(),
            (0, a.e)(
              (0, r.v)(
                "iq",
                {
                  to: r.k,
                  type: "set",
                  xmlns: "urn:xmpp:whatsapp:account",
                  id: (0, r.t)(),
                },
                new r.n("2fa", void 0, [(0, r.v)("code", null)])
              ),
              c
            ).then((e) => {
              if (!e.success)
                throw new Error(
                  `Failed to delete 2fa: ${e.errorCode} ${e.errorText}`
                );
              __LOG__(2)`Successfully deleted 2fa`;
            }),
          ]).then(() => {})
        )
        .end();
    },
  },
]);
