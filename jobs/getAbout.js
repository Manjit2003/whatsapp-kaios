"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [90],
  {
    624: function (t, e, r) {
      r.r(e),
        r.d(e, "getOwnAbout", function () {
          return d;
        }),
        r.d(e, "getUserAbout", function () {
          return l;
        });
      var n = r(28),
        s = r(4),
        o = r(46),
        u = r(6),
        a = r(75),
        i = r(219),
        c = new o.a("getAbout", (t) => {
          if (t.hasChild("status") && t.child("status").hasChild("user")) {
            var e = t.child("status").child("user");
            return "fail" === e.maybeAttrString("type")
              ? { type: "fail", code: e.attrInt("code") }
              : e.hasAttr("t")
              ? { type: "ok", content: e.contentString(), ts: e.attrTime("t") }
              : { type: "empty" };
          }
          return { type: "fail", code: 304 };
        }),
        d = (0, a.c)()
          .finalStep("getOwnAbout", () => {
            return ((t = u.r.get()),
            (0, n.e)(
              (function (t) {
                return (0, s.v)(
                  "iq",
                  { to: s.k, type: "get", xmlns: "status", id: (0, s.t)() },
                  (0, s.v)(
                    "status",
                    null,
                    (0, s.v)("user", { jid: (0, s.g)(t) })
                  )
                );
              })(t),
              c
            ).then((t) => {
              if (!t.success)
                throw (
                  (t.errorCode,
                  new Error(
                    `Failed to get about Message: ${t.errorCode} ${t.errorText}`
                  ))
                );
              var e = t.result;
              return (
                __LOG__(2)`getAbout: response ${e.type} code ${
                  "fail" === e.type ? e.code : "-"
                }`,
                t.result
              );
            })).then((t) => {
              switch (t.type) {
                case "ok":
                  return u.a.set(t.content).then(() => {});
                case "empty":
                  return (
                    __LOG__(3)`Empty status received for own`,
                    u.a.set(null).then(() => {})
                  );
                default:
                  return (
                    t.type,
                    void __LOG__(
                      2
                    )`getOwnAbout: unhandled response code ${t.code}, not saving it to InfoStore`
                  );
              }
            });
            var t;
          })
          .end(),
        l = (0, a.c)()
          .finalStep("getUserAbout", (t) => {
            var e = t.jid;
            return (0, i.statusQuerySync)([e]).then(() => {});
          })
          .end();
    },
  },
]);
