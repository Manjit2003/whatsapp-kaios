"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [73],
  {
    614: function (e, r, t) {
      t.r(r),
        t.d(r, "blockUser", function () {
          return i;
        }),
        t.d(r, "unblockUser", function () {
          return d;
        });
      var n = t(28),
        s = t(4),
        c = t(6),
        o = t(17),
        l = t(75),
        u = new (t(46).a)("blockUser", (e) => {
          if (!e.hasChild("error")) return { success: !0 };
          var r = e.child("error");
          return {
            success: !1,
            code: r.attrInt("code"),
            text: r.attrString("text"),
          };
        });
      function a() {
        return o
          .y()
          .then((e) => {
            var r =
              0 === e.length
                ? (0, s.v)("list", { name: "default" })
                : (0, s.v)(
                    "list",
                    { name: "default" },
                    e.map((e) =>
                      (0, s.v)("item", {
                        action: "deny",
                        type: "jid",
                        value: (0, s.g)(e),
                        order: "1",
                      })
                    )
                  );
            return (0, s.v)(
              "iq",
              {
                xmlns: "jabber:iq:privacy",
                from: (0, s.g)(c.r.get()),
                type: "set",
                id: (0, s.t)(),
              },
              (0, s.v)("query", null, r)
            );
          })
          .then((e) => (0, n.e)(e, u))
          .then(
            (e) => {
              __LOG__(2)`updated block list`;
            },
            (e) => {
              __LOG__(2)`error updating block list: ${e}`;
            }
          );
      }
      var i = (0, l.c)()
          .step("storeBlockedUser", (e) => {
            var r = e.user;
            return o.b(r);
          })
          .finalStep("sendBlockedListToServer", a)
          .end(),
        d = (0, l.c)()
          .step("RemoveBlockedUser", (e) => {
            var r = e.user;
            return o.ec(r);
          })
          .finalStep("sendBlockedListToServer", a)
          .end();
    },
  },
]);
