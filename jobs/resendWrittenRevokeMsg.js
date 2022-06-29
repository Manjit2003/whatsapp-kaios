"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [109],
  {
    617: function (e, t, n) {
      n.r(t),
        n.d(t, "resendWrittenRevokeMsg", function () {
          return m;
        });
      var i = n(7),
        r = n(4),
        s = n(17),
        a = n(75),
        d = n(28),
        c = n(349),
        l = n(168),
        p = n(288),
        u = n(340),
        v = n(2),
        o = n(21),
        b = n(136),
        g = n(11),
        h = n(199),
        m = (0, a.c)()
          .step("calculateNewDevicesList", (e) => {
            var t = e.jid,
              n = e.rowId,
              r = e.originalRecipientsList;
            return (0, i.w)(t, {
              user: (e) => (0, u.syncDeviceList)(o.l(e)),
              multicast: () => {
                var e = o.m(r.map(i.h));
                return (0, u.syncDeviceList)(e);
              },
            })
              .then(() => (0, s.bb)(t))
              .then((e) => ({ jid: t, rowId: n, remainingList: o.n(e, r) }));
          })
          .finalStep("encryptAndSend", (e) => {
            var t = e.jid,
              n = e.rowId,
              i = e.remainingList;
            if (!o.i(i))
              return (0, s.T)(t, n).then((e) => {
                if (e) {
                  var a = e.dbMsg.id,
                    u =
                      "chat" === e.type ? (0, l.b)(e.dbMsg) : (0, p.a)(e.dbMsg);
                  return Promise.all(
                    i.map((e) =>
                      (0, c.e)(e, u).then((t) => ({
                        type: t.type,
                        ciphertext: t.ciphertext,
                        deviceJid: e,
                      }))
                    )
                  )
                    .then((n) => {
                      var i = e.dbMsg,
                        s = (0, h.a)(i),
                        a = (0, g.l)(t) ? (0, b.c)("none", null, s) : null,
                        c = (0, r.v)(
                          "message",
                          {
                            id: (0, r.b)(i.externalId),
                            to: (0, r.g)(t),
                            type: (0, r.b)("text"),
                            edit: (0, r.b)("7"),
                            device_fanout: (0, r.b)("false"),
                          },
                          (0, r.v)(
                            "participants",
                            null,
                            n.map((e) => {
                              var t = e.type,
                                n = e.ciphertext,
                                i = e.deviceJid;
                              return (0, r.v)(
                                "to",
                                { jid: (0, r.g)(i) },
                                (0, b.c)(t, n, s)
                              );
                            })
                          ),
                          a
                        );
                      return (0, d.l)(c, {
                        id: i.externalId,
                        class: "message",
                        from: t,
                        participant: null,
                      });
                    })
                    .then(() => (0, s.dd)(a, v.a.SENT).then(() => {}));
                }
                __LOG__(2)`resendWrittenRevokeMsg ${n} was deleted`;
              });
          })
          .end();
    },
  },
]);
