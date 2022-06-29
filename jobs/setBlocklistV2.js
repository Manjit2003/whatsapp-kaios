"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [127],
  {
    610: function (e, t, s) {
      s.r(t),
        s.d(t, "setBlocklistV2", function () {
          return b;
        });
      var r = s(28),
        a = s(46),
        h = s(4),
        c = s(75),
        i = s(21),
        n = s(17),
        d = s(31),
        l = s.n(d),
        o = s(6),
        u = s(83),
        m = {
          400: (0, u.d)("bad-request"),
          406: (0, u.d)("not-acceptable"),
          500: (0, u.d)("internal-server-error"),
        },
        p = new a.a("setBlocklistV2", (e) => {
          var t = e.child("list");
          return t.attrEnum("matched", { true: !0, false: !1 })
            ? { type: "hashMatched", dhash: t.maybeAttrString("dhash") }
            : {
                type: "hashMismatched",
                clientDHash: t.maybeAttrString("c_dhash"),
                dhash: t.maybeAttrString("dhash"),
                list: (0, i.m)(
                  t.mapChildrenWithTag("item", (e) => e.attrPhoneUserJid("jid"))
                ),
              };
        }),
        b = (0, c.c)()
          .finalStep("setBlocklistV2", (e) => {
            var t = e.jid,
              s = e.action;
            return o.E.get().mdBlocklistV2
              ? (0, n.z)().then((e) => {
                  var a = (0, h.v)(
                    "iq",
                    {
                      xmlns: "blocklist",
                      type: "set",
                      to: h.k,
                      id: (0, h.t)(),
                    },
                    (0, h.v)("item", {
                      action: (0, h.b)(s),
                      jid: (0, h.g)(t),
                      dhash: e.dhash ? (0, h.b)(e.dhash) : h.d,
                    })
                  );
                  return (0, r.e)(a, p).then((r) => {
                    if (!r.success)
                      return (
                        __LOG__(
                          4
                        )`setBlocklistV2 error with code ${r.errorCode}, text ${r.errorText}`,
                        (0, u.f)(r, m)
                      );
                    var a = r.result;
                    switch (a.type) {
                      case "hashMatched":
                        var h =
                          "block" === s
                            ? (0, i.a)(e.users, t)
                            : (0, i.n)(e.users, (0, i.l)(t));
                        return (0, n.rc)(h, a.dhash, e.dhash).then(() => ({
                          result: "success-hash-matched",
                        }));
                      case "hashMismatched":
                        return (0, n.rc)(
                          a.list,
                          a.dhash,
                          a.clientDHash
                        ).then(() => ({ result: "success-hash-mismatched" }));
                      default:
                        return (
                          (0, l.a)(a.type), { error: { reason: "unknown" } }
                        );
                    }
                  });
                })
              : (__LOG__(
                  2
                )`setBlocklistV2 requires md_blocklist_v2 server prop`,
                { error: { reason: "server-prop-disabled" } });
          })
          .end();
    },
  },
]);
