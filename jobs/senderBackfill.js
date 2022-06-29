"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [125],
  {
    618: function (e, i, n) {
      n.r(i),
        n.d(i, "senderBackfill", function () {
          return j;
        });
      var a = n(27),
        t = n.n(a),
        r = n(17),
        s = n(75),
        l = n(30),
        d = n(16),
        o = n(539),
        c = n(349),
        u = n(7),
        f = n(11),
        p = n(21),
        g = n(4),
        v = n(199),
        b = n(168),
        y = n(288),
        h = n(28),
        m = n(46),
        k = n(3),
        M = n(136),
        I = n(104),
        j = (0, s.c)()
          .step("syncDeviceList", (e) => {
            var i = e.jid,
              n = e.originalTo,
              a = (0, u.w)(i, {
                user: (e) => (0, p.l)(e),
                multicast: (e) => (0, p.m)(n.map(u.h)),
              });
            return (0, l.b)()
              .waitUntilCompleted(d.e.syncDeviceList(a))
              .then(() => Object.assign({}, e, { originalParticipants: a }))
              .catch(() => {
                var n = e.rowId;
                (0, r.T)(i, n).then((e) => {
                  var n = null == e ? void 0 : e.dbMsg;
                  (0, I.h)({ jid: i, dbMsg: n, e2eBackfill: !0 });
                });
              });
          })
          .finalStep(
            "sendMsg",
            (function () {
              var e = t()(function* (e) {
                if (e) {
                  var i = e.jid,
                    n = e.rowId;
                  if ((0, k.n)(e.ts, 300)) {
                    var a = yield (0, r.T)(i, n);
                    if (a) {
                      var t = e.originalTo,
                        s = e.primaryIdentityIds;
                      if ("chat" === a.type) {
                        var l = a.dbMsg,
                          d = a.jid,
                          p = a.mediaInfo,
                          g = a.quotePreview,
                          v = yield w(e.originalParticipants, t);
                        if (v.length > 0)
                          return (0, u.x)(d, {
                            user: (e) => {
                              return (
                                (i = e),
                                (n = v),
                                (a = l),
                                (t = p),
                                (r = (0, c.j)(l, g)),
                                (d = s),
                                (0, o.logMessageSendOk)({
                                  jid: i,
                                  dbMsg: a,
                                  mediaInfo: t,
                                  e2eBackfill: !0,
                                }),
                                (0, c.d)(
                                  i,
                                  n,
                                  a,
                                  t,
                                  r,
                                  "sender-backfill",
                                  d
                                ).then(() => {})
                              );
                              var i, n, a, t, r, d;
                            },
                            group: (e) =>
                              x(e, v, l, p, (0, b.b)(l, p, (0, c.j)(l, g)), s),
                          });
                      } else if ("status" === a.type) {
                        var h = yield w(e.originalParticipants, t);
                        if (h.length >= 1) {
                          var m = a.dbMsg,
                            M = a.mediaInfo;
                          return x(f.h, h, m, M, (0, y.a)(m, M), s);
                        }
                      }
                    }
                  } else {
                    var j,
                      T = null == (j = yield (0, r.T)(i, n)) ? void 0 : j.dbMsg;
                    (0, I.k)({
                      jid: i,
                      dbMsg: T,
                      isTerminal: !1,
                      e2eBackfill: !0,
                    });
                  }
                }
              });
              return function (i) {
                return e.apply(this, arguments);
              };
            })()
          )
          .end();
      function w(e, i) {
        return (0, r.K)(e).then((e) => (0, p.n)(e, i));
      }
      var T = new m.a(
        "sendMsgAck",
        (e) => (e.assertTag("ack"), { ts: e.attrTime("t") })
      );
      function x(e, i, n, a, t, r) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = t()(function* (e, i, n, a, t, l) {
          var d = yield (0, M.b)(i, t, l && { ids: l, type: "primary" });
          if (0 !== d.nodes.length) {
            (0, o.logMessageSendOk)({
              jid: e,
              dbMsg: n,
              mediaInfo: a,
              e2eBackfill: !0,
            });
            var c,
              u = (0, g.v)("participants", null, d.nodes),
              f = (0, v.a)(n),
              p = (0, M.c)("none", null, f),
              b = null != n.expiration ? (0, g.f)(n.expiration) : s.a,
              y = (0, g.v)(
                "message",
                {
                  id: (0, g.b)(n.externalId),
                  to: (0, g.g)(e),
                  type: (0, v.b)(n),
                  expiration: b,
                  device_fanout: (0, g.b)("false"),
                },
                u,
                p
              ),
              m = yield (0, h.k)(y, {
                id: n.externalId,
                class: "message",
                from: e,
                participant: null,
              }),
              k = T.parse(m);
            if (!k.error)
              return (0, r.Sb)(
                n.externalId,
                e,
                i,
                null == (c = k.success) ? void 0 : c.ts
              );
          }
        })).apply(this, arguments);
      }
    },
  },
]);
