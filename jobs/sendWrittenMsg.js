"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [23],
  {
    539: function (e, i, n) {
      n.r(i),
        n.d(i, "sendWrittenMsg", function () {
          return l;
        }),
        n.d(i, "logMessageSendOk", function () {
          return u;
        });
      var d = n(2),
        t = n(17),
        o = n(75),
        r = n(3),
        s = n(104),
        a = n(39),
        g = n(349),
        l = (0, o.c)()
          .finalStep("encryptAndSend", {
            code: (e) => {
              var i,
                n = e.chat,
                o = e.rowId,
                r = e.mediaUploaded,
                l = e.origin;
              if (e.outgoingTo) i = e.outgoingTo;
              else {
                var f = e.to;
                if (!f)
                  return (
                    __LOG__(
                      4
                    )`sendWrittenMsg both 'outgoingTo' and 'to' are null`,
                    void SEND_LOGS("sendWrittenMsg-to-is-null")
                  );
                i = { to: f, identityIds: new Map() };
              }
              return (0, t.T)(n, o).then((t) => {
                if (!t)
                  return (
                    __LOG__(2)`sendWrittenMsg ${o} to ${n} was deleted`,
                    void (0, s.l)(n, l)
                  );
                var f = t.dbMsg;
                if (!(0, a.k)(f.ack)) {
                  if (f.type === d.f.REVOKED)
                    return (
                      __LOG__(
                        2
                      )`sendWrittenMsg ${t.dbMsg.id} was revoked before sent`,
                      void (0, s.i)(e.chat, l)
                    );
                  var b;
                  if ("chat" === t.type) {
                    var c = t.dbMsg,
                      v = t.jid,
                      p = t.mediaInfo,
                      M = t.quotePreview;
                    b = (0, g.b)(v, i.to, c, p, M);
                  } else {
                    var _ = t.dbMsg,
                      h = t.mediaInfo;
                    b = (0, g.c)(i.to, _, h);
                  }
                  return b.then((e) => {
                    var i, n;
                    switch (e) {
                      case "sent":
                        u({
                          jid: t.jid,
                          dbMsg: t.dbMsg,
                          mediaInfo: t.mediaInfo,
                          mediaUploaded: r,
                          origin: l,
                        });
                        break;
                      case "skip-revoke":
                      case "skip-self":
                      case "skip-sender-backfill":
                        break;
                      default:
                        (0, s.j)({
                          jid: t.jid,
                          dbMsg: t.dbMsg,
                          thumbSize:
                            null == (i = t.mediaInfo) || null == (n = i.preview)
                              ? void 0
                              : n.byteLength,
                          origin: l,
                        });
                    }
                  });
                }
                __LOG__(2)`sendWrittenMsg ${t.dbMsg.id} already sent`;
              });
            },
            stopRetryIf: {
              timePassedSeconds: r.b,
              onStopRetry: (e) =>
                (0, t.T)(e.chat, e.rowId).then((i) =>
                  i
                    ? (0, t.dd)(i.dbMsg.id, d.a.EXPIRED).then(() => {
                        var n, d;
                        (0, s.k)({
                          jid: e.chat,
                          dbMsg: i.dbMsg,
                          thumbSize:
                            null == (n = i.mediaInfo) || null == (d = n.preview)
                              ? void 0
                              : d.byteLength,
                          origin: e.origin,
                        });
                      })
                    : (__LOG__(
                        3
                      )`encryptAndSend: msg with rowId ${e.rowId} no longer exists`,
                      void (0, s.l)(e.chat, e.origin))
                ),
            },
          })
          .end();
      function u(e) {
        var i,
          n = e.jid,
          d = e.dbMsg,
          t = e.mediaInfo,
          o = e.mediaUploaded,
          r = e.origin,
          a = e.e2eBackfill,
          g = void 0 !== a && a;
        (0, s.g)({
          jid: n,
          dbMsg: d,
          thumbSize:
            null == t || null == (i = t.preview) ? void 0 : i.byteLength,
          result: 1,
          isTerminal: !0,
          origin: r,
          e2eBackfill: g,
        }),
          null != d.forwardOriginalTs && (0, s.f)(d, n, !!o);
      }
    },
  },
]);
