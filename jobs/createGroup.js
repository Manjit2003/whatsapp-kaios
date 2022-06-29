"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [76],
  {
    575: function (r, e, t) {
      t.r(e);
      var i = t(28),
        a = t(4),
        n = t(7),
        o = t(46),
        p = t(30),
        s = t(16),
        d = t(17),
        u = t(75),
        c = t(83),
        l = t(3),
        h = t(23),
        m = t(237),
        f = { superadmin: "superadmin", admin: "admin" },
        g = {
          401: (0, c.c)("add-not-allowed"),
          406: (0, c.c)("business-not-allowed"),
          500: (0, c.c)("too-many-participants"),
          403: (0, c.b)("add-request-required", (r) => {
            var e = r.child("add_request");
            return {
              code: e.attrString("code"),
              expiration: e.attrTime("expiration"),
            };
          }),
        },
        b = new o.a("createGroupReplyParser", (r) => {
          var e,
            t = r.child("group"),
            i = (0, n.o)(t.attrString("id") + "@g.us");
          if ("group" !== i.jidType)
            throw new Error("createGroupReplyParser fail on group jid");
          var a,
            o = i.groupJid;
          if (v()) {
            var p = t.maybeChild("ephemeral");
            p && (a = p.attrInt("expiration"));
          }
          return {
            success: !0,
            jid: o,
            title: t.attrString("subject"),
            titleTs: t.attrTime("s_t"),
            creatorJid: t.attrPhoneUserJid("creator"),
            creationTs: t.attrTime("creation"),
            participants: t.mapChildrenWithTag("participant", (r) => {
              var e = (0, c.e)(r, g);
              return {
                jid: r.attrPhoneUserJid("jid"),
                error: e,
                type: r.attrEnumOrDefault("type", f, "participant"),
              };
            }),
            expiration: null != (e = a) ? e : null,
            growthLocked: (0, m.b)(t),
          };
        }),
        j = {
          406: (0, c.d)("subject-too-long"),
          429: (0, c.d)("rate-limit"),
          500: (0, c.d)("too-many-groups"),
        };
      function v() {
        return (0, h.a)("disappearing_mode");
      }
      e.default = (0, u.c)()
        .step("createGroup", {
          code: (r) => {
            var e = r.title,
              t = r.key,
              n = r.participants,
              o = r.expiration,
              p = n.map((r) => (0, a.v)("participant", { jid: (0, a.g)(r) }));
            v() &&
              null != o &&
              p.push((0, a.v)("ephemeral", { expiration: (0, a.f)(o) }));
            var s = (0, a.v)(
              "iq",
              { to: a.e, type: "set", xmlns: "w:g2", id: (0, a.t)() },
              (0, a.v)("create", { subject: (0, a.b)(e), key: (0, a.b)(t) }, p)
            );
            return (0, i.e)(s, b).then((r) => {
              if (!r.success) return (0, c.f)(r, j);
              var e = r.result,
                t = e.jid,
                i = [],
                a = [];
              return (
                e.participants.forEach((r) => {
                  r.error
                    ? i.push({ jid: r.jid, error: r.error })
                    : a.push({ jid: r.jid, type: r.type });
                }),
                (0, d.rb)({
                  jid: t,
                  title: e.title,
                  titleTs: e.titleTs,
                  description: null,
                  descriptionId: null,
                  participants: a,
                  creatorJid: e.creatorJid,
                  creationTs: e.creationTs,
                  locked: !1,
                  announcement: !1,
                  support: !1,
                  expiration: e.expiration,
                  growthLocked: e.growthLocked,
                }).then(() => ({ result: { groupJid: t }, failures: i }))
              );
            });
          },
          stopRetryIf: {
            timePassedSeconds: l.b,
            onStopRetry: () => (0, c.d)("no-network"),
          },
        })
        .finalStep("setIcon", (r, e) => {
          var t = e.profilePicture,
            i = e.blob;
          if (!t && !i) return r;
          if (r.error) return r;
          var a = i || new Blob([t]);
          return (0, p.b)()
            .waitUntilPersisted(s.e.setGroupPicture(r.result.groupJid, a))
            .then(() => r);
        })
        .end();
    },
  },
]);
