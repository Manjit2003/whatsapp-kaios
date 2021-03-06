"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [89],
  {
    595: function (t, e, s) {
      s.r(e);
      var r = s(9),
        a = s.n(r),
        n = s(27),
        o = s.n(n),
        i = s(75),
        d = s(34),
        g = s(11),
        u = s(233),
        l = s(25),
        f = s(30),
        h = s(16),
        c = s(485),
        w = s(17),
        p = s(39),
        _ = s(15),
        v = s(89),
        m = s(24);
      e.default = (0, i.c)()
        .finalStep("forwardMsgs", (t, e, s) => {
          var r = s.jobStartTime,
            n = t.msgs,
            i = t.jids,
            M = t.toStatus,
            y = t.key,
            b = [],
            I = [];
          n.forEach((t) => {
            var e = (0, _.r)(t);
            M && e && I.push({ msgId: e, externalId: "" }),
              i.forEach((e) => {
                b.push({ msgId: t, jid: e });
              });
          });
          var S = b.length + I.length;
          if (0 !== S) {
            var k = Promise.all(
              i.map((t) => (0, w.bb)(t).then((e) => [t, e]))
            ).then((t) => new Map(t));
            return Promise.all([
              (0, u.a)(
                new Uint8Array((0, d.k)(y)),
                "Forward Message Keys",
                7 * S
              ),
              k,
            ])
              .then(
                (function () {
                  var t = o()(function* (t) {
                    var e = a()(t, 2),
                      s = e[0],
                      n = e[1],
                      o = new l.a(s),
                      i = [];
                    if (
                      (b.forEach((t) => {
                        var e = (0, w.s)((0, d.m)(o.readByteArray(7))),
                          s = n.get(t.jid);
                        s &&
                          i.push(
                            Object.assign({}, t, {
                              externalId: e,
                              outgoingTo: { to: s, identityIds: new Map() },
                            })
                          );
                      }),
                      I.length > 0 &&
                        "success" !==
                          (yield (0, c.ensureStatusSettingsInitialized)()))
                    )
                      throw (
                        (__LOG__(
                          4
                        )`forwardMsg to status couldn't fetch status settings.`,
                        SEND_LOGS("send-status-no-settings"),
                        new v.b({ algo: { type: "constant", delay: 3e5 } }))
                      );
                    for (var g = 0; g < I.length; g++)
                      I[g].externalId = (0, w.s)((0, d.m)(o.readByteArray(7)));
                    return (0, w.fd)(r, i, I);
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              )
              .then((t) => {
                t.length !== S && __LOG__(2)`Failed to forward all messages`;
                var e = t.map((t) => {
                  var e = t.dbMsg,
                    s = t.chat ? t.chat.jid : g.h;
                  if ("deduped" !== t.result || !(0, p.k)(e.ack)) {
                    var r;
                    if (t.chat) {
                      if (!t.outgoingTo)
                        return (
                          __LOG__(
                            4
                          )`forwardMsgs MsgWrittenResult without outgoingTo`,
                          void SEND_LOGS("forwardMsgs-null-outgoingTo")
                        );
                      r = t.outgoingTo;
                    } else r = { to: t.to, identityIds: new Map() };
                    var a = (0, m.k)(e)
                      ? { from: "forwardFromMessages" }
                      : void 0;
                    return (0, m.e)(e)
                      ? (0, f.b)().waitUntilPersisted(
                          h.e.uploadMedia(e.id, s, r, a)
                        )
                      : (0, f.b)().waitUntilPersisted(
                          h.e.sendWrittenMsg(e.rowId, s, r, void 0, a)
                        );
                  }
                });
                return Promise.all(e);
              })
              .then(() => {});
          }
          __LOG__(4)`forwardMsgs no messages to send`;
        })
        .end();
    },
  },
]);
