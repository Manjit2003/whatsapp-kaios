"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [131],
  {
    583: function (e, o, s) {
      s.r(o);
      var t = s(28),
        c = s(4),
        n = s(75),
        r = new (s(46).a)("setGroupLocked", (e) => ({}));
      o.default = (0, n.c)()
        .finalStep("setGroupLocked", (e) => {
          var o = e.groupJid,
            s = e.locked
              ? (0, c.v)("locked", null)
              : (0, c.v)("unlocked", null),
            n = (0, c.v)(
              "iq",
              { to: (0, c.g)(o), type: "set", xmlns: "w:g2", id: (0, c.t)() },
              s
            );
          return (0, t.e)(n, r).then((e) => {
            e.success || __LOG__(4)`setGroupLocked error`;
          });
        })
        .end();
    },
  },
]);
