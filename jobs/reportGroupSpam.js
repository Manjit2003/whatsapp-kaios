"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [104],
  {
    598: function (e, r, t) {
      t.r(r);
      var s = t(9),
        o = t.n(s),
        a = t(101),
        p = t(28),
        i = t(4),
        n = t(75),
        u = t(46),
        l = t(30),
        c = t(16),
        d = t(17),
        m = t(2),
        h = t(24),
        b = t(168),
        g = t(62),
        v = t(199),
        f = t(6),
        w = t(329),
        _ = t(49),
        y = t(83),
        G = t(349),
        k = t(79),
        S = t(31),
        O = t.n(S),
        U = new u.a("reportGroupSpam", (e) => ({})),
        C = { 400: (0, y.d)("bad-request"), 500: (0, y.d)("unknown") };
      r.default = (0, n.c)()
        .step("reportGroupSpam", (e) => {
          var r,
            t,
            s = e.groupChat,
            n = e.spamFlow;
          if (null == e.reportType || "chat" === e.reportType)
            r = (0, d.wb)(s.id, 5);
          else {
            if ("message" !== e.reportType)
              return (0, O.a)(e.reportType), { error: { reason: "unknown" } };
            var u = e.msgId;
            r = (0, d.zb)(u).then((e) =>
              null == e
                ? []
                : (e.msg.chat !== s.id &&
                    (__LOG__(
                      4
                    )`reportGroupSpam: Provided chat does not match reported message's`,
                    SEND_LOGS("reportGroupSpam-chat-not-match")),
                  (t = (0, _.i)(e.msg.author)),
                  [e])
            );
          }
          return r
            .then((e) => {
              var r = [],
                t = !1,
                u = f.r.get();
              e.forEach((e) => {
                try {
                  r.push(
                    (function (e, r, t, s, o) {
                      var p,
                        n,
                        u,
                        l,
                        c,
                        d = e.ts.toString();
                      if (
                        (e.type === m.f.FUTUREPROOF
                          ? ((p = new Uint8Array(e.protobuf)),
                            (n = i.d),
                            (u = (0, i.b)("2")))
                          : (0, h.i)(e)
                          ? ((p = null), (n = i.d), (u = i.d))
                          : null != e.media ||
                            !(0, k.b)(e) ||
                            ("viewed" !== e.viewOnceState &&
                              "expired" !== e.viewOnceState)
                          ? ((p = (0, a.a)(
                              g.g,
                              (0, b.b)(e, r, t)
                            ).readByteArray()),
                            (n = (0, v.b)(e)),
                            (u = (0, i.b)("2")))
                          : ((n = (0, v.b)(e)),
                            (u = (0, i.b)("2")),
                            (l =
                              "viewed" === e.viewOnceState
                                ? "view_once_opened"
                                : "view_once_expired")),
                        e.author === m.c)
                      )
                        c = i.d;
                      else if (e.author === m.b) c = (0, i.g)(o);
                      else {
                        var f = (0, _.i)(e.author);
                        if (!f)
                          throw new Error("Author of message is incorrect JID");
                        c = (0, i.g)(f);
                      }
                      return (0, i.v)(
                        "message",
                        {
                          t: (0, i.b)(d),
                          from: (0, i.g)(s),
                          participant: c,
                          id: (0, i.b)(e.externalId),
                          type: n,
                          deleted_reason: l ? (0, i.b)(l) : i.d,
                        },
                        (0, G.g)(e),
                        (0, G.h)(e),
                        (0, G.i)(e),
                        e.hsmTemplateId
                          ? (0, i.v)("hsm", { tid: (0, i.b)(e.hsmTemplateId) })
                          : null,
                        (0, i.v)("raw", { v: u, mediatype: (0, v.a)(e) }, p)
                      );
                    })(
                      e.msg,
                      e.mediaInfo,
                      (0, G.j)(e.msg, e.quotePreview),
                      s.jid,
                      u
                    )
                  );
                } catch (e) {
                  __LOG__(
                    3
                  )`Failed to format message for group spam report: ${e}`,
                    (t = !0);
                }
              });
              var l = (0, i.v)(
                  "iq",
                  { to: i.k, type: "set", xmlns: "spam", id: (0, i.t)() },
                  (0, i.v)(
                    "spam_list",
                    {
                      subject: (0, i.b)(s.groupInfo.title),
                      jid: (0, i.g)(s.jid),
                      spam_flow: (0, i.b)(n),
                    },
                    r
                  )
                ),
                c = (0, p.e)(l, U).then((e) =>
                  e.success ? { result: "success" } : (0, y.f)(e, C)
                );
              return t
                ? Promise.all([c, (0, w.a)(!1)]).then((e) => o()(e, 1)[0])
                : c;
            })
            .then((e) =>
              e.error || !t ? e : Object.assign({}, e, { authorJid: t })
            );
        })
        .step("blockUser", (e, r) => {
          if (
            "message" !== r.reportType ||
            !0 !== r.blockAuthor ||
            e.error ||
            "string" == typeof e
          )
            return e;
          var t = e.authorJid;
          return t
            ? (f.E.get().mdBlocklistV2
                ? (0, l.b)().waitUntilCompleted(c.e.setBlocklistV2(t, "block"))
                : (0, l.b)().waitUntilCompleted(c.e.blockUser(t))
              ).then(() => e)
            : e;
        })
        .step("removeMeFromGroup", (e, r) => {
          var t = r.groupChat,
            s = r.exitGroup;
          return "success" !== e && e.error
            ? e
            : s
            ? (0, l.b)()
                .waitUntilCompleted(
                  c.e.removeGroupParticipants(t.jid, [f.r.get()])
                )
                .then(() => ({ result: "success-left" }))
            : { result: "success" };
        })
        .finalStep("deleteGroup", (e, r) => {
          var t = r.groupChat,
            s = r.deleteGroup;
          return "success" !== e && e.error
            ? e
            : s
            ? (0, l.b)()
                .waitUntilCompleted(c.e.deleteChat(t.id, !1))
                .then(() => ("success" === e ? { result: "success" } : e))
            : "success" === e
            ? { result: "success" }
            : e;
        })
        .end();
    },
  },
]);
