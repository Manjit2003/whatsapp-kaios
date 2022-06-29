"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [135],
  {
    586: function (e, t, n) {
      n.r(t),
        n.d(t, "setOneToOneEphemeralSetting", function () {
          return m;
        });
      var r = n(4),
        a = n(75),
        i = n(46),
        s = n(3),
        l = n(62),
        o = n(349),
        p = n(7),
        u = n(28),
        O = n(17),
        g = n(2),
        h = n(36),
        c = n(168),
        _ = n(136),
        S = n(63),
        E = n(40),
        d = new i.a(
          "ackParser",
          (e) => (e.assertTag("ack"), { ts: e.attrTime("t") })
        ),
        m = (0, a.c)()
          .finalStep("encryptAndSendEphemeralSetting", (e) => {
            var t = e.userJid;
            return (0, S.b)(t).then((n) => {
              if (null == n)
                return (
                  __LOG__(
                    4
                  )`setOneToOneEphemeralSetting contact does not exist`,
                  "error"
                );
              if ((0, E.i)(n))
                return (
                  __LOG__(
                    4
                  )`setOneToOneEphemeralSetting contact is a business API`,
                  "error"
                );
              var a = e.expiration,
                i = e.ephemeralSettingTimestamp,
                S = e.id;
              return (function (e, t, n, a) {
                var i,
                  S = (0, h.e)(a),
                  E = {
                    type: g.f.EPHEMERAL,
                    subtype: "setting",
                    ts: (0, s.l)(1, n),
                    externalId: S,
                    author: g.b,
                    ack: g.a.CLOCK,
                    altIndex: "",
                    ephemeralExpiration: t,
                  };
                return (0, O.bb)(e)
                  .then((t) =>
                    (0, O.jd)(e, { msg: E }, null, {
                      to: t,
                      identityIds: new Map(),
                    })
                  )
                  .then((n) => {
                    if (!n)
                      return (
                        __LOG__(
                          2
                        )`setOneToOneEphemeralSetting writeOutgoingMsg failed`,
                        SEND_LOGS(
                          "setOneToOneEphemeralSetting-write-msg-failed"
                        ),
                        null
                      );
                    i = n.msg;
                    var a = (0, c.a)({
                        protocolMessage: {
                          type: l.c.EPHEMERAL_SETTING,
                          ephemeralExpiration: t,
                        },
                      }),
                      s = n.outgoingTo;
                    return null == s || 0 === s.to.length
                      ? (__LOG__(
                          2
                        )`setOneToOneEphemeralSetting has no outgoingTo`,
                        SEND_LOGS("setOneToOneEphemeralSetting-no-outgoingTo"),
                        null)
                      : 1 === s.to.length
                      ? (0, o.e)((0, p.e)(e), a).then((e) => {
                          var t = e.type,
                            n = e.ciphertext;
                          return (0, _.c)(t, n);
                        })
                      : (0, _.b)(s.to, a).then((e) =>
                          (0, r.v)("participants", null, e.nodes)
                        );
                  })
                  .then((t) => {
                    if (null == t) return null;
                    var n = (0, r.v)(
                      "message",
                      {
                        id: (0, r.b)(S),
                        to: (0, r.g)(e),
                        type: (0, r.b)("text"),
                      },
                      t
                    );
                    return (0, u.k)(n, {
                      id: S,
                      class: "message",
                      from: (0, p.e)(e),
                      participant: null,
                    }).catch(
                      () => (
                        __LOG__(
                          2
                        )`setOneToOneEphemeralSetting sending stanza failed`,
                        SEND_LOGS(
                          "setOneToOneEphemeralSetting-send-stanza-failed"
                        ),
                        null
                      )
                    );
                  })
                  .then((n) => {
                    if (null == n) return "error";
                    var r = d.parse(n);
                    if (r.error)
                      return (
                        __LOG__(
                          2
                        )`setOneToOneEphemeralSetting failed to parse an ack`,
                        SEND_LOGS(
                          "setOneToOneEphemeralSetting-ack-parse-failed"
                        ),
                        "error"
                      );
                    var a = r.success.ts;
                    return (0, O.Sc)(e, t, a)
                      .then(() => i && (0, O.Qb)(i.id, null, a, new Map()))
                      .then(() => "success")
                      .catch(
                        () => (
                          __LOG__(
                            2
                          )`setOneToOneEphemeralSetting updateContactEphemeralSettings failed`,
                          SEND_LOGS(
                            "setOneToOneEphemeralSetting-updateContactEphemeralSettings-failed"
                          ),
                          "error"
                        )
                      );
                  });
              })(t, a, i, S);
            });
          })
          .end();
    },
  },
]);
