"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [105],
  {
    597: function (e, r, t) {
      t.r(r);
      var s = t(9),
        l = t.n(s),
        n = t(101),
        a = t(28),
        u = t(4),
        o = t(75),
        i = t(46),
        c = t(30),
        d = t(16),
        p = t(17),
        m = t(63),
        v = t(2),
        b = t(168),
        h = t(62),
        w = t(199),
        f = t(329),
        _ = t(6),
        g = t(49),
        y = t(83),
        U = t(349),
        k = t(79),
        S = t(31),
        I = t.n(S),
        T = new i.a("reportUserSpam", (e) => ({})),
        O = { 400: (0, y.d)("bad-request"), 500: (0, y.d)("unknown") };
      r.default = (0, o.c)()
        .step("reportUserSpam", (e) => {
          var r,
            t = e.userJid,
            s = e.spamFlow,
            o = !1;
          if (null == e.reportType || "chat" === e.reportType)
            r = (0, m.b)(t).then((e) =>
              null == (null == e ? void 0 : e.chatId)
                ? []
                : (0, p.wb)(e.chatId, 5)
            );
          else {
            if ("message" !== e.reportType)
              return (0, I.a)(e.reportType), { error: { reason: "unknown" } };
            var i = e.msgId;
            r = (0, p.zb)(i).then((e) =>
              null == e
                ? []
                : ((0, g.i)(e.msg.author) !== t &&
                    (__LOG__(
                      4
                    )`reportUserSpam: Provided userJid does not match reported message's`,
                    SEND_LOGS("reportUserSpam-userJid-not-match")),
                  [e])
            );
          }
          return (null != r
            ? r.then((e) => {
                var r = [];
                return (
                  e.forEach((e) => {
                    try {
                      r.push(
                        (function (e, r, t, s) {
                          var l,
                            a,
                            o,
                            i,
                            c = e.ts.toString();
                          e.type === v.f.FUTUREPROOF
                            ? ((l = new Uint8Array(e.protobuf)),
                              (a = u.d),
                              (o = (0, u.b)("2")))
                            : e.type === v.f.CIPHERTEXT
                            ? ((l = null), (a = u.d), (o = u.d))
                            : null != e.media ||
                              !(0, k.b)(e) ||
                              ("viewed" !== e.viewOnceState &&
                                "expired" !== e.viewOnceState)
                            ? ((l = (0, n.a)(
                                h.g,
                                (0, b.b)(e, r, t)
                              ).readByteArray()),
                              (a = (0, w.b)(e)),
                              (o = (0, u.b)("2")))
                            : ((a = (0, w.b)(e)),
                              (o = (0, u.b)("2")),
                              (i =
                                "viewed" === e.viewOnceState
                                  ? "view_once_opened"
                                  : "view_once_expired"));
                          var d = (0, g.i)(e.author);
                          if (!d) throw new Error("Incorrect message author");
                          return (0, u.v)(
                            "message",
                            {
                              t: (0, u.b)(c),
                              from: (0, u.g)(d),
                              to: (0, u.g)(s),
                              type: a,
                              id: (0, u.b)(e.externalId),
                              deleted_reason: i ? (0, u.b)(i) : u.d,
                            },
                            e.isMulticast ? (0, u.v)("multicast", null) : null,
                            e.urlNumber ? (0, u.v)("url_number", null) : null,
                            e.urlText ? (0, u.v)("url_text", null) : null,
                            e.hsmTemplateId
                              ? (0, u.v)("hsm", {
                                  tid: (0, u.b)(e.hsmTemplateId),
                                })
                              : null,
                            (0, u.v)("raw", { v: o, mediatype: (0, w.a)(e) }, l)
                          );
                        })(
                          e.msg,
                          e.mediaInfo,
                          (0, U.j)(e.msg, e.quotePreview),
                          _.r.get()
                        )
                      );
                    } catch (e) {
                      __LOG__(
                        3
                      )`Failed to format message for user spam report: ${e}`,
                        (o = !0);
                    }
                  }),
                  r
                );
              })
            : Promise.resolve([])
          ).then((e) => {
            var r = (0, u.v)(
                "iq",
                { to: u.k, type: "set", xmlns: "spam", id: (0, u.t)() },
                (0, u.v)(
                  "spam_list",
                  { jid: (0, u.g)(t), spam_flow: (0, u.b)(s) },
                  e
                )
              ),
              n = (0, a.e)(r, T).then((e) =>
                e.success ? { result: "success" } : (0, y.f)(e, O)
              );
            return o
              ? Promise.all([n, (0, f.a)(!1)]).then((e) => l()(e, 1)[0])
              : n;
          });
        })
        .step("blockUser", (e, r) => {
          var t = r.userJid,
            s = r.blockUser;
          return "success" !== e && e.error
            ? e
            : s
            ? (_.E.get().mdBlocklistV2
                ? (0, c.b)().waitUntilCompleted(d.e.setBlocklistV2(t, "block"))
                : (0, c.b)().waitUntilCompleted(d.e.blockUser(t))
              ).then(() => ({ result: "success-blocked" }))
            : { result: "success" };
        })
        .finalStep("deleteChat", (e, r) => {
          if ("success" !== e && e.error) return e;
          var t = r.userJid,
            s = r.deleteChat;
          return (0, m.b)(t).then((r) => {
            var t = null == r ? void 0 : r.chatId;
            return null != t && s
              ? (0, c.b)()
                  .waitUntilCompleted(d.e.deleteChat(t, !1))
                  .then(() => ("success" === e ? { result: "success" } : e))
              : "success" === e
              ? { result: "success" }
              : e;
          });
        })
        .end();
    },
  },
]);
