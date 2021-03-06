"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [92],
  {
    588: function (r, t, e) {
      e.r(t);
      var o = e(75),
        s = e(237),
        n = e(83),
        i = e(28),
        a = e(4),
        u = new o.b(
          "joinGroupViaInviteParser",
          (r) => (
            r.assertTag("iq"),
            r.assertAttr("from", "g.us"),
            r.assertAttr("type", "result"),
            r.hasChild("group")
              ? { jid: r.child("group").attrGroupJid("jid") }
              : r.throw("Unrecognized format")
          )
        ),
        c = { "growth-locked": ["436", s.a] },
        p = (0, n.a)(
          "errorJoinGroupViaInviteParser",
          {
            401: "not-authorized",
            404: "group-not-found",
            410: "invite-link-reset",
            419: "too-many-participants",
            500: "unknown",
          },
          c
        );
      t.default = (0, o.c)()
        .finalStep("join", (r) => {
          var t = r.code,
            e = (0, a.v)(
              "iq",
              { xmlns: "w:g2", type: "set", to: a.e, id: (0, a.t)() },
              (0, a.v)("invite", { code: (0, a.b)(t) })
            );
          return (0, i.f)(e, u, p).then((r) =>
            r.success ? "success" : r.customError
          );
        })
        .end();
    },
  },
]);
