"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [130],
  {
    582: function (e, r, t) {
      t.r(r);
      var n = t(28),
        s = t(4),
        u = t(75),
        o = new (t(46).a)("setGroupEphemeralSetting", (e) =>
          e.hasChild("error")
            ? { success: !1, code: e.child("error").attrInt("code") }
            : { success: !0 }
        );
      r.default = (0, u.c)()
        .finalStep("setGroupEphemeralSetting", (e) => {
          var r = e.groupJid,
            t = e.expiration,
            u = (0, s.v)(
              "iq",
              { to: (0, s.g)(r), type: "set", xmlns: "w:g2", id: (0, s.t)() },
              null != t
                ? (0, s.v)("ephemeral", { expiration: (0, s.f)(t) })
                : (0, s.v)("not_ephemeral", null)
            );
          return (0, n.e)(u, o).then((e) => {
            if (e.success) return "success";
            switch (e.errorCode) {
              case 401:
                return "not-authorized";
              case 403:
                return "not-in-group";
              case 500:
                return "internal-server-error";
              default:
                return "unknown";
            }
          });
        })
        .end();
    },
  },
]);
