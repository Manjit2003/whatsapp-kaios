"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [116],
  {
    587: function (e, a, n) {
      n.r(a),
        n.d(a, "sendEphemeralSyncResponse", function () {
          return E;
        });
      var s = n(4),
        p = n(75),
        t = n(62),
        i = n(349),
        r = n(7),
        d = n(28),
        l = n(36),
        o = n(168),
        c = n(136),
        m = n(23),
        E = (0, p.c)()
          .finalStep("sendEphemeralSyncResponse", (e) => {
            var a = e.userJid,
              n = e.ephemeralExpiration,
              p = e.ephemeralSettingTimestamp,
              E = e.disappearingModeInitiator,
              h = e.id,
              S = (0, l.e)(h),
              g = {
                type: t.c.EPHEMERAL_SYNC_RESPONSE,
                ephemeralExpiration: n,
                ephemeralSettingTimestamp: p,
              };
            (0, m.a)("disappearing_mode") &&
              (g.disappearingMode = {
                initiator: null != E ? E : t.a.CHANGED_IN_CHAT,
              });
            var u = (0, o.a)({ protocolMessage: g }),
              _ = (0, r.e)(a);
            return (0, i.e)(_, u).then((e) => {
              var a = e.type,
                n = e.ciphertext,
                p = (0, s.v)(
                  "message",
                  { id: (0, s.b)(S), to: (0, s.g)(_), type: (0, s.b)("text") },
                  (0, c.c)(a, n)
                );
              return (0, d.l)(p, {
                id: S,
                class: "message",
                from: _,
                participant: null,
              }).catch(() => {
                __LOG__(2)`sendEphemeralSyncResponse sending stanza failed`,
                  SEND_LOGS("sendEphemeralSyncResponse-send-stanza-failed");
              });
            });
          })
          .end();
    },
  },
]);
