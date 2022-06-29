"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [71],
  {
    629: function (e, t, r) {
      r.r(t);
      var s = r(75),
        n = r(28),
        a = r(4),
        o = r(83),
        i = {
          404: (0, o.d)("group-not-found"),
          410: (0, o.d)("invalid-request"),
          419: (0, o.d)("too-many-participants"),
          500: (0, o.d)("unknown"),
        },
        d = new s.b(
          "acceptGroupAddRequestParser",
          (e) => (
            e.assertTag("iq"),
            e.assertAttr("type", "result"),
            { jid: e.attrGroupJid("from") }
          )
        );
      t.default = (0, s.c)()
        .finalStep("join", (e) => {
          var t = e.group,
            r = e.code,
            s = e.expiration,
            p = e.admin,
            c = (0, a.v)(
              "iq",
              { xmlns: "w:g2", type: "set", to: (0, a.g)(t), id: (0, a.t)() },
              (0, a.v)("accept", {
                code: (0, a.b)(r),
                expiration: (0, a.f)(s),
                admin: (0, a.g)(p),
              })
            );
          return (0, n.e)(c, d).then((e) =>
            e.success || 409 === e.errorCode ? "success" : (0, o.f)(e, i)
          );
        })
        .end();
    },
  },
]);
