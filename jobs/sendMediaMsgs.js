"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [118],
  {
    620: function (e, t, s) {
      s.r(t);
      var n = s(27),
        i = s.n(n),
        r = s(75),
        a = s(17),
        d = s(11),
        u = s(485),
        o = s(513),
        h = s(94),
        g = s(10),
        l = s(233),
        p = s(34),
        f = s(25),
        b = s(89),
        M = s(104);
      function y() {
        return (y = i()(function* (e, t) {
          for (
            var s = e.jids,
              n = e.requests,
              i = e.key,
              r = e.toStatus,
              h = (s.length + (r ? 1 : 0)) * n.length,
              g = yield _(i, h),
              l = 0,
              p = [],
              f = 0;
            f < s.length;
            f++
          ) {
            for (
              var y = s[f], c = yield (0, a.bb)(y), v = [], j = 0;
              j < n.length;
              j++
            ) {
              var q = n[j],
                S = g[l++],
                m = (0, o.c)(S, q, t),
                w = yield (0, a.jd)(y, m, null, {
                  to: c,
                  identityIds: new Map(),
                });
              w && w.outgoingTo
                ? v.push({
                    jid: y,
                    request: q,
                    requestIdx: j,
                    dbMsg: w.dbMsg,
                    to: w.outgoingTo,
                  })
                : (__LOG__(4)`sendMediaMsgs: result is undefined`,
                  (0, M.j)({ jid: y, dbMsg: m.msg, thumbSize: (0, o.b)(q) }));
            }
            p.push(...v);
          }
          var I = [];
          if (r) {
            if ("success" !== (yield (0, u.ensureStatusSettingsInitialized)()))
              throw (
                (__LOG__(4)`sendStatusMediaMsgs couldn't fetch settings.`,
                SEND_LOGS("send-status-no-settings"),
                new b.b({ algo: { type: "constant", delay: 3e5 } }))
              );
            for (var x = 0; x < n.length; x++) {
              var G = n[x],
                L = g[l++];
              if (
                "audio" !== G.type &&
                "voice" !== G.type &&
                "document" !== G.type &&
                "text/vcard" !== G.type
              ) {
                var O = (0, o.d)(L, G, t),
                  k = yield (0, a.kd)(O);
                k
                  ? I.push({
                      request: G,
                      requestIdx: x,
                      dbMsg: k.dbMsg,
                      to: { to: k.to, identityIds: new Map() },
                      jid: d.h,
                      origin: e.origin,
                    })
                  : (__LOG__(4)`sendMediaMsgs: status result is undefined`,
                    (0, M.j)({
                      jid: d.h,
                      dbMsg: O.msg,
                      thumbSize: (0, o.b)(G),
                      origin: e.origin,
                    }));
              } else __LOG__(4)`Invalid request to send ${G.type} to status`;
            }
          }
          return [...p, ...I];
        })).apply(this, arguments);
      }
      function _(e, t) {
        return (0, l.a)(
          new Uint8Array((0, p.k)(e)),
          "Share Media Message Keys",
          7 * t
        ).then((e) => {
          for (var s = [], n = new f.a(e), i = 0; i < t; i++) {
            var r = (0, a.s)((0, p.m)(n.readByteArray(7)));
            s.push(r);
          }
          return s;
        });
      }
      t.default = (0, r.c)()
        .step("writeToDb", (e, t, s) =>
          (function (e, t) {
            return y.apply(this, arguments);
          })(e, s.jobStartTime)
        )
        .step("hash", (e, t) => {
          var s = t.requests.map((e, t) => () =>
            (0, h.e)(e.plaintext).then((e) => ({ hash: e, requestIdx: t }))
          );
          return (0, g.q)(s).then((t) => {
            var s = new Map();
            return (
              t.forEach((e) => {
                var t = e.hash,
                  n = e.requestIdx;
                s.set(n, t);
              }),
              { results: e, hashes: s }
            );
          });
        })
        .finalStep("finish", (e) => {
          var t = [],
            s = e.results,
            n = e.hashes;
          return (
            s.forEach((e) => {
              var s = n.get(e.requestIdx);
              if (!s)
                return (
                  __LOG__(4)`sendMediaMsgs: no hash found`,
                  void (0, M.j)({
                    jid: e.jid,
                    dbMsg: e.dbMsg,
                    thumbSize: (0, o.b)(e.request),
                    origin: e.origin,
                  })
                );
              t.push((0, o.a)(e.jid, e.dbMsg.id, e.origin, e.to, s, e.request));
            }),
            Promise.all(t).then(() => {})
          );
        })
        .end();
    },
  },
]);
