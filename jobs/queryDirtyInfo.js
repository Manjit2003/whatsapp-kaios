"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [100],
  {
    601: function (e, t, r) {
      r.r(t);
      var s = r(75),
        p = r(218),
        n = r(537),
        u = r(28),
        a = r(4),
        i = new (r(46).a)("cleanDirtyReply", (e) => {});
      t.default = (0, s.c)()
        .step("queryInfo", (e) => {
          var t = e.dirtyGroups,
            r = [...e.unsupportedDirtyBits];
          return t
            ? (r.push(n.GROUPS_DIRTY_BIT),
              (0, p.queryAllGroups)().then(() => r))
            : r;
        })
        .finalStep("clearDirtyBits", (e) => {
          if (!(e.length < 1)) {
            var t = (0, a.v)(
              "iq",
              {
                to: a.k,
                type: "set",
                xmlns: "urn:xmpp:whatsapp:dirty",
                id: (0, a.t)(),
              },
              e.map((e) => (0, a.v)("clean", { type: (0, a.b)(e) }))
            );
            return (0, u.e)(t, i).then(() => {
              __LOG__(2)`successfully cleared dirty bits`;
            });
          }
        })
        .end();
    },
  },
]);
