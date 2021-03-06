"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [98],
  {
    639: function (e, r, o) {
      o.r(r),
        o.d(r, "processFutureProofMsgs", function () {
          return g;
        });
      var t = o(9),
        u = o.n(t),
        n = o(7),
        s = o(11),
        f = o(17),
        a = o(302),
        i = o(67),
        p = o(62),
        l = o(154),
        d = o(2),
        c = o(75),
        _ = o(401),
        h = o(239),
        v = o(23),
        g = (0, c.c)()
          .finalStep("processFutureProofMsgs", () =>
            (0, a.b)()
              .then((e) => {
                __LOG__(
                  2
                )`processFutureProofMsgs received ${e.length} handleable future proof messages`;
                var r = new Map(),
                  o = new Map();
                function t(e, t) {
                  var u = "futureproof-handled" === t ? r : o,
                    n = u.get(e.chat);
                  n ? n.push(e.id) : u.set(e.chat, [e.id]);
                }
                var a = [];
                e.forEach((e) => {
                  var r = u()(e, 2),
                    o = r[0],
                    c = r[1];
                  if ("deleted" === c) return t(o, "futureproof-broken"), null;
                  var g = (function (e, r) {
                    var o;
                    try {
                      o = (0, i.a)(p.g, e.protobuf);
                    } catch (r) {
                      return (
                        __LOG__(
                          3
                        )`processFutureProofMsgs failed to decode protobuf for ${e.id}`,
                        null
                      );
                    }
                    var t = e.author,
                      u = e.deviceId;
                    if ("@me" === t || "@system" === t) return null;
                    var f = (0, n.A)(t, u || s.c);
                    return {
                      externalId: e.externalId,
                      jid: r,
                      author: f,
                      ts: e.ts,
                      proto: o,
                      bytes: new Uint8Array(e.protobuf),
                      edit: -1,
                      verifiedNameSerial: null,
                      verifiedLevel: null,
                      verifiedNameCert: null,
                      bspInfo: null,
                      pushname: null,
                      urlNumber: !1,
                      urlText: !1,
                      expiration: null,
                    };
                  })(o, c);
                  if (g)
                    switch (o.subtype) {
                      case "reaction":
                        if (!(0, v.a)("reactions_receive")) return;
                        if (!g.proto.reactionMessage)
                          return (
                            __LOG__(
                              4
                            )`Reaction futureproof protobuf does not contain reaction message. Deleting`,
                            void t(o, "futureproof-broken")
                          );
                        var b = (0, _.a)(g, g.proto.reactionMessage);
                        if (!b)
                          return (
                            __LOG__(
                              4
                            )`Invalid futureproof reaction protobuf. Deleting`,
                            void t(o, "futureproof-broken")
                          );
                        a.push((0, h.f)(b)), t(o, "futureproof-handled");
                        break;
                      default:
                        var m = (0, l.h)(g);
                        if (!m)
                          return (
                            __LOG__(4)`Invalid futureproof protobuf. Deleting`,
                            void t(o, "futureproof-broken")
                          );
                        if (m.msg.type === d.f.FUTUREPROOF) return;
                        m.msg.type === d.f.EPHEMERAL
                          ? t(o, "futureproof-broken")
                          : a.push((0, f.gd)(g.jid, m));
                    }
                  else t(o, "futureproof-broken");
                });
                var c = a.length,
                  g = 0;
                r.forEach((e, r) => {
                  (g += e.length),
                    a.push((0, f.m)(r, e, "futureproof-handled"));
                });
                var b = 0;
                return (
                  o.forEach((e, r) => {
                    (b += e.length),
                      a.push((0, f.m)(r, e, "futureproof-broken"));
                  }),
                  Promise.all(a).then(() => {
                    __LOG__(
                      2
                    )`processFutureProofMsgs ${c} messages were processed`,
                      __LOG__(
                        2
                      )`processFutureProofMsgs ${g} messages were removed (handled)`,
                      __LOG__(
                        2
                      )`processFutureProofMsgs ${b} messages were removed (broken)`;
                  })
                );
              })
              .then(() => {})
          )
          .end();
    },
  },
]);
