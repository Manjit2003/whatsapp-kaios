"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [128],
  {
    585: function (n, e, t) {
      t.r(e);
      var u = t(28),
        o = t(4),
        s = t(75),
        c = new (t(46).a)("setGroupAnnouncement", (n) => ({}));
      e.default = (0, s.c)()
        .finalStep("setGroupAnnouncement", (n) => {
          var e = n.groupJid,
            t = n.announcement,
            s = (0, o.v)(
              "iq",
              { to: (0, o.g)(e), type: "set", xmlns: "w:g2", id: (0, o.t)() },
              t
                ? (0, o.v)("announcement", null)
                : (0, o.v)("not_announcement", null)
            );
          return (0, u.e)(s, c).then((n) => {
            n.success || __LOG__(4)`setGroupAnnouncement error`;
          });
        })
        .end();
    },
  },
]);
