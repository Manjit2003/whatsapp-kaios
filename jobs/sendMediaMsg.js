"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [117],
  {
    619: function (e, t, s) {
      s.r(t),
        s.d(t, "sendStatusMediaMsg", function () {
          return h;
        });
      var n = s(75),
        i = s(17),
        r = s(11),
        u = s(485),
        a = s(89),
        d = s(513),
        o = s(94),
        g = s(104);
      t.default = (0, n.c)()
        .step("writeToDb", (e, t, s) => {
          var n = s.jobStartTime,
            r = t.jid,
            u = t.request,
            a = t.key,
            o = t.quoted,
            h = t.remoteJid,
            l = (0, i.s)(a),
            b = (0, d.c)(l, u, n, h, null);
          return (function (e) {
            return (0, i.bb)(e).then((e) => ({
              to: e,
              identityIds: new Map(),
            }));
          })(r)
            .then((e) => (0, i.jd)(r, b, o, e))
            .then(
              (e) => (
                e ||
                  (__LOG__(2)`sendMediaMsg chat is gone`,
                  (0, g.j)({ jid: r, dbMsg: b.msg, thumbSize: (0, d.b)(u) })),
                e
              )
            );
        })
        .step("hash", (e, t) => {
          var s = t.request;
          return null != e
            ? (0, o.e)(s.plaintext).then((t) => ({ hash: t, result: e }))
            : {};
        })
        .finalStep("finish", (e, t) => {
          var s = e.result,
            n = e.hash,
            i = t.jid,
            r = t.request;
          if (s)
            return s.outgoingTo
              ? (0, d.a)(i, s.dbMsg.id, void 0, s.outgoingTo, n, r)
              : (__LOG__(
                  4
                )`sendMediaMsg writeOutgoingMsg returned null outgoingTo`,
                SEND_LOGS("sendMediaMsg-null-outgoingTo"),
                void (0, g.j)({
                  jid: i,
                  dbMsg: s.msg,
                  thumbSize: (0, d.b)(r),
                }));
        })
        .end();
      var h = (0, n.c)()
        .step("writeToDb", (e, t, s) => {
          var n = s.jobStartTime;
          return (0, u.ensureStatusSettingsInitialized)().then((e) => {
            if ("success" !== e)
              throw (
                (__LOG__(4)`sendStatusMediaMsg couldn't fetch settings.`,
                SEND_LOGS("send-status-no-settings"),
                new a.b({ algo: { type: "constant", delay: 3e5 } }))
              );
            var s = t.request,
              u = t.key,
              o = t.origin,
              h = (0, i.s)(u),
              l = (0, d.d)(h, s, n);
            return (0, i.kd)(l).then(
              (e) => (
                e ||
                  (0, g.j)({
                    jid: r.h,
                    dbMsg: l.msg,
                    thumbSize: (0, d.b)(s),
                    origin: o,
                  }),
                e
              )
            );
          });
        })
        .step("hash", (e, t) => {
          var s = t.request;
          return null != e
            ? (0, o.e)(s.plaintext).then((t) => ({ hash: t, result: e }))
            : {};
        })
        .finalStep("finish", (e, t) => {
          var s = e.result,
            n = e.hash,
            i = t.request,
            u = t.origin;
          if (s)
            return (0, d.a)(
              r.h,
              s.dbMsg.id,
              u,
              { to: s.to, identityIds: new Map() },
              n,
              i
            );
        })
        .end();
    },
  },
]);
